import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      url: process.env.DB_URL,
      autoLoadEntities: true,
      synchronize: true, // ESTO NO PONERLO EN PROD, MEJOR HACER MIGRACIONES
    }),
    ProductsModule,
    CommonModule,
  ],
})
export class AppModule {}
