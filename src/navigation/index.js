import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import Icon from "react-native-vector-icons/FontAwesome"
import AntDesignIcon from "react-native-vector-icons/AntDesign"
import COLORS from "../common/colors"
import {
  Home,
  Movies,
  Category
} from "../screens"
import IMAGES from "../common/images"
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome'
import { removeDataFromLocalStorage } from "../utils/AsyncStorage"

const MainStack = createStackNavigator()

export const navigationRef = React.createRef()

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params)
}

function MainStackNavigator() {
  return (
    <MainStack.Navigator
      initialRouteName={"Category"}
      tabBarOptions={{
        activeTintColor: COLORS.FULL_WHITE,
        inactiveTintColor: COLORS.TRAVELYALLA_BLUE,
        style: {
          backgroundColor: COLORS.TRAVELYALLA_GREEN,
          height: 70,
        }
      }}>
      <MainStack.Screen
        name="Category"
        component={Category}
        options={({ route }) => ({ 
          title: route.params.name,
          tabBarLabel: "Category",
        })}
        options={{
          headerRight: () => (
            <FontAwsomeIcon
              onPress={() => {
                removeDataFromLocalStorage(STORAGE_KEYS.CATEOGRIES)
                alert('Storage was rest to default data, now pull to refresh and restore defaults!')
              }}
              name={'trash-o'} color={'red'} size={30}
              style={{ marginRight: 26 }}
            />
          ),
        }}
      />

      <MainStack.Screen
        name="Movies"
        component={Movies}
        options={({ route }) => ({ 
          title: route.params.name,
        })}
      />
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{}}
      />
    </MainStack.Navigator>
  )
}

export default function Navigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStackNavigator />
    </NavigationContainer>
  )
}

