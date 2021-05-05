import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('myForm') form: NgForm;
  public message = null;

  constructor(
    private loginservice: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(myForm:NgForm) {
    console.log(this.form.value);

    this.loginservice.login(this.form.value.email, this.form.value.password)
      .subscribe(item => {

        this.router.navigateByUrl('/');
      }, (err) => {
        console.log(err);
        this.message = err.error.message;

      });

  }

}
