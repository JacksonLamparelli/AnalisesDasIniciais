import { JsonPipe, NgFor, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OnInit, Output, EventEmitter } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
    MatIconModule,
    MatIcon,
    MatButtonModule,
    NgFor, 
    CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxRuralComponent implements OnInit {
  @Output() showProvaMaterial: EventEmitter<any> = new EventEmitter();

  
  ngOnInit(): void {}

  
  handleClick() {
    this.showProvaMaterial.emit();
  }

  form: FormGroup;

  // Define os itens com funções associadas
  items = [
    { label: 'Eventuais outros inícios de prova material', action: () => this.handleClick() },
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
