import {Body, Controller, Get, Logger, Post} from '@nestjs/common';
import {TarifaService} from './tarifa.service';
import {Tarifa} from './models/tarifa.model';

@Controller('api/tarifa')
export class TarifaController {
  constructor(private readonly tarifaService: TarifaService) {}

  private readonly logger = new Logger(TarifaController.name);

  @Get()
  async findAll(): Promise<Tarifa[]> {
    this.logger.log('Recebendo request para consultar tarifas.');
    return await this.tarifaService.findAll();
  }

  @Post()
  async save(@Body() tarifa: Tarifa) {
    this.logger.log('Recebendo request para salvar tarifa. Origem:' + tarifa.origem +
                    '. Destino: ' + tarifa.destino + '. Preço por Minuto: ' + tarifa.precoPorMinuto);
    return await this.tarifaService.save(tarifa);
  }
}