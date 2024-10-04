import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OnInit, Output, EventEmitter } from '@angular/core';
import { CheckboxBasicoComponent } from '../checkbox-basico/checkbox-basico.component';
import { MenuComponent } from '../menu/menu.component';

/** @title Checkboxes with reactive forms */
@Component({
  selector: 'app-checkbox-pensao',
  templateUrl: './checkbox-pensao.component.html',
  styleUrl: './checkbox-pensao.component.css',
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
export class CheckboxPensaoComponent implements OnInit {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();
  @Output() showResidencia: EventEmitter<any> = new EventEmitter();
  @Output() showComunicacao: EventEmitter<any> = new EventEmitter();
  @Output() showRenuncia: EventEmitter<any> = new EventEmitter();
  @Output() showHipossuficiencia: EventEmitter<any> = new EventEmitter();
  @Output() showValor: EventEmitter<any> = new EventEmitter();
  @Output() showCertoEDeterminado: EventEmitter<any> = new EventEmitter();
  @Output() showCelular: EventEmitter<any> = new EventEmitter();
  @Output() showProc: EventEmitter<any> = new EventEmitter();
  @Output() showDocsDeCujus: EventEmitter<any> = new EventEmitter();
  @Output() showAutorCompanheiro: EventEmitter<any> = new EventEmitter();
  @Output() showDeCujusEspecial: EventEmitter<any> = new EventEmitter();
  @Output() showExConjuge: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}

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
    this.showDocsDeCujus.emit();
  }

  handleClick2() {
    this.showAutorCompanheiro.emit();
  }

  handleClick3() {
    this.showDeCujusEspecial.emit();
  }

  handleClick4() {
    this.showExConjuge.emit();
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
    'valor-da-causa': false,
    'pedido-certo': false,
    'docs-de-cujus': false,
    'prova-material': false,
    'de-cujus-especial': false,
    'ex-conjuge': false
  });
}
