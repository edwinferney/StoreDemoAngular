import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  frmLogin: FormGroup;
  responseData: any;

  constructor(private authService: AuthserviceService, fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {

    this.frmLogin = new FormGroup({
      user: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });  
  }


  login(){
    if (this.frmLogin.valid){
      this.authService.login(this.frmLogin.value).subscribe(resp => {
        if (resp != null){
          this.responseData=resp;
          localStorage.setItem('token',this.responseData.jwtToken);
          this.route.navigate(['admin']);
        }
      })

    }
  }

}
