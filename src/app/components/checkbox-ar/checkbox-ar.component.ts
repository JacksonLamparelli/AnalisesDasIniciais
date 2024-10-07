import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OnInit, Output, EventEmitter } from '@angular/core';
import { CheckboxBasicoComponent } from '../checkbox-basico/checkbox-basico.component';

/** @title Checkboxes with reactive forms */
@Component({
  selector: 'app-checkbox-ar',
  templateUrl: './checkbox-ar.component.html',
  styleUrl: './checkbox-ar.component.css',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    JsonPipe,
    CheckboxBasicoComponent,
    ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxArComponent implements OnInit {
  @Output() showTelefone: EventEmitter<any> = new EventEmitter();
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();
  @Output() showResidencia: EventEmitter<any> = new EventEmitter();
  @Output() showComunicacao: EventEmitter<any> = new EventEmitter();
  @Output() showRenuncia: EventEmitter<any> = new EventEmitter();
  @Output() showHipossuficiencia: EventEmitter<any> = new EventEmitter();
  @Output() showValor: EventEmitter<any> = new EventEmitter();
  @Output() showCertoEDeterminado: EventEmitter<any> = new EventEmitter();
  @Output() showCelular: EventEmitter<any> = new EventEmitter();
  @Output() showProc: EventEmitter<any> = new EventEmitter();
  @Output() showDocsRecluso: EventEmitter<any> = new EventEmitter();
  @Output() showEventuaisOutros: EventEmitter<any> = new EventEmitter();
  @Output() showAtestadoPermanencia: EventEmitter<any> = new EventEmitter();

  
  
  
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
    this.showDocsRecluso.emit();
  }

  handleClick2() {
    this.showEventuaisOutros.emit();
  }

  handleClick3() {
    this.showAtestadoPermanencia.emit();
  }

  onShowTelefone() {
    this.showTelefone.emit;
  }

  private readonly _formBuilder = inject(FormBuilder);

  readonly toppings = this._formBuilder.group({
    telefone: false,
    rg: false,
    procuracao: false,
    residencia: false,
    renuncia: false,
    hipossuficiencia: false,
    comunicacao: false,
    indeferimentoPP: false,
    profissão: false,
    doença: false,
    'docs-recluso': false,
    'outros-dependentes': false,
    'atestado-permanencia': false,
        
  });
}
