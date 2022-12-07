import { StackRootParamList } from '../presentation/routes/Stack.router';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackRootParamList {}
  }
}
