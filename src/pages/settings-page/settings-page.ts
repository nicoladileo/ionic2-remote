import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { SettingsProvider } from '../../providers/settings-provider';

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings-page',
  templateUrl: 'settings-page.html',
})
export class SettingsPage {
  limit: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public settingsProvider: SettingsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    this.limit = this.settingsProvider.getRedditLimit();
  }

  dismissPage() {
    this.settingsProvider.setRedditLimit(this.limit);
    this.viewCtrl.dismiss();
  }
}
