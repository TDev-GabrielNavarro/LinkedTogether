import { Colors } from '@/src/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.mutedForeground,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 1,
          borderTopColor: colors.border,
        },
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="ghost-bump"
        options={{
          title: 'Bump',
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="ghost" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="moods"
        options={{
          title: 'Moods',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="face-smile-wink" size={size} color={color} />
          ),
        }}
      /> 

      <Tabs.Screen
        name="blink"
        options={{
          title: 'Blinks',
          tabBarIcon: ({ color, size}) => (
            <Ionicons name="flash-outline" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="soundpad"
        options={{
          title: 'Soundpad',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="volume-medium" color={color} size={size} />
          ),
        }}
      />

    </Tabs>
  );
}
