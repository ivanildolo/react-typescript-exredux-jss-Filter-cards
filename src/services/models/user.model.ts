import { BaseHttpModel, Action, Model } from 'exredux';

@Model
export class UserModel extends BaseHttpModel{
public count: number = 32;

@Action
public add(){
  this.count +=1;
}


@Action
public reset(){
  this.count = 0;
}
}