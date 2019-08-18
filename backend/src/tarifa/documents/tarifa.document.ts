import {Document} from 'mongoose';

export interface TarifaDocument extends Document {
    readonly origem: string;
    readonly destino: string;
    readonly precoPorMinuto: number;
}