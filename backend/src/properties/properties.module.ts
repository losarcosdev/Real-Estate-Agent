import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyImages, Property } from './entities';
import { AuthModule } from '../auth/auth.module';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  controllers: [PropertiesController],
  providers: [PropertiesService],
  imports: [
    TypeOrmModule.forFeature([Property, PropertyImages]),
    AuthModule,
    CloudinaryModule,
  ],
  exports: [PropertiesService, TypeOrmModule],
})
export class PropertiesModule {}
