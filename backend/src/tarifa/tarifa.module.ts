import {Module} from '@nestjs/common';
import {TarifaController} from './tarifa.controller';
import {TarifaService} from './tarifa.service';
import {MongooseModule} from '@nestjs/mongoose';
import {TarifaSchema} from './schemas/tarifa.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Tarifa', schema: TarifaSchema }])],
  controllers: [TarifaController],
  providers: [TarifaService],
})
export class TarifaModule {}