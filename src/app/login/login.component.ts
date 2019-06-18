import { Component, OnInit } from '@angular/core';
// import {LoginForm} from './login.form';
import { Md5 } from 'ts-md5';
import { ToastrService } from 'ngx-toastr';
// import { ApiService } from '../shared/api-service';
// import {Login} from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // loginForm: LoginForm;
  errorMessage = '';
  successMessage = '';

  constructor(
    public toastService: ToastrService,
    // public apiService: ApiService,
  ) {
    // this.loginForm = new LoginForm();

  }

  ngOnInit() {
  }

  login() {
    // let login = new Login(
    //   this.loginForm.get('cpfEmail').value,
    //   Md5.hashStr(this.loginForm.get('senha').value)
    // );
    // this.apiService.login(login);

    this.successMessage = 'Login efetuado com sucesso.';
    setTimeout(() => this.toastService.warning('Sucesso', 'Logado.'));
  }
}
