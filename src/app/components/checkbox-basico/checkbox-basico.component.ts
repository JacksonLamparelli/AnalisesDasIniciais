import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OnInit, Output, EventEmitter } from '@angular/core';

/** @title Checkboxes with reactive forms */
@Component({
  selector: 'app-checkbox-basico',
  templateUrl: './checkbox-basico.component.html',
  styleUrl: './checkbox-basico.component.css',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxBasicoComponent implements OnInit {
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
  @Output() showProc: EventEmitter<any> = new EventEmitter();
  @Output() showTelefone: EventEmitter<any> = new EventEmitter();
    
ngOnInit(): void {
    
}

handleClick() {
  this.changeNumber.emit()
}

handleClick2() {
  this.showProc.emit()
}

handleClick3() {
  this.showResidencia.emit()
}

handleClick4() {
  this.showComunicacao.emit()
}

handleClick5() {
  this.showRenuncia.emit()
}

handleClick9() {
  this.showHipossuficiencia.emit()
}

handleClick10() {
  this.showValor.emit()
}

handleClick11() {
  this.showCertoEDeterminado.emit()
}

handleClick12() {
  this.showTelefone.emit()
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
    "valor-da-causa": false,
    "pedido-certo": false,
    telefone: false

  });
}
