import * as mongoose from 'mongoose';

export const PlanoSchema = new mongoose.Schema({
    nome: String,
    consumoTotalPermitidoEmMinutos: String,
});