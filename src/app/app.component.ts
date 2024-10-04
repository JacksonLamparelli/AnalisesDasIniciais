import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { CheckboxAdComponent } from './components/checkbox-ad/checkbox-ad.component';
import { TextoComponent } from './components/texto/texto/texto.component';
import { NgIf } from '@angular/common';
import { TextoResidenciaComponent } from './components/texto-residencia/texto-residencia.component';
import { ComunicacaoComponent } from './components/texto/comunicacao/comunicacao.component';
import { IndeferimentoPPComponent } from './components/texto/indeferimento-pp/indeferimento-pp.component';
import { ProfissaoComponent } from './components/texto/profissao/profissao.component';
import { DoencaComponent } from './components/texto/doenca/doenca.component';
import { Declaracao129AComponent } from './components/texto/declaracao-129-a/declaracao-129-a.component';
import { ProcuracaoComponent } from './components/texto/procuracao/procuracao.component';
import { RenunciaComponent } from './components/texto/renuncia/renuncia.component';
import { CelularComponent } from './components/texto/celular/celular.component';
import { CertoEDeterminadoComponent } from './components/texto/certo-e-determinado/certo-e-determinado.component';
import { HipossuficienciaComponent } from './components/texto/hipossuficiencia/hipossuficiencia.component';
import { ValorDaCausaComponent } from './components/texto/valor-da-causa/valor-da-causa.component';
import { MenuComponent } from './components/menu/menu.component';
import { CheckboxBasicoComponent } from './components/checkbox-basico/checkbox-basico.component';
import { CheckboxPensaoComponent } from './components/checkbox-pensao/checkbox-pensao.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCheckboxModule,
    CheckboxAdComponent,
    TextoComponent,
    NgIf,
    TextoResidenciaComponent,
    ComunicacaoComponent,
    IndeferimentoPPComponent,
    ProfissaoComponent,
    DoencaComponent,
    Declaracao129AComponent,
    ProcuracaoComponent,
    RenunciaComponent,
    CelularComponent,
    CertoEDeterminadoComponent,
    HipossuficienciaComponent,
    ValorDaCausaComponent,
    MatMenuModule,
    MenuComponent,
    CheckboxBasicoComponent,
    CheckboxPensaoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'projeto01';
  showRg: boolean = false;
  showResidencia: boolean = false;
  showComunicacao: boolean = false;
  showIndPP: boolean = false;
  showProfissao: boolean = false;
  showDoenca: boolean = false;
  show129A: boolean = false;
  showProc: boolean = false;
  showRenuncia: boolean = false;
  showHipossuficiencia: boolean = false;
  showCelular: boolean = false;
  showCertoEDeterminado: boolean = false;
  showValor: boolean = false;
  showCheckBoxAd: boolean = false;
  showCheckBasico: boolean = false;
  showCheckboxPensao: boolean = false;

  onChangeNumber() {
    this.showRg = !this.showRg;
  }

  onShowResidencia() {
    this.showResidencia = !this.showResidencia;
  }

  onShowResidencia2() {
    console.log("teste");
  }

  onShowComunicacao() {
    this.showComunicacao = !this.showComunicacao;
  }

  onShowIndPP() {
    this.showIndPP = !this.showIndPP;
  }

  onShowProfissao() {
    this.showProfissao = !this.showProfissao;
  }

  onShowDoenca() {
    this.showDoenca = !this.showDoenca;
  }

  onShow129A() {
    this.show129A = !this.show129A;
  }

  onShowProc() {
    this.showProc = !this.showProc;
  }

  onShowRenuncia() {
    this.showRenuncia = !this.showRenuncia;
  }

  onShowCelular() {
    this.showCelular = !this.showCelular;
  }

  onShowCertoEDeterminado() {
    this.showCertoEDeterminado = !this.showCertoEDeterminado;
  }

  onShowHipossuficiencia() {
    this.showHipossuficiencia = !this.showHipossuficiencia;
  }

  onShowValor() {
    this.showValor = !this.showValor;
  }

  onIncapacidade() {
    this.showCheckBoxAd = !this.showCheckBoxAd;
  }

  onBasico() {
    this.showCheckBasico = !this.showCheckBasico;
  }

  onPensao() {
    this.showCheckboxPensao = !this.showCheckboxPensao;
  }
}
