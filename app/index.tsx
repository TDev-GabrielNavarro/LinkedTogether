import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Linked Together!🦖</Text>
      <Link href="/(tabs)">
        <Text style={{ color: '#6C5CE7', marginTop: 20 }}>Ir a la app →</Text>
      </Link>
    </View>
  );
}