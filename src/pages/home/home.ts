import { Component } from '@angular/core';
import { NavController, ToastController, ModalController } from 'ionic-angular';
import { SettingsPage } from '../settings-page/settings-page';
import { RedditData } from '../../providers/reddit-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  datalist: any[];
  modifiedDatalist: any[];
  searchTerm: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public modalCtrl:ModalController, public redditDataService:RedditData) {
    
  }

  ionViewDidLoad() {
    this.doRefresh();
    /*
    this.redditDataService.getRemoteData()
        .subscribe(value => {
          this.datalist = value.data.children;
          this.modifiedDatalist = JSON.parse(JSON.stringify(this.datalist));
        }, 
        err => {
          let toast = this.toastCtrl.create({
            message: 'Nothing to show',
            duration: 3000,
            position: 'top',          
          });
          toast.present();
        });
      */
  }

  doRefresh() {
    this.searchTerm = "";
    this.datalist = [];
    this.modifiedDatalist = [];
    let toast = this.toastCtrl.create({
            message: 'Connecting to Reddit...',
            duration: 2000,
            position: 'top',          
          });
          toast.present();
    this.redditDataService.getRemoteData()
        .subscribe(value => {
          this.datalist = value.data.children;
          this.modifiedDatalist = JSON.parse(JSON.stringify(this.datalist));
        }, 
        err => {
          let toast = this.toastCtrl.create({
            message: 'Nothing to show',
            duration: 3000,
            position: 'top',          
          });
          toast.present();
        });
  }

  doFilter() {
    this.modifiedDatalist = this.datalist.filter((value) => {
      return value.data.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

  openSettings() {
    let modal = this.modalCtrl.create(SettingsPage);
    modal.onDidDismiss(() => {
      this.doRefresh();
    });
    modal.present();
  }
}
