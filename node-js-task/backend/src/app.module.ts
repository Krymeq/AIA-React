import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ItemModule } from './item/item.module';
import { Item } from './item/Item';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "Krymeq",
      "password": "KrymeqPass1,",
      "database": "Shop",
      "entities": [Item],
      "synchronize": false,
      "logging": true
    } 
  ), ItemModule],
})
export class AppModule {}
