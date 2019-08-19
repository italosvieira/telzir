import {Component, OnInit} from '@angular/core';
import {isNullOrUndefined} from 'util';
import {AppService} from './app.service';
import {Tarifa} from './tarifa.interface';
import {Plano} from './plano.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: AppService) {}

  readonly cifrao = 'R$ ';
  readonly valorZerado = 'R$ 0,00';

  readonly tarifasHardCoded: Tarifa[] = [
    {origem: '011', destino: '016', precoPorMinuto: 1.90},
    {origem: '016', destino: '011', precoPorMinuto: 2.90},
    {origem: '011', destino: '017', precoPorMinuto: 1.70},
    {origem: '017', destino: '011', precoPorMinuto: 2.70},
    {origem: '011', destino: '018', precoPorMinuto: 0.90},
    {origem: '018', destino: '011', precoPorMinuto: 1.90}
  ];

  readonly planosHardCoded: Plano[] = [
    {nome: 'Fale Mais 30', consumoTotalPermitidoEmMinutos: '30'},
    {nome: 'Fale Mais 60', consumoTotalPermitidoEmMinutos: '60'},
    {nome: 'Fale Mais 120', consumoTotalPermitidoEmMinutos: '120'}
  ];

  tarifas: Tarifa[];
  planos: Plano[];
  tarifaEscolhida: Tarifa = null;
  planoEscolhido: Plano = null;

  consumoEmMinutos: number = null;
  resultadoComFaleMais: string = null;
  resultadoSemFaleMais: string = null;
  calculou = false;

  ngOnInit(): void {
    this.service.getTarifas().subscribe(tarifas => this.tarifas = tarifas, error => this.tarifas = this.tarifasHardCoded);
    this.service.getPlanos().subscribe(planos => this.planos = planos, error => this.planos = this.planosHardCoded);
  }

  calcular(): void {
    if (!isNullOrUndefined(this.tarifaEscolhida) && !isNullOrUndefined(this.planoEscolhido) && !isNullOrUndefined(this.consumoEmMinutos)) {
      this.calculou = true;
      this.resultadoComFaleMais = this.calcularResultadoComFaleMais();
      this.resultadoSemFaleMais = this.calcularResultadoSemFaleMais();
    }
  }

  calcularResultadoComFaleMais(): string {
    const minutosExcedentes = Number(this.consumoEmMinutos) - Number(this.planoEscolhido.consumoTotalPermitidoEmMinutos);

    if (minutosExcedentes <= 0) {
      return this.valorZerado;
    }

    // tslint:disable-next-line:max-line-length
    return this.cifrao + (minutosExcedentes * (this.tarifaEscolhida.precoPorMinuto + (0.10 * this.tarifaEscolhida.precoPorMinuto))).toFixed(2);
  }

  calcularResultadoSemFaleMais(): string {
    return this.cifrao + (this.consumoEmMinutos * this.tarifaEscolhida.precoPorMinuto).toFixed(2);
  }

  limpar(): void {
    this.calculou = false;
    this.consumoEmMinutos = null;
    this.planoEscolhido = null;
    this.tarifaEscolhida = null;
    this.resultadoComFaleMais = null;
    this.resultadoSemFaleMais = null;
  }
}
