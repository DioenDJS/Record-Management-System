import { BaseDTO } from 'src/modules/base/dto/base.dto';
@ObjectType('Task')
export class TaskDTO extends BaseDTO {

  @FilterableField()
  name: string;
  
  @FilterableField()
  expectedDeliveryDate: Date;

  @FilterableField()
  deliveryDate: Date;

  
}
