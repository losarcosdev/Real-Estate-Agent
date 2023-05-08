import { Injectable } from '@nestjs/common';
import { PropertiesService } from '../properties/properties.service';
import { initialData } from './data/seed-data';
import { Auth } from '../auth/decorators/auth.decorator';
import { ValidRoles } from 'src/auth/interfaces';

@Auth(ValidRoles.admin)
@Injectable()
export class SeedService {
  constructor(private readonly propertyServices: PropertiesService) {}

  /**
   *Populate the database with initial data.
   *@returns Promise that resolves with a success message when the database population is completed.
   */
  async populateDB(): Promise<'Seed executed'> {
    await this.deleteTables();
    await this.insertNewProperties();
    return `Seed executed`;
  }

  /**
   * Delete all properties from the database.
   */
  async deleteTables(): Promise<void> {
    // Delete all properties from the database.
    await this.propertyServices.deleteAllProperties();
  }

  private async insertNewProperties() {
    // Initial "properties" array.
    const properties = initialData.properties;

    const propertiesPromises = [];

    // Iterate over the "properties" array and call the "create" method.
    // Each call to the "create" method is a promise that is stored in the "propertiesPromises" array
    properties.forEach((property) =>
      propertiesPromises.push(this.propertyServices.create(property)),
    );

    // Wait for all product creation promises to complete.
    await Promise.all(propertiesPromises);

    // Once complete, return true.
    return true;
  }
}
