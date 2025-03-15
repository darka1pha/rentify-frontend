export type Property = {
  id: string;
  builtYear: string;
  propertyType: PropertyType;
  transactionType: TransactionType;
  status: PropertyStatus;
  bathroomCount: number;
  roomCount: number;
  securityDeposit: number;
  price: number;
  isConvertible: boolean;
  readyToVisit: boolean;
  isRented: boolean;
  latitude: number;
  longitude: number;
  floorNumber: number;
  floorCount: number;
  unitPerFloor: number;
  area: number;
  address: string;
  description: string;
  views: number;
  createdAt: string;
  state: { name: string };
  city: { name: string };
  facilities: Facility[];
  likedBy: { id: string }[];
  media: { fileUrl: string }[];
  isLiked: boolean;
};

export enum PropertyType {
  APARTMENT = 'APARTMENT',
  HOUSE = 'HOUSE',
}

export enum TransactionType {
  SELL = 'SELL',
  RENT = 'RENT',
}

export enum PropertyStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
}

// Define Facility Type (if not defined already)
export type Facility = {
  id: string;
  name: string;
};
