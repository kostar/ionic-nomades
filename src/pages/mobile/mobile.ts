/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   15-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 16-10-2017
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { APP_CONFIG, TAppConfig } from "../../app/app.config";

/**
 * Generated class for the MobilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'MobilePage',
  segment: 'index'
})
@Component({
  selector: 'page-mobile',
  templateUrl: 'mobile.html',
})
export class MobilePage {

  public readonly appConfig:TAppConfig;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.appConfig = APP_CONFIG;
  }

  goPage(page:string):void{
    this.navCtrl.push(page)
  }

}
