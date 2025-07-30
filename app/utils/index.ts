import {   ParkingSpot,CurrentLocation } from "../types"
 
// ---  Constants ---
export const MAX_DISTANCE_KM = 30;
export const currentLocation: CurrentLocation = { lat: 49.8987, lon: 10.9028 }; // Bamberg
export const destination: CurrentLocation = { lat: 48.1351, lon: 11.5820 }; // Munich

// --  Utility Functions ---
export const toRad = (deg: number) => (deg * Math.PI) / 180;

export const haversineDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371; // Earth radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Simple vector angle check
export const isAlongRoute = (
  current: CurrentLocation,
  destination: CurrentLocation,
  spot: ParkingSpot
): boolean => {
  const v1 = {
    x: destination.lon - current.lon,
    y: destination.lat - current.lat
  };
  const v2 = {
    x: spot.lon - current.lon,
    y: spot.lat - current.lat
  };

  const dot = v1.x * v2.x + v1.y * v2.y;
  const mag1 = Math.sqrt(v1.x ** 2 + v1.y ** 2);
  const mag2 = Math.sqrt(v2.x ** 2 + v2.y ** 2);

  const angle = Math.acos(dot / (mag1 * mag2));
  const angleDeg = (angle * 180) / Math.PI;

  return angleDeg < 30;  
};
