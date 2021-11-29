import { BaseEntity } from 'src/modules/base/entities/base.entity';
export enum TaskType {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  FINISHED = "FINISHED",
}
@Entity()
export class Task extends BaseEntity {

  @Column()
  name: string;
  
  @Column()
  expectedDeliveryDate: Date;

  @Column()
  deliveryDate: Date;

  @Column({ type: 'enum', enum: TaskType , nullable: true  })
  taskType?: TaskType;
  @Column({nullable: true})
  collaboratorId?: string;

}
