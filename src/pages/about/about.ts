import { ThemeableBrowser } from 'ionic-native';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items = [
    { title: "我的淘宝", link: "https://h5.m.taobao.com/mlapp/mytaobao.html#mlapp-mytaobao" },
    { title: "购物车", link: "https://h5.m.taobao.com/mlapp/cart.html" },
    { title: "我的订单", link: "https://h5.m.taobao.com/mlapp/olist.html" },
    { title: "待付款", link: "https://h5.m.taobao.com/mlapp/olist.html?spm=a2141.7756461.2.1&tabCode=waitPay" },
    { title: "待发货", link: "https://h5.m.taobao.com/mlapp/olist.html?spm=a2141.7756461.2.2&tabCode=waitSend" },
    { title: "待收货", link: "https://h5.m.taobao.com/mlapp/olist.html?spm=a2141.7756461.2.3&tabCode=waitConfirm" },
    { title: "待评价", link: "https://h5.m.taobao.com/mlapp/olist.html?spm=a2141.7756461.2.4&tabCode=waitRate" }
  ];
  constructor(public navCtrl: NavController) {
  }

  itemClick(item) {
    let options = {
      statusbar: {
        color: '#f8285c'
      },
      toolbar: {
        height: 44,
        color: '#f8285c'
      },
      title: {
        color: '#ffffffff',
        showPageTitle: true
      },
      backButton: {
        image: 'back',
        imagePressed: 'back_pressed',
        align: 'left',
        event: 'backPressed'
      },
      backButtonCanClose: true
    };
    new ThemeableBrowser(item.link, '_blank', options)
  }

}
