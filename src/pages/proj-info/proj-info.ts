import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProjectUnitDetail} from '../../model/project-unit-detail';

/**
 * Generated class for the ProjInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proj-info',
  templateUrl: 'proj-info.html',
})
export class ProjInfoPage {
	elementCode: string;
  itemShow:ProjectUnitDetail;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.elementCode = this.navParams.get("CodeTranfer");
    this.getShowItem();
  }

  getShowItem(){
    //this.CodeTranfer
    this.itemShow = new ProjectUnitDetail();
    this.itemShow.elementCode = this.elementCode;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjInfoPage');
  }

}
