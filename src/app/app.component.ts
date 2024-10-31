import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { CheckboxAdComponent } from './components/checkbox-ad/checkbox-ad.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { CheckboxBasicoComponent } from './components/checkbox-basico/checkbox-basico.component';
import { CheckboxPensaoComponent } from './components/checkbox-pensao/checkbox-pensao.component';
import { CheckboxArComponent } from './components/checkbox-ar/checkbox-ar.component';
import { CheckboxAeComponent } from './components/checkbox-ae/checkbox-ae.component';
import { CheckboxRuralComponent } from './components/checkbox-rural/checkbox-rural.component';
import { ConcentradaRuralComponent } from './components/concentrada-rural/concentrada-rural.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CheckBoxLoasIdosoComponent } from './components/checkbox-loas-idoso/checkbox-loas-idoso.component';
import { CheckBoxLoasDeficienteComponent } from './components/checkbox-loas-deficiente/checkbox-loas-deficiente.component';
import { ConcentradaPensaoComponent } from './components/concentrada-pensao/concentrada-pensao.component';
import { CheckboxGeralComponent } from './components/checkbox-geral/checkbox-geral.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCheckboxModule,
    CheckboxAdComponent,
    NgIf,
    MatMenuModule,
    MenuComponent,
    CheckboxBasicoComponent,
    CheckboxPensaoComponent,
    CheckboxArComponent,
    CheckboxAeComponent,
    CheckboxRuralComponent,
    ConcentradaRuralComponent,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    CheckBoxLoasDeficienteComponent,
    CheckBoxLoasIdosoComponent,
    ConcentradaPensaoComponent,
    NgFor,
    CommonModule,
    CheckboxGeralComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Análise das Iniciais';
  showCheckBoxAd: boolean = false;
  showCheckBasico: boolean = false;
  showCheckboxPensao: boolean = false;
  showCheckBoxAtc: boolean = false;
  showCheckBoxAr: boolean = false;
  showCheckBoxAe: boolean = false;
  showCheckBoxRural: boolean = false;
  showGeral: boolean = true;
  showRural: boolean = false;
  showCheckBoxLoasIdoso: boolean = false;
  showCheckBoxLoasDeficiente: boolean = false;
  showConcentradaPensao: boolean = false;
  textos: string[] = [];
  showCheckboxGeral: boolean = true;

   onChangeNumber(novaString: string): void {
    const index = this.textos.indexOf(novaString);

    if (index === -1) {

      this.textos.push(novaString);
    } else {

      this.textos.splice(index, 1)
    }
    
  }

   onIncapacidade() {
    this.showCheckboxGeral = true;
    this.showCheckBoxAd = true;
    this.showCheckBasico = false;
    this.showCheckboxPensao = false;
    this.showCheckBoxAr = false;
    this.showCheckBoxAe = false;
    this.showCheckBoxRural = false;
    this.showGeral = true;
    this.showRural = false;
    this.showCheckBoxLoasDeficiente = false;
    this.showCheckBoxLoasIdoso = false;
  }

  onBasico() {
    this.showCheckboxGeral = true;
    this.showCheckBasico = false;
    this.showCheckboxPensao = false;
    this.showCheckBoxAd = false;
    this.showCheckBoxAe = false;
    this.showCheckBoxRural = false;
    this.showGeral = true;
    this.showRural = false;
    this.showCheckBoxLoasDeficiente = false;
    this.showCheckBoxLoasIdoso = false;
  }

  onPensao() {
    this.showCheckboxGeral = true;
    this.showCheckboxPensao = true;
    this.showCheckBoxAd = false;
    this.showCheckBasico = false;
    this.showCheckBoxAr = false;
    this.showCheckBoxAe = false;
    this.showCheckBoxRural = false;
    this.showGeral = true;
    this.showRural = false;
    this.showCheckBoxLoasDeficiente = false;
    this.showCheckBoxLoasIdoso = false;
  }

  onAtc() {
    this.showCheckboxGeral = true;
    this.showCheckBoxAtc = false;
    this.showCheckBoxAd = false;
    this.showCheckBasico = false;
    this.showCheckboxPensao = false;
    this.showCheckBoxAr = false;
    this.showCheckBoxAe = false;
    this.showCheckBoxRural = false;
    this.showGeral = true;
    this.showRural = false;
    this.showCheckBoxLoasDeficiente = false;
    this.showCheckBoxLoasIdoso = false;
  }

  onAr() {
    this.showCheckboxGeral = true;
    this.showCheckBoxAr = true;
    this.showCheckBoxAtc = false;
    this.showCheckBoxAd = false;
    this.showCheckBasico = false;
    this.showCheckboxPensao = false;
    this.showCheckBoxAe = false;
    this.showCheckBoxRural = false;
    this.showGeral = true;
    this.showRural = false;
    this.showCheckBoxLoasDeficiente = false;
    this.showCheckBoxLoasIdoso = false;
  }

  onAe() {
    this.showCheckboxGeral = true;
    this.showCheckBoxAe = true;
    this.showCheckBoxAr = false;
    this.showCheckBoxAtc = false;
    this.showCheckBoxAd = false;
    this.showCheckBasico = false;
    this.showCheckboxPensao = false;
    this.showCheckBoxRural = false;
    this.showGeral = true;
    this.showRural = false;
    this.showCheckBoxLoasDeficiente = false;
    this.showCheckBoxLoasIdoso = false;
  }

  onRural() {
    this.showCheckboxGeral = true;
    this.showCheckBoxRural = true;
    this.showCheckBoxAe = false;
    this.showCheckBoxAr = false;
    this.showCheckBoxAtc = false;
    this.showCheckBoxAd = false;
    this.showCheckBasico = false;
    this.showCheckboxPensao = false;
    this.showGeral = false;
    this.showRural = true;
    this.showCheckBoxLoasDeficiente = false;
    this.showCheckBoxLoasIdoso = false;
  }

  onLoasIdoso() {
    this.showCheckboxGeral = true;
    this.showCheckBoxLoasIdoso = true;
    this.showCheckBoxRural = false;
    this.showCheckBoxAe = false;
    this.showCheckBoxAr = false;
    this.showCheckBoxAtc = false;
    this.showCheckBoxAd = false;
    this.showCheckBasico = false;
    this.showCheckboxPensao = false;
    this.showGeral = true;
    this.showRural = false;
  }

  onLoasDeficiente() {
    this.showCheckboxGeral = true;
    this.showCheckBoxLoasDeficiente = true;
    this.showCheckBoxLoasIdoso = false;
    this.showCheckBoxRural = false;
    this.showCheckBoxAe = false;
    this.showCheckBoxAr = false;
    this.showCheckBoxAtc = false;
    this.showCheckBoxAd = false;
    this.showCheckBasico = false;
    this.showCheckboxPensao = false;
    this.showGeral = true;
    this.showRural = false;
  }

  onIdade() {
    this.showCheckboxGeral = true;
    this.showCheckBasico = true;
    this.showCheckBoxLoasIdoso = false;
    this.showCheckBoxRural = false;
    this.showCheckBoxAe = false;
    this.showCheckBoxAr = false;
    this.showCheckBoxAtc = false;
    this.showCheckBoxAd = false;
    this.showCheckboxPensao = false;
    this.showGeral = true;
    this.showRural = false;
  }

 onShowAutorCompanheiro() {
    this.showGeral = !this.showGeral;
    this.showConcentradaPensao = !this.showConcentradaPensao;
  }

 async copyContentWithFormatting() {
    // Seleciona o elemento pelo ID
    const element = document.getElementById('content-to-copy');
    if (element) {
      // Cria um container temporário para armazenar o conteúdo HTML
      const tempContainer = document.createElement('div');
      tempContainer.appendChild(element.cloneNode(true));
      document.body.appendChild(tempContainer);

      // Seleciona o conteúdo do container temporário
      const range = document.createRange();
      range.selectNodeContents(tempContainer);

      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);

      // Copia para a área de transferência usando a API Clipboard com suporte a HTML
      try {
        await navigator.clipboard.write([
          new ClipboardItem({
            'text/html': new Blob([tempContainer.innerHTML], {
              type: 'text/html',
            }),
          }),
        ]);
        alert('Conteúdo copiado para a área de transferência com formatação!');
      } catch (err) {
        console.error('Erro ao copiar o conteúdo', err);
      }

      // Remove o container temporário e limpa a seleção
      document.body.removeChild(tempContainer);
      selection?.removeAllRanges();
    }
  }
}
