import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OnInit, Output, EventEmitter } from '@angular/core';
import { CheckboxBasicoComponent } from '../checkbox-basico/checkbox-basico.component';
import { MenuComponent } from '../menu/menu.component';

/** @title Checkboxes with reactive forms */
@Component({
  selector: 'app-checkbox-rural',
  templateUrl: './checkbox-rural.component.html',
  styleUrl: './checkbox-rural.component.css',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    JsonPipe,
    CheckboxBasicoComponent,
    MenuComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxRuralComponent implements OnInit {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();
  @Output() showResidencia: EventEmitter<any> = new EventEmitter();
  @Output() showComunicacao: EventEmitter<any> = new EventEmitter();
  @Output() showRenuncia: EventEmitter<any> = new EventEmitter();
  @Output() showHipossuficiencia: EventEmitter<any> = new EventEmitter();
  @Output() showValor: EventEmitter<any> = new EventEmitter();
  @Output() showCertoEDeterminado: EventEmitter<any> = new EventEmitter();
  @Output() showCelular: EventEmitter<any> = new EventEmitter();
  @Output() showProc: EventEmitter<any> = new EventEmitter();
  @Output() showTelefone: EventEmitter<any> = new EventEmitter();
  @Output() showProvaMaterial: EventEmitter<any> = new EventEmitter();

  
  ngOnInit(): void {}

  
  onShowTelefone() {
    this.showTelefone.emit;
  }

  onChangeNumber() {
    this.changeNumber.emit();
  }

  onShowResidencia() {
    this.showResidencia.emit();
  }

  onShowComunicacao() {
    this.showComunicacao.emit();
  }

  onShowRenuncia() {
    this.showRenuncia.emit();
  }

  onShowHipossuficiencia() {
    this.showHipossuficiencia.emit();
  }

  handleClick10() {
    this.showValor.emit();
  }

  onShowCertoEDeterminado() {
    this.showCertoEDeterminado.emit();
  }

  onShowCelular() {
    this.showCelular.emit();
  }

  onShowValor() {
    this.showValor.emit();
  }

  onShowProc() {
    this.showProc.emit();
  }

  handleClick() {
    this.showProvaMaterial.emit();
  }

  handleClick5() {
    this.showResidencia.emit;
  }


  private readonly _formBuilder = inject(FormBuilder);

  readonly toppings = this._formBuilder.group({
    rg: false,
    procuracao: false,
    residencia: false,
    renuncia: false,
    hipossuficiencia: false,
    comunicacao: false,
    indeferimentoPP: false,
    profissão: false,
    doença: false,
    telefone: false,
    'valor-da-causa': false,
    'pedido-certo': false,
    'docs-de-cujus': false,
    'prova-material': false,
    'de-cujus-especial': false,
    'ex-conjuge': false,
    
  });
}
