import { Component, OnInit } from '@angular/core';
import { WebapiServiceService } from '../providers/webapi-service/webapi-service.service';

@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
})
export class TabHomePage implements OnInit {

  // สร้างตัวแปรไว้เก็บข้อมูลจาก API
  productData: any;

  constructor(public api: WebapiServiceService) { 
    this.productData = [];
  }

  segnav = 'instock';

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  ngOnInit() {
     this.getProducts();
  }

  ionViewWillEnter() {
    this.getProducts();
  }
  
  getProducts() {
    this.api.geProductList().subscribe(response => {
      console.log(response);
      this.productData = response;
    });
  }


}
