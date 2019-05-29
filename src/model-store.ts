import { ModelStore } from 'exredux';
import { UserModel } from '@services/models/user.model';

export const appModelStore = new ModelStore({
  devExtension: true,
  models: [UserModel]
});