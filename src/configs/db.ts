import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';

// dotenv.config(); // dotenv로 .env 파일을 로드합니다.

export const postgresConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'dbname',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
