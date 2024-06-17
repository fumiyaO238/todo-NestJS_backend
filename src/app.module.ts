import { Module } from '@nestjs/common';
import { ItemModule } from './items/item.module';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';

@Module({
  imports: [ItemModule],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class AppModule {}
