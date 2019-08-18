import {Module} from '@nestjs/common';
import {TarifaModule} from './tarifa/tarifa.module';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRoot(process.env.MONGO_URL, {useNewUrlParser: true}),
        TarifaModule
    ],
})
export class AppModule {}