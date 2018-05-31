import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the CultivosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cultivos',
  templateUrl: 'cultivos.html',
})
export class CultivosPage {

  invernadero: any;
  cultivos: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private http: Http) {
    this.invernadero = this.navParams.get('invernadero');

    this.getPlantas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CultivosPage');
  }

  getPlantas() {
    this.http.get('/plantas/?id=' + this.invernadero.id )
      .subscribe(
        value => {
          console.log(value.json());
          this.cultivos = value.json();
        },
        error1 => {
          console.log(error1);
        })
  }

}
