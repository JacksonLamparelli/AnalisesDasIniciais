import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { CheckboxAdComponent } from './components/checkbox-ad/checkbox-ad.component';
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
import { OutrosDependentesComponent } from './components/texto/outros-dependentes/outros-dependentes.component';
import { AtestadoCarcerarioComponent } from './components/texto/atestado-carcerario/atestado-carcerario.component';
import { CheckboxAeComponent } from './components/checkbox-ae/checkbox-ae.component';
import { FormulariosComponent } from './components/texto/formularios/formularios.component';
import { CheckboxRuralComponent } from './components/checkbox-rural/checkbox-rural.component';
import { InicioProvaMaterialComponent } from './components/texto/inicio-prova-material/inicio-prova-material.component';
import { ConcentradaRuralComponent } from './components/concentrada-rural/concentrada-rural.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CheckBoxLoasIdosoComponent } from './components/checkbox-loas-idoso/checkbox-loas-idoso.component';
import { CheckBoxLoasDeficienteComponent } from './components/checkbox-loas-deficiente/checkbox-loas-deficiente.component';
import { TelefoneLoasComponent } from './components/texto/telefone-loas/telefone-loas.component';
import { DocumentosPessoaisComponent } from './components/texto/documentos-pessoais/documentos-pessoais.component';
import { ConcentradaPensaoComponent } from './components/concentrada-pensao/concentrada-pensao.component';
import { IndicacoesEnderecoComponent } from './components/texto/indicacoes-endereco/indicacoes-endereco.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCheckboxModule,
    CheckboxAdComponent,
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
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    CheckBoxLoasDeficienteComponent,
    CheckBoxLoasIdosoComponent,
    TelefoneLoasComponent,
    DocumentosPessoaisComponent,
    ConcentradaPensaoComponent,
    IndicacoesEnderecoComponent
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
  showCheckBoxAr: boolean = false;
  showDocsRecluso: boolean = false;
  showEventuaisOutros: boolean = false;
  showAtestadoPermanencia: boolean = false;
  showCheckBoxAe: boolean = false;
  showFormularios: boolean = false;
  showCheckBoxRural: boolean = false;
  showProvaMaterial: boolean = false;
  showGeral: boolean = true;
  showRural: boolean = false;
  showCheckBoxLoasIdoso: boolean = false;
  showCheckBoxLoasDeficiente: boolean = false;
  showTelefoneLoas: boolean = false;
  showConcentradaPensao: boolean = false;
  showIndicacaoEndereco: boolean = false;

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

  onShowTelefoneLoas() {
    this.showTelefoneLoas = !this.showTelefoneLoas;
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
    this.showCheckBoxLoasDeficiente = false;
    this.showCheckBoxLoasIdoso = false;
  }

  onBasico() {
    this.showCheckBasico = !this.showCheckBasico;
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
    this.showCheckboxPensao = !this.showCheckboxPensao;
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
    this.showCheckBoxAtc = !this.showCheckBoxAtc;
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
    this.showCheckBoxAr = !this.showCheckBoxAr;
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
    this.showCheckBoxAe = !this.showCheckBoxAe;
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
    this.showCheckBoxRural = !this.showCheckBoxRural;
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
    this.showCheckBoxLoasIdoso = !this.showCheckBoxLoasIdoso;
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
    this.showCheckBoxLoasDeficiente = !this.showCheckBoxLoasDeficiente;
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

  onShowDocsDeCujus() {
    this.showDocsDeCujus = !this.showDocsDeCujus;
  }
  onShowAutorCompanheiro() {
    this.showGeral = !this.showGeral;
    this.showConcentradaPensao = !this.showConcentradaPensao;
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

  onShowIndicacaoEndereco() {
    this.showIndicacaoEndereco = !this.showIndicacaoEndereco;
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
                    'text/html': new Blob([tempContainer.innerHTML], { type: 'text/html' })
                })
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
