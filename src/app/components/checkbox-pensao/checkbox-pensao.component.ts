import { JsonPipe, NgFor, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OnInit, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
    MatIconModule,
    MatButtonModule,
    NgFor,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxPensaoComponent implements OnInit {
  @Output() showDocsDeCujus: EventEmitter<any> = new EventEmitter();
  @Output() showAutorCompanheiro: EventEmitter<any> = new EventEmitter();
  @Output() showDeCujusEspecial: EventEmitter<any> = new EventEmitter();
  @Output() showExConjuge: EventEmitter<any> = new EventEmitter();
  
  ngOnInit(): void {}

  
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

  
  form: FormGroup;

  // Define os itens com funções associadas
  items = [
    {
      label: "Certidão de óbito e documentos pessoais do de 'cujus'",
      action: () => this.handleClick(),
    },
    {
      label: 'Autor(a) Companheiro(a): início de prova material',
      action: () => this.handleClick2(),
    },
    {
      label: "'De cujus' segurado especial: início de prova material",
      action: () => this.handleClick3(),
    },
    {
      label: 'Autor(a) ex-conjuge: prova da dependência econômica',
      action: () => this.handleClick4(),
    },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkboxes: this.fb.array(this.items.map(() => false)),
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
