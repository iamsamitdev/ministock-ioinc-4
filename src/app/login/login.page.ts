import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { WebapiServiceService } from '../providers/webapi-service/webapi-service.service';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

   userForm: FormGroup;
   username: string;
   password: string;

   dataUser: User;

  constructor(
    public api: WebapiServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.dataUser = new User();
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username : [null, Validators.required],
      password : [null, Validators.required],
    });
  }

  // Check Login
  onFormSubmit(form: NgForm) {
    // alert(JSON.stringify(form));
    this.dataUser.username = form['username'];
    this.dataUser.password = form['password'];

    this.api.checkLogin(this.dataUser)
      .subscribe(res => {
          console.log(res);
          if(res['status'] == 'success'){
            // ส่งไปหน้า tabs
            this.router.navigate(['tabs/tabs/tab-home']);
          } else {
            alert('login fail!');
          }
        }, (err) => {
          console.log(err);
        });
  }

}
