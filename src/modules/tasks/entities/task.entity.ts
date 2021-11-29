import { BaseEntity } from 'src/modules/base/entities/base.entity';
@Entity()
export class Task extends BaseEntity {

  @Column()
  name: string;
  
  @Column()
  expectedDeliveryDate: Date;

  @Column()
  deliveryDate: Date;

  @Column({nullable: true})
  collaboratorId?: string;

}
