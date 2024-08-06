import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {StackNavigator} from './src/presentation/routes/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
