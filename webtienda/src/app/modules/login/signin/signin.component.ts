import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public dataerr:any[];
  constructor(
    private loginservice: LoginService,
    private router: Router
  ) { }

  ngOnInit() {

 
  }

  submit(myForm:NgForm){

    console.log('myForm', myForm.value);
    
    this.loginservice.signin(myForm.value).subscribe(rpta => {
      console.log('rpta:', rpta);

      this.router.navigateByUrl('/');
    }, (err) => {
      console.log('err:', err);
      this.dataerr = err.error.data;
    })

  }
}
