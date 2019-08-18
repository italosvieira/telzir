import * as mongoose from 'mongoose';

export const TarifaSchema = new mongoose.Schema({
    origem: String,
    destino: String,
    precoPorMinuto: Number,
});