import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import COLORS from "../common/colors"
import { Movies, Category } from "../screens"
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome'
import { removeDataFromLocalStorage } from "../utils/AsyncStorage"

const MainStack = createStackNavigator()

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
    </MainStack.Navigator>
  )
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  )
}

