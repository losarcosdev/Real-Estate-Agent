import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { PropertyImages } from './property-images.entity';
import { createSlug, generateMetaKeywords } from 'utils';

@Entity({ name: 'properties' })
export class Property {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  title: string;

  @Column('text', {
    unique: true,
  })
  slug: string;

  @Column('float', { default: 0 })
  price: number;

  @Column('int', { default: 1 })
  rooms: number;

  @Column('int', { default: 1 })
  bathrooms: number;

  @Column('float')
  totalArea: number;

  @Column('float', { nullable: true })
  coveredArea: number;

  @Column('text', { nullable: true })
  description: string;

  @Column('text')
  address: string;

  @Column('text')
  type: string;

  @Column('text')
  operation: string;

  @Column('int', { nullable: true })
  bedrooms: number;

  @Column('int', { nullable: true, default: 0 })
  antiquity: number;

  @OneToMany(() => PropertyImages, (image) => image.property, {
    cascade: true,
    eager: true,
    nullable: true,
  })
  images: PropertyImages[];

  @Column({ nullable: true })
  metaKeywords: string;

  @Column({ nullable: true })
  metaDescription: string;

  // @BeforeInsert()
  // generateSlug() {
  //   if (!this.slug) {
  //     this.slug = createSlug(this.title);
  //   }
  //   this.slug = this.slug;
  // }

  // @BeforeInsert()
  // @BeforeUpdate()
  // setMetaTags() {
  //   this.metaKeywords = generateMetaKeywords(this.title);
  //   this.metaDescription = this.description;
  // }
}
