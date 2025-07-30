import { ParkingSpot } from "../types";

// --- 1) Mock Parking Spots (between Bamberg → Munich) ---
export const mockParkingSpots: ParkingSpot[] = [
  {
    id: '1',
    name: 'Autohof Bamberg Süd',
    lat: 49.820,   
    lon: 10.950,
    availability: true,
    price: '€8'
  },
  {
    id: '2',
    name: 'Autohof Hirschaid',
    lat: 49.800,
    lon: 10.990,
    availability: true,
    price: '€9'
  },
  {
    id: '3',
    name: 'Autohof Forchheim',
    lat: 49.720,
    lon: 11.050,
    availability: false,
    price: '€7'
  },
  {
    id: '4',
    name: 'Autohof Greding',
    lat: 49.046,
    lon: 11.345,
    availability: true,
    price: '€12'
  },
  {
    id: '5',
    name: 'Autohof Hilpoltstein',
    lat: 49.200,
    lon: 11.300,
    availability: true,
    price: '€10'
  }
];