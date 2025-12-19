import { ActivityIndicator, Pressable, StyleSheet, Text, useColorScheme } from "react-native";

import { Colors } from "@/src/constants/colors";

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  variant?: "primary" | "outline" | "secondary" | "destructive";
  size?: "sm" | "default" | "lg";
}

const baseStyles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.5,
  },
});

export default function Button({
    title,
    onPress,
    disabled = false,
    loading = false,
    fullWidth = false,
    variant = "primary",
    size = "default",
}: ButtonProps) {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const colors = isDarkMode ? Colors.dark : Colors.light;

    const getVariantStyles = () => {
        switch (variant) {
            case "primary":
                return {
                    backgroundColor: colors.primary,
                    borderWidth: 0,
                };
            case "outline":
                return {
                    backgroundColor: 'transparent',
                    borderWidth: 2,
                    borderColor: colors.primary,
                };
            case "secondary":
                return {
                    backgroundColor: colors.secondary,
                    borderWidth: 0,
                };
            case "destructive":
                return {
                    backgroundColor: colors.error,
                    borderWidth: 0,
                };
            default:
                return {
                    backgroundColor: colors.primary,
                    borderWidth: 0,
                };
        }
    };

    const getSizeStyles = () => {
        switch (size) {
            case "sm":
                return {
                    paddingVertical: 8,
                    paddingHorizontal: 12,
                };
            case "lg":
                return {
                    paddingVertical: 14,
                    paddingHorizontal: 20,
                };
            case "default":
            default:
                return {
                    paddingVertical: 10,
                    paddingHorizontal: 16,
                };
        }
    };

    const getTextColor = () => {
        switch (variant) {
            case "primary":
                return colors.primaryForeground;
            case "outline":
                return colors.primary;
            case "secondary":
                return colors.secondaryForeground;
            case "destructive":
                return colors.primaryForeground;
            default:
                return colors.primaryForeground;
        }
    };

    return (
        <Pressable
            onPress={onPress}
            disabled={disabled || loading}
            style={({ pressed }) => [
                baseStyles.button,
                getVariantStyles(),
                getSizeStyles(),
                fullWidth && { width: '100%' },
                pressed && { opacity: 0.8 },
                (disabled || loading) && baseStyles.disabled,
            ]}
        >
            {loading ? (
                <ActivityIndicator 
                color={getTextColor()}
                size="small" 
            />
            ) : (
                <Text style={[
                    baseStyles.text, 
                    { color: getTextColor() }
                ]}>
                    {title}
                </Text>
            )}
        </Pressable>
    );
} 
