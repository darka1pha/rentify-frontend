export const API = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001',
  SIGNUP: '/auth/signup',
  PROPERTIES: '/properties',
  PROFILE: '/user/profile',
};

export const APP_URLS = {
  HOME: '/',
  SIGNUP: '/auth/signup',
  SIGNIN: '/auth/signin',
  PROPERTIES: '/properties',
  PROPERTY: (id: string) => `/properties/${id}`,
  PROFILE: '/profile',
  APPOINTMENTS: '/profile/appointments',
  NEW_PROPERTIY: '/properties/new',
};
