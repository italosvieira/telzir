import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {PlanoSchema} from './schemas/plano.schema';
import {PlanoService} from './plano.service';
import {PlanoController} from './plano.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Plano', schema: PlanoSchema }])],
  controllers: [PlanoController],
  providers: [PlanoService],
})
export class PlanoModule {}