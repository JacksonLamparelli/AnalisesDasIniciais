import {Component} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { Output, EventEmitter } from '@angular/core';

/**
 * @title Nested menu
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
})
export class MenuComponent {
  @Output() incapacidade: EventEmitter<any> = new EventEmitter();
  @Output() basico: EventEmitter<any> = new EventEmitter();
  @Output() pensao: EventEmitter<any> = new EventEmitter();
  @Output() atc: EventEmitter<any> = new EventEmitter();
  @Output() ar: EventEmitter<any> = new EventEmitter();
  @Output() ae: EventEmitter<any> = new EventEmitter();

  handleClick() {
    this.incapacidade.emit();
  }

  handleClick2() {
    this.basico.emit();
  }

  handleClick3() {
    this.pensao.emit();
    }

    handleClick4() {
      this.atc.emit();
      }
      
      handleClick5() {
        this.ar.emit();
        }

        handleClick6() {
          this.ae.emit();
        }
}
