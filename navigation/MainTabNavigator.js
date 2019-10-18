import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import NikolasScreen from '../screens/NikolasScreen';
import JeanScreen from '../screens/JeanScreen';
import EmannuelScreen from '../screens/EmannuelScreen';
import LayaneScreen from '../screens/LayaneScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// const HomeStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//   },
//   config
// );

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };

// HomeStack.path = '';

const NikolasStack = createStackNavigator(
  {
    Nikolas: NikolasScreen,
  },
  config
);

NikolasStack.navigationOptions = {
  tabBarLabel: 'Nikolas',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} />
  ),
};

NikolasStack.path = '';

const JeanStack = createStackNavigator(
  {
    Jean: JeanScreen,
  },
  config
);

JeanStack.navigationOptions = {
  tabBarLabel: 'Jean',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} />
  ),
};

JeanStack.path = '';

const EmannuelStack = createStackNavigator(
  {
    Emannuel: EmannuelScreen,
  },
  config
);

EmannuelStack.navigationOptions = {
  tabBarLabel: 'Emannuel',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-happy' : 'logo-game-controller-b'} />
  ),
};

EmannuelStack.path = '';

const LayaneStack = createStackNavigator(
  {
    Layane: LayaneScreen,
  },
  config
);

LayaneStack.navigationOptions = {
  tabBarLabel: 'Layane',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} />
  ),
};

LayaneStack.path = '';

const tabNavigator = createBottomTabNavigator({
  NikolasStack,
  JeanStack,
  EmannuelStack,
  LayaneStack,
});

tabNavigator.path = '';

export default tabNavigator;
