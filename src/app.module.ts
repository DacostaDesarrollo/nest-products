import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import {MongooseModule} from '@nestjs/mongoose';
@Module({
  imports: [ProductModule,MongooseModule.forRoot('mongodb+srv://dacosta:9zMhHsMkRq3tnwe@cluster0.yll4k.mongodb.net/tienda?retryWrites=true&w=majority',
  {
    useNewUrlParser:true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
