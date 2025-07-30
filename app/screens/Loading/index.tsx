import React, { useEffect } from 'react';
import { ActivityIndicator, Image, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface LoadingScreenProps { }
const Loading: React.FC<LoadingScreenProps> = () => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.navigate('Welcome');
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <ActivityIndicator
                size="large"
                color={"#a085ff"}
                style={{
                    // position: 'absolute',
                    // top: 260,
                    marginTop: 20,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 300,
        height: 150
        // borderRadius:10

    },
});
export default Loading;