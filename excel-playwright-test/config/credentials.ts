import * as dotenv from 'dotenv';
dotenv.config();

export const credentials = {
  email: process.env.MS_EMAIL ?? '',
  password: process.env.MS_PASSWORD ?? '',
};

export function assertCredentials() {
  if (!credentials.email || !credentials.password) {
    throw new Error(
      'Missing MS_EMAIL or MS_PASSWORD in environment (.env). ' +
      'Create a .env file with MS_EMAIL and MS_PASSWORD.'
    );
  }
}
