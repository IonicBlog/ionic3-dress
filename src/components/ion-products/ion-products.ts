import { NavController } from 'ionic-angular';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ion-products',
  templateUrl: 'ion-products.html'
})
export class IonProductsComponent {
  @Input() products: Array<any> = [];
  constructor(public navCtrl: NavController) {
    console.log('Hello IonProducts Component');
  }
  goDetails(item) {
    this.navCtrl.push('ProductDetailsPage', { item: item });
  }
} 