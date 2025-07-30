export type ParkingSpot = {
  id: string;
  name: string;
  location: string;
  driveTime: number; // in minutes
  availability: boolean;
  price: string;
};
export const mockParkingSpots: ParkingSpot[] = [
  {
    id: '1',
    name: 'Autohof Greding',
    location: 'Greding, Germany',
    driveTime: 23,
    availability: true,
    price: '€12'
  },
  {
    id: '2',
    name: 'Autohof Schweitenkirchen',
    location: 'Schweitenkirchen, Germany',
    driveTime: 28,
    availability: true,
    price: '€10'
  },
  {
    id: '3',
    name: 'Autohof Pfaffenhofen',
    location: 'Pfaffenhofen, Germany',
    driveTime: 35,
    availability: false,
    price: '€11'
  }
];
