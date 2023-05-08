import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  email: string;

  // Select en false para que no me traiga la password
  // en la respuesta
  @Column('text', { select: false })
  password: string;

  @Column('text', {
    array: true,
    default: ['user'],
  })
  roles: string[];

  // @BeforeInsert()
  // checkUserFieldsBeforeInsert() {
  //   this.email = this.email.toLowerCase().trim();
  // }

  // @BeforeUpdate()
  // checkUserFieldsBeforeUpdate() {
  //   this.checkUserFieldsBeforeInsert();
  // }
}
