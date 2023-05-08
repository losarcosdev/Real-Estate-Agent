import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto, UpdatePropertyDto } from './dto';
import { ParseUUIDPipe } from '@nestjs/common';
import { QueryDto } from '../common/dto';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces';
import { FilesInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Auth(ValidRoles.admin)
  @Post()
  create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertiesService.create(createPropertyDto);
  }

  @Get()
  findAll(
    @Query()
    queryDto: QueryDto,
  ) {
    return this.propertiesService.findAll(queryDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.propertiesService.findOne(term);
  }

  @Auth(ValidRoles.admin)
  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatePropertyDto: UpdatePropertyDto,
  ) {
    return this.propertiesService.update(id, updatePropertyDto);
  }

  @Auth(ValidRoles.admin)
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.propertiesService.remove(id);
  }

  @Auth(ValidRoles.admin)
  @Post('upload')
  @UseInterceptors(FilesInterceptor('images'))
  uploadImageToCloudinary(
    @UploadedFiles()
    images: Express.Multer.File[],
  ) {
    return this.propertiesService.uploadImageToCloudinary(images);
  }
}
