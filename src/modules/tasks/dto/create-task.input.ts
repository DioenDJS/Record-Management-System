import { InputType, Field } from '@nestjs/graphql';
import { TaskType } from '../entities/task.entity';
@InputType()
export class CreateTaskInput {
  
  @Field()
  name: string;
  
  @Field()
  expectedDeliveryDate: Date;

  @Field()
  deliveryDate: Date;

  @Field(() => TaskType ,{ nullable: true  })
  taskType?: TaskType;
}
