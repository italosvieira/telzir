import {Controller, Get, Logger} from '@nestjs/common';
import {Plano} from './models/plano.model';
import {PlanoService} from './plano.service';

@Controller('api/plano')
export class PlanoController {
    constructor(private readonly planoService: PlanoService) {}

    private readonly logger = new Logger(PlanoController.name);

    @Get()
    async findAll(): Promise<Plano[]> {
        this.logger.log('Recebendo request para consultar planos.');
        return await this.planoService.findAll();
    }
}