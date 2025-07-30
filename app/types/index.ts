export type ParkingSpot = {
  id: string;
  name: string;
  maxDistance?: number;
  lat: number;
  lon: number;
  availability: boolean;
  price: string;
};
export type CurrentLocation = {
  lat: number;
  lon: number;
};
 