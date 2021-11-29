import { FilterableField, FilterableRelation } from '@nestjs-query/query-graphql';
import { ObjectType, registerEnumType } from '@nestjs/graphql';
import { BaseDTO } from 'src/modules/base/dto/base.dto';
import { CollaboratorDTO } from 'src/modules/collaborators/dto/collaborator.dto';
import { TaskType } from '../entities/task.entity';

registerEnumType(TaskType, {
  name: "taskType",
});

@ObjectType('Task')
@FilterableRelation('collaborator', () => CollaboratorDTO, { nullable: true })
export class TaskDTO extends BaseDTO {

  @FilterableField()
  name: string;
  
  @FilterableField()
  expectedDeliveryDate: Date;

  @FilterableField()
  deliveryDate: Date;

  @FilterableField(() => TaskType ,{ nullable: true  })
  taskType?: TaskType;
  
}

