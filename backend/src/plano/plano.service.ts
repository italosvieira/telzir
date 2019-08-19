import {HttpException, HttpStatus, Injectable, Logger} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Plano} from './models/plano.model';
import {PlanoDocument} from './documents/plano.document';

@Injectable()
export class PlanoService {
  constructor(@InjectModel('Plano') private readonly planoModel: Model<PlanoDocument> ) {}

  private readonly logger = new Logger(PlanoService.name);

  async findAll(): Promise<Plano[]> {
    try {
      this.logger.log('Consultando planos no banco.');
      return await this.planoModel.find().exec();
    } catch (e) {
      this.logger.error('Não foi possível consultar os planos no banco. Com a mensagem: ' + e.message);

      // Se não tiver conexão com o banco finaliza a aplicação.
      if (e.name === 'MongoNetworkError') {
        process.exit(1);
      }

      throw new HttpException('Não foi possível consultar os planos.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}