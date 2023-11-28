import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AntdModuleModule} from "../../shared/antd-module/antd-module.module";
import {FormControl, FormGroup, NonNullableFormBuilder, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {LoginService} from "./services/login.service";
import {RequestLogin, ResponseLogin} from "./interfaces/login.interfaces";


@Component({
  selector: 'quipux-challenge-login',
  standalone: true,
  imports: [CommonModule, AntdModuleModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})

export class LoginComponent {
  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: NonNullableFormBuilder,
              private router: Router,
              private loginService$: LoginService) {}

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit');
      const request: RequestLogin = {
        username: this.validateForm.get('userName')!.value,
        password: this.validateForm.get('password')!.value
      }
      this.loginService$.login(request).subscribe( (res:ResponseLogin) => {
        if(!!res.token){
          sessionStorage.setItem('token', res.token)
          this.router.navigate(['home'])
        }else{
          alert("error de logueo")
        }
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}


