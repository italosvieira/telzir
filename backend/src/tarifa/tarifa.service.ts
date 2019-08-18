import {HttpException, HttpStatus, Injectable, Logger} from '@nestjs/common';
import {Model} from 'mongoose';
import {TarifaDocument} from './documents/tarifa.document';
import {Tarifa} from './models/tarifa.model';
import {InjectModel} from '@nestjs/mongoose';

@Injectable()
export class TarifaService {
  constructor(@InjectModel('Tarifa') private readonly tarifaModel: Model<TarifaDocument> ) {}

  private readonly logger = new Logger(TarifaService.name);

  async findAll(): Promise<Tarifa[]> {
    try {
      this.logger.log('Consultando tarifas no banco.');
      return await this.tarifaModel.find().exec();
    } catch (e) {
      this.logger.error('Não foi possível consultar as tarifas no banco. Com a mensagem: ' + e.message);

      // Se não tiver conexão com o banco finaliza a aplicação.
      if (e.name == 'MongoNetworkError') {
        process.exit(1);
      }

      throw new HttpException('Não foi possível consultar as tarifas.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async save(tarifa: Tarifa): Promise<Tarifa> {
    try {
      this.logger.log('Salvando nova tarifa. Origem:' + tarifa.origem + '. Destino: ' + tarifa.destino +
                      '. Preço por Minuto: ' + tarifa.precoPorMinuto);
      const createdCat = new this.tarifaModel(tarifa);
      return await createdCat.save();
    } catch (e) {
      this.logger.error('Não foi possível salvar nova tarifa no banco. Com a mensagem: ' + e.message);

      // Se não tiver conexão com o banco finaliza a aplicação.
      if (e.name == 'MongoNetworkError') {
        process.exit(1);
      }

      throw new HttpException('Não foi possível salvar nova tarifa.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}