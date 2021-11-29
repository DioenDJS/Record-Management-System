import { BaseEntity } from 'src/modules/base/entities/base.entity';
import { Collaborator } from 'src/modules/collaborators/entities/collaborator.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

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

  @ManyToOne(() => Collaborator, (collaborator) => collaborator.tasks)
  collaborator: Collaborator;

  @Column({nullable: true})
  collaboratorId?: string;

}
