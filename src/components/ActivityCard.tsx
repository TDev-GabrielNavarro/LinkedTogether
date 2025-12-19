import { Colors } from '@/src/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import Card from './Card';

interface ActivityCardProps {
  userName: string;
  action: string;
  emoji: string;
  timestamp: string;
  avatarColor?: string;
  onPress?: () => void;
}

export default function ActivityCard({
  userName,
  action,
  emoji,
  timestamp,
  avatarColor,
  onPress,
}: ActivityCardProps) {
  const colorScheme = useColorScheme();
  const colors = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <Card onPress={onPress}>
      <View style={styles.container}>
        {/* Avatar circular a la izquierda */}
        <View style={[
          styles.avatar,
          { backgroundColor: avatarColor || colors.primary }
        ]}>
          <Ionicons name="person" size={20} color="#FFFFFF" />
        </View>

        {/* Contenido principal */}
        <View style={styles.content}>
          {/* Primera línea: Emoji + Texto */}
          <View style={styles.mainLine}>
            <Text style={styles.emoji}>{emoji}</Text>
            <Text style={[styles.text, { color: colors.text }]}>
              <Text style={styles.userName}>{userName}</Text>
              {' '}{action}
            </Text>
          </View>

          {/* Segunda línea: Timestamp */}
          <Text style={[styles.timestamp, { color: colors.textSecondary }]}>
            {timestamp}
          </Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  mainLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  emoji: {
    fontSize: 16,
  },
  text: {
    fontSize: 15,
    flex: 1,
  },
  userName: {
    fontWeight: '600',
  },
  timestamp: {
    fontSize: 12,
    marginTop: 2,
  },
});