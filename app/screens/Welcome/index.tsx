import React, { useState } from 'react';
import { mockParkingSpots } from "../../components/ParkingList"
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    ToastAndroid,
    StyleSheet
} from 'react-native';
import { ParkingSpot, CurrentLocation } from "../../types"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import { showMessage, hideMessage } from "react-native-flash-message";
import { haversineDistance, isAlongRoute, MAX_DISTANCE_KM, currentLocation, destination } from "../../utils"


export default function App() {
    const [query, setQuery] = useState<string>('');
    const [results, setResults] = useState<
        (ParkingSpot & { distance: number; alongRoute: boolean,maxDistance: number })[]
    >([]);

    const handleFindParking = (): void => {
        if (!query) return;
        const timeMatch = query.match(/(\d+)\s*minutes?/i);
        const timeLimit = timeMatch ? parseInt(timeMatch[1], 10) : 30;
        const maxDistance = (timeLimit / 60) * 60; // ~60 km/h
        console.log({ timeLimit, maxDistance ,timeMatch})

        const processed = mockParkingSpots.map((spot) => {
            const distance = haversineDistance(
                currentLocation.lat,
                currentLocation.lon,
                spot.lat,
                spot.lon
            );
            return {
                ...spot,
                maxDistance,
                distance,
                alongRoute: isAlongRoute(currentLocation, destination, spot)
            };
        });

        const reachableSpots = processed.filter(
            (spot) => spot.distance <= maxDistance && spot.availability
        );

        const farSpots = processed.filter(
            (spot) => spot.distance > maxDistance && spot.alongRoute && spot.availability
        );

        setResults([...reachableSpots, ...farSpots]);
    };


    const handleReserve = (name: string): void => {
        setResults([]);
        setQuery('');
        showMessage({
            message: `${name} reserved successfully!`,
            type: "success"
        });

    };

    const simulateVoiceInput = (): void => {
        setQuery('Find me a parking spot on the way to Munich in 30 minutes');
    };

const renderItem = ({
  item
}: {
  item: ParkingSpot & { distance: number; alongRoute: boolean ,maxDistance: number };
}) => {
  // Determine badge color and text
  let badgeColor = '#FF3B30'; // default = off route
  let badgeText = 'Off Route';

  if (item.distance <= item.maxDistance) {
    badgeColor = '#34C759';
    badgeText = 'Reachable Now';
  } else if (item.alongRoute) {
    badgeColor = '#FF9500';
    badgeText = 'Farther on Route';
  }

  return (
    <Animatable.View animation="fadeInUp" duration={600} style={styles.card}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <View style={styles.infoRow}>
        <Icon name="map-marker" size={18} color="#007AFF" />
        <Text style={styles.infoText}>
          {item.distance.toFixed(1)} km away
        </Text>
      </View>
      <View style={styles.infoRow}>
        <Icon name="currency-eur" size={18} color="#007AFF" />
        <Text style={styles.infoText}>{item.price}</Text>
      </View>
      <View style={[styles.badge, { backgroundColor: badgeColor }]}>
        <Text style={styles.badgeText}>{badgeText}</Text>
      </View>
      <TouchableOpacity
        style={styles.reserveButton}
        onPress={() => handleReserve(item.name)}
      >
        <Text style={styles.reserveText}>Reserve</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.header}>🚛 Cargovibe Parking Finder</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Type or use voice..."
                    value={query}
                    onChangeText={setQuery}
                    multiline={true}
                />

                <View style={styles.actions}>
                    <Animatable.View
                        animation="pulse"
                        easing="ease-out"
                        iterationCount="infinite"
                    >
                        <TouchableOpacity style={styles.voiceButton} onPress={simulateVoiceInput}>
                            <Icon name="microphone" size={22} color="#fff" />
                        </TouchableOpacity>
                    </Animatable.View>

                    <TouchableOpacity style={styles.searchButton} onPress={handleFindParking}>
                        <Text style={styles.searchText}>Find Parking</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={results}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    style={{ marginTop: 20 }}
                />
            </View>
        </SafeAreaView>
    );
}

// --- 5) Styles ---
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#f5f7fa' },
    header: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, color: '#007AFF' },
    input: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        backgroundColor: '#fff',
        elevation: 2
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        alignItems: 'center'
    },
    voiceButton: {
        backgroundColor: '#007AFF',
        borderRadius: 50,
        padding: 14,
        elevation: 3
    },
    searchButton: {
        flex: 1,
        marginLeft: 10,
        backgroundColor: '#007AFF',
        paddingVertical: 14,
        borderRadius: 30,
        alignItems: 'center',
        elevation: 2
    },
    searchText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 16,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 3
    },
    cardTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 8 },
    infoRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
    infoText: { marginLeft: 6, fontSize: 15, color: '#555' },
    badge: {
        marginTop: 8,
        alignSelf: 'flex-start',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 4
    },
    badgeText: { color: '#fff', fontWeight: 'bold', fontSize: 12 },
    reserveButton: {
        marginTop: 12,
        backgroundColor: '#34C759',
        borderRadius: 25,
        paddingVertical: 10,
        alignItems: 'center'
    },
    reserveText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});