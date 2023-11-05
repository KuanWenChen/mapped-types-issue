import { PickType } from "@nestjs/mapped-types";
import { Expose, Transform, plainToInstance } from "class-transformer";

const transformExecuteSequenceList: string[] = [];
class Grandparent {
  @Expose()
  @Transform(function grandparentTransform() {
    transformExecuteSequenceList.push(Grandparent.name);
    return 0;
  })
  value!: number;
}
class Parent extends Grandparent {
  @Transform(function parentTransform() {
    transformExecuteSequenceList.push(Parent.name);
    return 1;
  })
  value!: number;
}
class Children extends PickType(Parent, ["value"]) {
  @Transform(function childrenTransform(params) {
    transformExecuteSequenceList.push(Children.name);
    return params.value;
  })
  value!: number;
}

const children = plainToInstance(Children, {});
console.log({ transformExecuteSequenceList, childrenValue: children.value });
