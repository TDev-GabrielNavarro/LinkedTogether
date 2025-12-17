import { Tabs } from 'expo-router';
import { Ioicons } from '@expo/vector-icons';
import { Colors } from '@/src/constants/colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={
        tabBarActiveTintColor: Colors.light.primary,
        tabBarInactiveTintColor: Colors.light.mutedForeground,
        tabBarStyle: {
          backgroundColor: Colors.light.background,
          borderTopWidth: 1,
          borderTopColor: Colors.light.border,
        },
      }}
    >
      <Tabs.Screen