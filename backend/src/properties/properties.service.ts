import { NotFoundException } from '@nestjs/common';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource, DeleteResult } from 'typeorm';
import { Property, PropertyImages } from './entities';
import { UpdatePropertyDto, CreatePropertyDto } from './dto';
import { validate as isUUID } from 'uuid';
import { QueryDto } from '../common/dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class PropertiesService {
  private readonly logger = new Logger('PropertiesService');

  constructor(
    @InjectRepository(Property)
    private readonly propertyRepository: Repository<Property>,
    @InjectRepository(PropertyImages)
    private readonly propertyImagesRepository: Repository<PropertyImages>,
    private readonly dataSource: DataSource,
    private readonly cloudinary: CloudinaryService,
  ) {}

  async create(createPropertyDto: CreatePropertyDto) {
    try {
      const { images = [], ...rest } = createPropertyDto;

      // Crea un nuevo objeto "property" utilizando el resto de las propiedades y mapea
      // el array de imágenes a un array de objetos de imagen con una propiedad url
      const property = this.propertyRepository.create({
        ...rest,
        images: images.map((image) =>
          this.propertyImagesRepository.create({ url: image }),
        ),
      });

      // Guarda la nueva propiedad en la base de datos
      await this.propertyRepository.save(property);

      // Retorna la propiedad con las imagenes
      return { ...property, images };
    } catch (error) {
      // Maneja cualquier error que pueda ocurrir
      this.handleErrors(error);
    }
  }

  async findAll(queryDto: QueryDto) {
    const { order_title, order_price, operation } = queryDto;

    const propertiesData = await this.propertyRepository.find({
      order: { price: order_price, title: order_title },
      where: { operation },
      relations: { images: true },
    });

    const properties = propertiesData.map((property) => ({
      bathrooms: property.bathrooms,
      rooms: property.rooms,
      coveredArea: property.coveredArea,
      title: property.title,
      price: property.price,
      totalArea: property.totalArea,
      id: property.id,
      slug: property.slug,
      operation: property.operation,
      images: property.images.map((image) => image.url),
    }));

    return properties;
  }

  async findOne(term: string): Promise<Property> {
    try {
      let condition: object = { slug: term };
      7;
      if (isUUID(term)) {
        condition = { id: term };
      }

      const property = await this.propertyRepository.findOneBy(condition);

      if (!property) {
        throw new NotFoundException(
          `Not found a property with that term or id: ${term}`,
        );
      }

      return property;
    } catch (error) {
      this.handleErrors(error);
    }
  }

  async update(id: string, updatePropertyDto: UpdatePropertyDto) {
    // Desestructurar el objeto "updatePropertyDto" para obtener las imágenes y el resto de los datos.
    const { images, ...rest } = updatePropertyDto;

    // Cargar la propiedad especificada en la base de datos.
    const property = await this.propertyRepository.preload({
      id,
      ...rest,
    });

    // Si la propiedad no existe, lanzar una excepción de elemento no encontrado.
    if (!property) {
      throw new NotFoundException(`Property with id: ${id} not found`);
    }

    // Crear una instancia de QueryRunner e iniciar una transacción
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.startTransaction();

      if (images) {
        await queryRunner.manager.delete(PropertyImages, { property: { id } });
        property.images = images.map((image) =>
          this.propertyImagesRepository.create({ url: image }),
        );
      }

      await queryRunner.manager.save(property);
      await queryRunner.commitTransaction();

      // Crear la propiedad actualizada
      const updatedProperty = {
        ...property,
        images: images && images.map((image) => image),
      };

      // Guardar los cambios y confirmar la transacción
      await queryRunner.manager.save(property);
      await queryRunner.commitTransaction();

      // Devolver la propiedad actualizada
      return updatedProperty;
    } catch (error) {
      // Si ocurre un error, ejecutar un rollback para revertir los cambios y lanzar una excepción
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleErrors(error);
    }
  }

  async remove(id: string): Promise<string> {
    const property = await this.findOne(id);
    await this.propertyRepository.remove(property);
    return `Property with id: ${id} deleted successfully`;
  }

  async deleteAllProperties(): Promise<DeleteResult> {
    const query = this.propertyRepository.createQueryBuilder('product');
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleErrors(error);
    }
  }

  async uploadImageToCloudinary(images: Express.Multer.File[]) {
    const imageUrls = await Promise.all(
      images.map(async (image) => {
        const { secure_url } = await this.cloudinary
          .uploadImage(image)
          .catch(() => {
            throw new BadRequestException('Invalid file type.');
          });
        return secure_url;
      }),
    );

    return imageUrls;
  }

  private handleErrors(error: any) {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }

    this.logger.error(`Unexpected error: ${error}`);
    throw new InternalServerErrorException('Server error - check logs');
  }
}
