import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal, SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';
import { Ionicons, MaterialCommunityIcons, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';

export default function Categories() {
    const [isTranscript, setIsTranscript] = useState(false);

    return (
        <View style={styles.categories}>
            <Text style={styles.categories_title}>Categories</Text>
            <View style={styles.categories_container}>
                <View style={styles.categories_row}>
                    <View style={styles.category}>
                        <View style={styles.category_box}><MaterialCommunityIcons name="book-education" size={35} color="white" /></View>
                        <Text style={styles.category_title}>Score</Text>
                    </View>
                    <View style={styles.category}>
                        <View style={styles.category_box}><FontAwesome5 name="user-tie" size={35} color="white" /></View>
                        <Text style={styles.category_title}>Nisit info</Text>
                    </View>
                    <View style={styles.category}>
                        <View style={styles.category_box}><MaterialCommunityIcons name="vote" size={35} color="white" /></View>
                        <Text style={styles.category_title}>Vote</Text>
                    </View>
                    <View style={styles.category}>
                        <View style={styles.category_box}><MaterialCommunityIcons name="parking" size={35} color="white" /></View>
                        <Text style={styles.category_title}>Parking</Text>
                    </View>
                </View>
                <View style={styles.categories_row}>
                    <View style={styles.category}>
                        <View style={styles.category_box}><Ionicons name="library-sharp" size={35} color="white" /></View>
                        <Text style={styles.category_title}>Library</Text>
                    </View>
                    <Pressable onPress={() => { setIsTranscript(true); }}>
                        <View style={styles.category}>
                            <View style={styles.category_box}><Ionicons name="document-text" size={35} color="white" /></View>
                            <Text style={styles.category_title}>Transcript</Text>
                        </View>
                    </Pressable>
                    <View style={styles.category}>
                        <View style={styles.category_box}><Ionicons name="calendar" size={35} color="white" /></View>
                        <Text style={styles.category_title}>Events</Text>
                    </View>
                    <View style={styles.category}>
                        <View style={styles.category_box}><FontAwesome6 name="people-line" size={35} color="white" /></View>
                        <Text style={styles.category_title}>KU-Jam</Text>
                    </View>
                </View>
            </View>

            <Modal
                visible={isTranscript}
                onRequestClose={() => setIsTranscript(false)}
                animationType="slide"
                presentationStyle="pageSheet"
            >
                <SafeAreaView style={{ flex: 1 }}>
                    <WebView
                        originWhitelist={['https://ku-transcript-activity.vercel.app']}
                        source={{
                            uri: 'https://ku-transcript-activity.vercel.app/'
                        }}
                    />
                </SafeAreaView>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    categories: {
        flexDirection: 'column',
        marginTop: 35
    },
    categories_title: {
        color: '#147271',
        fontSize: 18,
        marginBottom: 20
    },
    categories_container: {
        flexDirection: 'column'
    },
    categories_row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10
    },
    category: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    category_box: {
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#24807D'
    },
    category_title: {
        color: 'grey',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 25
    }
});