import Button from '@/src/components/Button';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Button
                title="Press Me"
                onPress={() => console.log('Button Pressed')}
                variant="primary"
            />

            <Button
                title="Outline Button"
                onPress={() => console.log('Outline Button Pressed')}
                variant="outline"
            />

            <Button
                title="Secondary Button"
                onPress={() => console.log('Secondary Button Pressed')}
                variant="secondary"
            />

            <Button
                title="Destructive Button"
                onPress={() => console.log('Destructive Button Pressed')}
                variant="destructive"
            />

            <Button
                title="Loading Button"
                onPress={() => console.log('Loading Button Pressed')}
                loading={true}
            />

            <Button
                title="Disabled Button"
                onPress={() => console.log('Disabled Button Pressed')}
                disabled={true}
            />

            <Button
                title="Full Width Button"
                onPress={() => console.log('Full Width Button Pressed')}
                fullWidth={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
});
