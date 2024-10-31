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
  selector: 'app-checkbox-ar',
  templateUrl: './checkbox-ar.component.html',
  styleUrl: './checkbox-ar.component.css',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    JsonPipe,
    NgFor,
    MatButtonModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxArComponent implements OnInit {
  @Output() showDocsRecluso: EventEmitter<any> = new EventEmitter();
  @Output() showEventuaisOutros: EventEmitter<any> = new EventEmitter();
  @Output() showAtestadoPermanencia: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}
  
  handleClick() {
    this.showDocsRecluso.emit();
  }

  handleClick2() {
    this.showEventuaisOutros.emit();
  }

  handleClick3() {
    this.showAtestadoPermanencia.emit();
  }

  form: FormGroup;

  // Define os itens com funções associadas
  items = [
    { label: 'Documentos pessoais do(a) recluso(a)', action: () => this.handleClick() },
    { label: 'Esclarecer eventuais outros dependentes', action: () => this.handleClick2() },
    { label: 'Atestado de permanência carcerária', action: () => this.handleClick3() },
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
