import { JsonPipe, NgFor, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OnInit, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/** @title Checkboxes with reactive forms */
@Component({
  selector: 'app-checkbox-ad',
  templateUrl: './checkbox-ad.component.html',
  styleUrl: './checkbox-ad.component.css',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe, MatIconModule, MatButtonModule, NgFor, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  })

export class CheckboxAdComponent implements OnInit {
  @Output() showIndPP: EventEmitter<any> = new EventEmitter();
  @Output() showProfissao: EventEmitter<any> = new EventEmitter();
  @Output() showDoenca: EventEmitter<any> = new EventEmitter();
  @Output() show129A: EventEmitter<any> = new EventEmitter();
  @Output() comorbidade: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}

  handleClick() {
    this.showIndPP.emit();
  }

  handleClick2() {
    this.showProfissao.emit();
  }

  handleClick3() {
    this.showDoenca.emit();
  }

  handleClick4() {
    this.show129A.emit();
  }

  handleClick5() {
    this.comorbidade.emit();
  }

  form: FormGroup;

  // Define os itens com funções associadas
  items = [
    { label: 'Indeferimento do PP', action: () => this.handleClick() },
    { label: 'Indicação da Profissão', action: () => this.handleClick2() },
    { label: 'Indicação da Doença', action: () => this.handleClick3() },
    { label: 'Declaração de ação anterior (art. 129-A)', action: () => this.handleClick4() },
    { label: 'Esclarecer comorbidade incapacitante', action: () => this.handleClick5() },
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

