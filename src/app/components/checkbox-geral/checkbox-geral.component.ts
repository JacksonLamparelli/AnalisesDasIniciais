import { JsonPipe, NgFor, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OnInit, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


/** @title Checkboxes with reactive forms */
@Component({
  selector: 'app-checkbox-geral',
  templateUrl: './checkbox-geral.component.html',
  styleUrl: './checkbox-geral.component.css',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe, NgFor, MatIconModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxGeralComponent implements OnInit {
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

form: FormGroup;

  // Define os itens com funções associadas
  items = [
    { label: 'RG/CPF', action: () => this.handleClick() },
    { label: 'Procuração', action: () => this.handleClick2() },
    { label: 'Comprovante de residência', action: () => this.handleClick3() },
    { label: 'Termo de renúncia', action: () => this.handleClick5() },
    { label: 'Declaração de hipossuficiência', action: () => this.handleClick9() },
    { label: 'Comunicação de decisão', action: () => this.handleClick4() },
    { label: 'Valor da causa', action: () => this.handleClick10() },
    { label: 'Pedido certo e determinado', action: () => this.handleClick11() },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkboxes: this.fb.array(this.items.map(() => false))
    });
  }

  get checkboxes() {
    return this.form.get('checkboxes') as FormArray;
  }

  onCheckboxChange(index: number) {
    // Executa o método associado ao checkbox correspondente
    this.items[index].action();
      }

  // Método para remover o item
  removeItem(index: number) {
    // Remove o item da lista
    this.items.splice(index, 1);
    // Remove o respectivo checkbox do FormArray
    this.checkboxes.removeAt(index);
  }
}
