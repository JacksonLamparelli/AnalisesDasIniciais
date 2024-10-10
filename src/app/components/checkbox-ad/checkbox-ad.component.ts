import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OnInit, Output, EventEmitter } from '@angular/core';

/** @title Checkboxes with reactive forms */
@Component({
  selector: 'app-checkbox-ad',
  templateUrl: './checkbox-ad.component.html',
  styleUrl: './checkbox-ad.component.css',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  })

export class CheckboxAdComponent implements OnInit {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();
  @Output() showResidencia: EventEmitter<any> = new EventEmitter();
  @Output() showComunicacao: EventEmitter<any> = new EventEmitter();
  @Output() showIndPP: EventEmitter<any> = new EventEmitter();
  @Output() showProfissao: EventEmitter<any> = new EventEmitter();
  @Output() showDoenca: EventEmitter<any> = new EventEmitter();
  @Output() show129A: EventEmitter<any> = new EventEmitter();
  @Output() showRenuncia: EventEmitter<any> = new EventEmitter();
  @Output() showHipossuficiencia: EventEmitter<any> = new EventEmitter();
  @Output() showValor: EventEmitter<any> = new EventEmitter();
  @Output() showCertoEDeterminado: EventEmitter<any> = new EventEmitter();
  @Output() showProcuracao: EventEmitter<any> = new EventEmitter();
  @Output() showTelefone: EventEmitter<any> = new EventEmitter();



  ngOnInit(): void {}

  handleClick() {
    this.changeNumber.emit();
  }

  handleClick2() {
    this.showResidencia.emit();
  }

  handleClick3() {
    this.showComunicacao.emit();
  }

  handleClick4() {
    this.showIndPP.emit();
  }

  handleClick5() {
    this.showProfissao.emit();
  }

  handleClick6() {
    this.showDoenca.emit();
  }

  handleClick7() {
    this.show129A.emit();
  }

  handleClick8() {
    this.showRenuncia.emit();
  }

  handleClick9() {
    this.showHipossuficiencia.emit();
  }

  handleClick10() {
    this.showValor.emit();
  }

  handleClick11() {
    this.showCertoEDeterminado.emit();
  }

  handleClick12() {
    this.showProcuracao.emit();
  }

  handleClick13() {
    this.showTelefone.emit();
  }

  private readonly _formBuilder = inject(FormBuilder);

  readonly toppings = this._formBuilder.group({
    rg: false,
    procuracao: false,
    residência: false,
    renuncia: false,
    hipossuficiencia: false,
    comunicacao: false,
    indeferimentoPP: false,
    profissão: false,
    doença: false,
    'valor-da-causa': false,
    'pedido-certo': false,
    'ação-anterior': false,
    telefone: false,

    });

    
}

