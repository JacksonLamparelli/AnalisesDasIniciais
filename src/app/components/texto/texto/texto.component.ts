import { Component } from '@angular/core';
import { CapitulacaoComponent } from '../capitulacao/capitulacao.component';
import { CorpoTextoComponent } from '../corpo-texto/corpo-texto.component';

@Component({
  selector: 'app-texto',
  standalone: true,
  imports: [CapitulacaoComponent, CorpoTextoComponent],
  templateUrl: './texto.component.html',
  styleUrl: './texto.component.css'
})
export class TextoComponent {

}
