import { UserType } from '@/lib/constants';
import { Property } from './property';

export interface User {
  id: string;
  username: string;
  password: string;
  name: string;
  lastname: string;
  mobile: string;
  email: string;
  profilePic: string;
  agency: string;
  type: UserType;
  properties: Property[];
  likedProperties: Property[];
  appointmentRequests: Appointment[];
}

export interface Appointment {
  id: string;
  requestedDate: Date;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  customer: User;
  property: Property;
  approvedDate?: Date;
  rejectionReason?: string;
}
