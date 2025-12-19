import ActivityCard from '@/src/components/ActivityCard';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import { Colors } from '@/src/constants/colors';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = colorScheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Card de bienvenida */}
      <Card>
        <Text style={[styles.title, { color: colors.text }]}>Hola! 👋</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          Bienvenido a Linked Together
        </Text>
      </Card>

      {/* ActivityCard 1 */}
      <ActivityCard
        userName="Juan"
        action="te envió un bump"
        emoji="👻"
        timestamp="Hace 2 horas"
        avatarColor="#6C5CE7"
        onPress={() => console.log('Ver actividad de Juan')}
      />

      {/* ActivityCard 2 */}
      <ActivityCard
        userName="María"
        action="cambió su mood a"
        emoji="😊"
        timestamp="Hace 15 min"
        avatarColor="#FD79A8"
      />

      {/* Card con botón */}
      <Card>
        <Text style={[styles.cardText, { color: colors.text }]}>
          ¿Todo listo?
        </Text>
        <Button 
          title="Continuar" 
          onPress={() => console.log('Continuar')} 
          variant="primary" 
          fullWidth 
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
  },
  cardText: {
    marginBottom: 12,
    fontWeight: '600',
    fontSize: 16,
  },
});
