import { BaseEntity } from 'src/modules/base/entities/base.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Collaborator extends BaseEntity {

  @Column()
  name: string;
  
  @Column({unique:true})
  CPF: string;

}
