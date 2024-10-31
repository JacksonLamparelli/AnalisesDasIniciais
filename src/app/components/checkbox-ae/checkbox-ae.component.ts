import { JsonPipe, NgFor, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OnInit, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/** @title Checkboxes with reactive forms */
@Component({
  selector: 'app-checkbox-ae',
  templateUrl: './checkbox-ae.component.html',
  styleUrl: './checkbox-ae.component.css',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    JsonPipe,
    MatIconModule,
    MatButtonModule,
    NgFor,
    CommonModule
    ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxAeComponent implements OnInit {
  @Output() showFormularios: EventEmitter<any> = new EventEmitter();
   
  
  ngOnInit(): void {}
  
  handleClick() {
    this.showFormularios.emit();
  }
 
  form: FormGroup;

  // Define os itens com funções associadas
  items = [
    { label: 'Eventuais outros formulários (PPP etc)', action: () => this.handleClick() },
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
