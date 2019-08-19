import {Document} from 'mongoose';

export interface PlanoDocument extends Document {
    readonly nome: string;
    readonly consumoTotalPermitidoEmMinutos: string;
}