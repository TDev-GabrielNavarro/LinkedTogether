import { Colors } from '@/src/constants/colors';
import React from 'react';
import { Pressable, StyleSheet, View, ViewStyle, useColorScheme } from 'react-native';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
}

const baseStyles = StyleSheet.create({
    card: {
        borderRadius: 16,
        padding: 16,
        borderWidth: 1,

        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        elevation: 3,
    },
});

export default function Card({ 
    children,
    onPress, 
    style, 
}: CardProps) {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';

    const colors = isDarkMode ? Colors.dark : Colors.light;

    const dynamicStyles = {
        backgroundColor: colors.card,
        borderColor: colors.border,
        shadowColor: colors.shadow,
    };

    const cardStyles = [
        baseStyles.card,
        dynamicStyles,
        style,
    ];
    
    if (onPress) {
        return (
            <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                ...cardStyles,
                pressed && { opacity: 0.7 },
            ]}
            >
                {children}
            </Pressable>
        );
    }

    return (
        <View style={cardStyles}>
            {children}
        </View>
    );

}
