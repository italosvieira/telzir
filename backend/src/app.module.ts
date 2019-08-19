import {Module} from '@nestjs/common';
import {TarifaModule} from './tarifa/tarifa.module';
import {MongooseModule} from '@nestjs/mongoose';
import {PlanoModule} from './plano/plano.module';

@Module({
    imports: [
        MongooseModule.forRoot(process.env.MONGO_URL, {useNewUrlParser: true}),
        TarifaModule,
        PlanoModule,
    ],
})
export class AppModule {}