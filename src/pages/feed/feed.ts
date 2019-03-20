import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  name:string = "Jhonatan Freitas";
  txtPost:string;
  posts = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}

  sendPost(){
    console.log(this.posts);
    this.posts.push(this.txtPost);
  }
}
