import { JsonPipe, NgFor, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OnInit, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/** @title Checkboxes with reactive forms */
@Component({
  selector: 'app-checkbox-loas-deficiente',
  templateUrl: './checkbox-loas-deficiente.component.html',
  styleUrl: './checkbox-loas-deficiente.component.css',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    JsonPipe,
    NgFor,
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckBoxLoasDeficienteComponent implements OnInit {
  @Output() showTelefone: EventEmitter<any> = new EventEmitter();
  @Output() showIndicacaoEndereco: EventEmitter<any> = new EventEmitter();
  @Output() comorbidade: EventEmitter<any> = new EventEmitter();
  @Output() show129A: EventEmitter<any> = new EventEmitter();
  
  ngOnInit(): void {}
  
  handleClick() {
    this.showIndicacaoEndereco.emit();
  }

  handleClick2() {
    this.comorbidade.emit();
  }

  onShowTelefone() {
    this.showTelefone.emit();
  }

  handleClick3() {
    this.show129A.emit();
  }

  form: FormGroup;

  // Define os itens com funções associadas
  items = [
    { label: 'Nº de telefone', action: () => this.onShowTelefone() },
    { label: 'Endereço em zona rural', action: () => this.handleClick() },
    { label: 'Esclarecer principal comorbidade', action: () => this.handleClick2() },
    { label: 'Declaração de ação anterior (art. 129-A)', action: () => this.handleClick3() },
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
