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
import { TelefoneComponent } from './components/texto/telefone/telefone.component';
import { DocsDeCujusComponent } from './components/texto/docs-de-cujus/docs-de-cujus.component';
import { ProvaMaterialConvivenciaDeCujusComponent } from './components/texto/prova-material-convivencia-de-cujus/prova-material-convivencia-de-cujus.component';
import { ProvaMaterialDeCujusComponent } from './components/texto/prova-material-de-cujus/prova-material-de-cujus.component';
import { DependenciaEconomicaDeCujusComponent } from './components/texto/dependencia-economica-de-cujus/dependencia-economica-de-cujus.component';
import { CheckboxAtcComponent } from './components/checkbox-atc/checkbox-atc.component';
import { CheckboxArComponent } from './components/checkbox-ar/checkbox-ar.component';
import { DocsReclusoComponent } from './components/texto/docs-recluso/docs-recluso.component';
import { OutrosDependentesComponent } from "./components/texto/outros-dependentes/outros-dependentes.component";
import { AtestadoCarcerarioComponent } from "./components/texto/atestado-carcerario/atestado-carcerario.component";
import { CheckboxAeComponent } from './components/checkbox-ae/checkbox-ae.component';
import { FormulariosComponent } from "./components/texto/formularios/formularios.component";
import { CheckboxRuralComponent } from './components/checkbox-rural/checkbox-rural.component';
import { InicioProvaMaterialComponent } from "./components/texto/inicio-prova-material/inicio-prova-material.component";
import { ConcentradaRuralComponent } from './components/concentrada-rural/concentrada-rural.component';

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
    TelefoneComponent,
    DocsDeCujusComponent,
    ProvaMaterialConvivenciaDeCujusComponent,
    ProvaMaterialDeCujusComponent,
    DependenciaEconomicaDeCujusComponent,
    CheckboxAtcComponent,
    CheckboxArComponent,
    DocsReclusoComponent,
    OutrosDependentesComponent,
    AtestadoCarcerarioComponent,
    CheckboxAeComponent,
    FormulariosComponent,
    CheckboxRuralComponent,
    InicioProvaMaterialComponent,
    InicioProvaMaterialComponent,
    ConcentradaRuralComponent,
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
  showDocsDeCujus: boolean = false;
  showAutorCompanheiro: boolean = false;
  showDeCujusEspecial: boolean = false;
  showExConjuge: boolean = false;
  showTelefone: boolean = false;
  showCheckBoxAtc: boolean = false;
  showCheckBoxAr: boolean = false
  showDocsRecluso: boolean = false;
  showEventuaisOutros: boolean = false;
  showAtestadoPermanencia: boolean = false;
  showCheckBoxAe: boolean = false;
  showFormularios: boolean = false;
  showCheckBoxRural: boolean = false;
  showProvaMaterial: boolean = false;
  showGeral: boolean = true;
  showRural: boolean = false;

  onChangeNumber() {
    this.showRg = !this.showRg;
  }

  onShowResidencia() {
    this.showResidencia = !this.showResidencia;
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
    this.showCheckBasico = false;
    this.showCheckboxPensao = false;
    this.showCheckBoxAr = false;
    this.showCheckBoxAe = false;
    this.showCheckBoxRural = false;
    this.showGeral = true;
    this.showRural = false;

  }

  onBasico() {
    this.showCheckBasico = !this.showCheckBasico;
    this.showCheckboxPensao = false;
    this.showCheckBoxAd = false;
    this.showCheckBoxAe = false;
    this.showCheckBoxRural = false;
    this.showGeral = true;
    this.showRural = false;
  }

  onPensao() {
    this.showCheckboxPensao = !this.showCheckboxPensao;
    this.showCheckBoxAd = false;
    this.showCheckBasico = false;
    this.showCheckBoxAr = false;
    this.showCheckBoxAe = false;
    this.showCheckBoxRural = false;
    this.showGeral = true;
    this.showRural = false;
  }

  onAtc() {
    this.showCheckBoxAtc = !this.showCheckBoxAtc;
    this.showCheckBoxAd = false;
    this.showCheckBasico = false;
    this.showCheckboxPensao = false;
    this.showCheckBoxAr = false;
    this.showCheckBoxAe = false;
    this.showCheckBoxRural = false;
    this.showGeral = true;
    this.showRural = false;
  }

  onAr() {
    this.showCheckBoxAr = !this.showCheckBoxAr;
    this.showCheckBoxAtc = false;
    this.showCheckBoxAd = false;
    this.showCheckBasico = false;
    this.showCheckboxPensao = false;
    this.showCheckBoxAe = false;
    this.showCheckBoxRural = false;
    this.showGeral = true;
    this.showRural = false;
  }

  onAe() {
    this.showCheckBoxAe = !this.showCheckBoxAe;
    this.showCheckBoxAr = false;
    this.showCheckBoxAtc = false;
    this.showCheckBoxAd = false;
    this.showCheckBasico = false;
    this.showCheckboxPensao = false;
    this.showCheckBoxRural = false;
    this.showGeral = true;
    this.showRural = false;
  }

  onRural(){
    this.showCheckBoxRural = !this.showCheckBoxRural
    this.showCheckBoxAe = false;
    this.showCheckBoxAr = false;
    this.showCheckBoxAtc = false;
    this.showCheckBoxAd = false;
    this.showCheckBasico = false;
    this.showCheckboxPensao = false;
    this.showGeral = false;
    this.showRural = true;
  }

  onShowDocsDeCujus() {
    this.showDocsDeCujus = !this.showDocsDeCujus;
  }
  onShowAutorCompanheiro() {
    this.showAutorCompanheiro = !this.showAutorCompanheiro;
  }
  onShowDeCujusEspecial() {
    this.showDeCujusEspecial = !this.showDeCujusEspecial;
  }
  onShowExConjuge() {
    this.showExConjuge = !this.showExConjuge;
  }
  onShowTelefone() {
    this.showTelefone = !this.showTelefone;
  }

  onShowDocsRecluso() {
    this.showDocsRecluso = !this.showDocsRecluso;
  }
  onShowEventuaisOutros() {
    this.showEventuaisOutros = !this.showEventuaisOutros;
  }
  onShowAtestadoPermanencia() {
    this.showAtestadoPermanencia = !this.showAtestadoPermanencia;
  }
  onShowFormularios() {
    this.showFormularios = !this.showFormularios;
  }

  onShowProvaMaterial() {
    this.showProvaMaterial = !this.showProvaMaterial;
  }

  
}
