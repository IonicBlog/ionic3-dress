import { AppShare } from './../../app/app.share';
import { AppService, AppGlobal } from './../../app/app.service';
import { Component } from '@angular/core';
import { NavController, IonicPage, ActionSheetController, LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slides: Array<any> = [];
  categories: Array<any> = [];
  products: Array<any> = [];

  spinner1: boolean = true;

  params = {
    favoritesId: 2054400,
    pageNo: 1,
    pageSize: 20
  }

  constructor(public appShare:AppShare,public loadingCtrl: LoadingController, public actionSheetCtrl: ActionSheetController, public appService: AppService, public navCtrl: NavController) {
    this.getSlides();
    this.getCategories();
    this.getProducts();
  }
  //获取幻灯片
  getSlides() {
    var params = {
      favoritesId: 2056439,
      pageNo: 1,
      pageSize: 5
    }
    this.appService.httpGet(AppGlobal.API.getProducts, params, rs => {
      console.debug(rs);
      this.slides = rs.data;
      this.spinner1 = false;
    })
  }
  //获取分类
  getCategories() {
    this.appService.httpGet(AppGlobal.API.getCategories, { appTag: 'dress' }, rs => {
      console.debug(rs);
      this.categories = rs.data;
    })
  }
  //获取首页推荐列表
  getProducts() {
    this.appService.httpGet(AppGlobal.API.getProducts, this.params, rs => {
      console.debug(rs);
      this.products = rs.data;
    })
  }
  //商品详情
  goDetails(item) {
    console.debug('go details...')
  }

  goProductList(item) {
    this.navCtrl.push('ProductListPage', { item: item });
  }



  share(event) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '分享',
      buttons: [
        {
          text: 'QQ好友',
          handler: () => {
            this.appShare.qqShare(0)
          }
        },
        {
          text: 'QQ空间',
          handler: () => {
            this.appShare.qqShare(1)
          }
        },
        {
          text: '微信好友',
          handler: () => {
            this.appShare.wxShare(0)
          }
        },
        {
          text: '朋友圈',
          handler: () => {
            this.appShare.wxShare(1)
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

}
