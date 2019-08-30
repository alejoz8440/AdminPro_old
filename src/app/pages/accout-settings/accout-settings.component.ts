import { Component, OnInit, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styleUrls: []
})
export class AccoutSettingsComponent implements OnInit {


  constructor(public _ajustes: SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor( tema: string, link: any ){
    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
    console.log(link);
  }

  aplicarCheck( link: any){
    let selectores: any = document.getElementsByClassName('selector');

    for ( let ref of selectores ) {
      ref.classList.remove('working');
      }
    link.classList.add('working');

  }

  colocarCheck(){
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;
    for ( let ref of selectores ) {
        if( ref.getAttribute('data-theme') === tema ){
          ref.classList.add('working');
          break;
        }
      }
  }
}
