import mongoose from 'mongoose';
import { DATASOURCE } from '../env';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => mongoose.connect(DATASOURCE),
  },
];
