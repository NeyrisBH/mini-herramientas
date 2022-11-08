import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  nuemroActual = '0';
  primerOperador: number = null;
  operador: string = null;
  temporalSiguienteNumero = false;

  constructor() { }

  ngOnInit() {
  }

  public getNumber(num: string) {
    console.log(num);
    if (this.temporalSiguienteNumero) {
      this.nuemroActual = num;
      this.temporalSiguienteNumero = false;
    } else {
      this.nuemroActual === '0' ? this.nuemroActual = num : this.nuemroActual += num;

    }
  }

  getDecimal() {
    if (!this.nuemroActual.includes('.')) {
      this.nuemroActual += '.';
    }
  }

  private calcular(op1: any, op2: any) {
    switch (op1) {
      case '+':
        return this.primerOperador += op2;
      case '-':
        return this.primerOperador -= op2; 
      case '*':
        return this.primerOperador *= op2;
      case '/':
        return this.primerOperador /= op2;
      case '=':
        return op2;
    }
  }
  public getOperation(op: string) {
    console.log(op);

    if (this.primerOperador == null) {
      this.primerOperador = Number(this.nuemroActual);

    } else if (this.operador) {
      const result = this.calcular(this.operador, Number(this.nuemroActual))
      this.nuemroActual = String(result);
      this.primerOperador = result;
    }
    this.operador = op;
    this.temporalSiguienteNumero = true;

    console.log(this.primerOperador);

  }

  public clear() {
    this.nuemroActual = '0';
    this.primerOperador = null;
    this.operador = null;
    this.temporalSiguienteNumero = false;
  }
}