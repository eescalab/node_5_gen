import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public message:string;
  constructor(
    private lService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(form:NgForm){
    console.log(form.value);

    this.lService.login(form.value.email, form.value.password ).subscribe(rpta => {
      console.log(rpta);
      this.router.navigateByUrl('/');
    }, (err) =>{
      console.log(err);
      this.message = err.error.message;
      
    });
  }

}
