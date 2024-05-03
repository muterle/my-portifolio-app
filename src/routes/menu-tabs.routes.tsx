import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/ProfileScreen";
import SoftSkillsScreen from "../screens/SoftSkillsScreen";
import HardSkillsScreen from "../screens/HardSkillsScreen";
import ContactScreen from "../screens/ContactScreen";
import BioScreen from "../screens/BioScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

const MenuTabsRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: "#00c16c",
        tabBarInactiveTintColor: "#90ff99",
        tabBarStyle: {
          backgroundColor: "#002e34",
        },
        headerTintColor: "#00c16c",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#002e34",
        },
      }}
    >
      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="face-man" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Bio"
        component={BioScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Screen
        name="Soft Skills"
        component={SoftSkillsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-heart"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Screen
        name="Hard Skills"
        component={HardSkillsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-hard-hat"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="card-account-details"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default MenuTabsRoutes;
