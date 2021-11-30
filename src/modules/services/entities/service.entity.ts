import { BaseEntity } from 'src/modules/base/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Service extends BaseEntity{

  @Column()
  name: string;

  @Column()
  expectedDeliveryDate: Date;
  
}
