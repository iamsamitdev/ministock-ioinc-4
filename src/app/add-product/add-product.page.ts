import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { WebapiServiceService } from '../providers/webapi-service/webapi-service.service';
import { Router } from '@angular/router';
import { Product } from '../model/Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  productForm: FormGroup;
  // สร้างตัวแปรไว้ผูกกับแบบ Form
  dataProduct: Product;

  name: string;
  price: string;
  description: string;
  imgurl: string;
  category: string;
  date: string;
  time: string;

  constructor(
    public api: WebapiServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.dataProduct = new Product();
   }

  ngOnInit() {
    this.productForm = this.formBuilder.group(
          {
            name : '',
            price: '',
            description:'',
            imgurl: '',
            category: '',
            date: '',
            time: '',
          }
      );
  }

  onFormSubmit(form: NgForm){
    this.dataProduct.name = form['name'];
    this.dataProduct.price = form['price'];
    this.dataProduct.description = form['description'];
    this.dataProduct.imgurl = form['imgurl'];
    this.dataProduct.category = form['category'];
    this.dataProduct.date = form['date'];
    this.dataProduct.time = form['time'];

    this.api.createProduct(this.dataProduct).subscribe((response) => {
      // console.log(response);
      // ส่งไปหน้า tabs
     this.router.navigate(['/tabs/tabs/tab-home'],{state: {updateInfos: true}});
    });

  }

}
