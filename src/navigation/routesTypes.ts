import { RootAuthStack } from './AuthStack/routeTypes';
import { RootHomeStack } from './HomeStack/routeTypes';

export type RootStack = {
    Auth: RootAuthStack;
    HomeScreen: RootHomeStack;
};
