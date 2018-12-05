import { createBottomTabNavigator } from 'react-navigation'
import ProfilePage from './ProfilePage'
import ShopPage from './ShopPage'

export const MainNavigator = createBottomTabNavigator({
  Profile: {
    screen: ProfilePage,
    navigationOptions: {
      tabBarLabel: 'Profile'
    }
  },
  Shop: {
    screen: ShopPage,
    navigationOptions: {
      tabBarLabel: 'Shop'
    }
  }
})