import { View, Image, Text, StyleSheet } from "react-native";
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.user}>
                <FontAwesome5 name='user-alt' size={30} color='#147271' />
            </View>
            <Image style={styles.logo} source={require('../assets/KU_Logo.png')} />
            <View>
                <View style={styles.notification_circle}><Text style={styles.notification_count}>1</Text></View>
                <Ionicons name="notifications" size={26} color="black" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 120,
        paddingTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        border: {color: 'black', size: 10},
        shadowColor: 'black',
        shadowOpacity: .5,
        shadowRadius: 5
    }, 
    user: {
        height: 40,
        width: 40,
        borderRadius: 45/2,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#147271',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#fff',
        overflow: 'hidden'
    }, 
    logo: {
        height: 60,
        width: 60,
        margin: 30
    },
    notification: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    notification_circle: {
        height: 18,
        width: 18,
        borderRadius: 18/2,
        backgroundColor: '#E21919',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -5,
        right: -5,
        zIndex: 1
    },
    notification_count: {
        color: '#fff',
        fontSize: 12
    }
});