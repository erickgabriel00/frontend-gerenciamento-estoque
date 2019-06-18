// import { Injectable } from '@angular/core';
// import { Url } from './url';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Produtos } from '../produtos/produtos';
// import { Funcionarios } from '../funcionarios/funcionarios';
// import { Login } from '../login/login';
//
// @Injectable()
// export class ApiService {
//   private http: HttpClient;
//
//   constructor(http: HttpClient) {
//     this.http = http;
//    }
//
//   public headerOptions() {
//     let headers = new HttpHeaders(
//       {
//         'Content-Type': 'application/json',
//       });
//     return {headers: headers};
//   }
//
//   consultarFuncionarios() {
//     return this.http.post(Url.LISTAGEM_FUNCIONARIOS, {}, this.headerOptions());
//   }
//
//   inserirFuncionario(funcionarios: Funcionarios) {
//     this.http.post(Url.CADASTRO_FUNCIONARIOS, funcionarios, this.headerOptions()).subscribe(
//       success => {
//       },
//       (err: any) => {
//       }
//     );
//   }
//
//   consultarProdutos() {
//       return this.http.post(Url.LISTAGEM_PRODUTOS, {}, this.headerOptions());
//   }
//
//   inserirProduto(produtos: Produtos) {
//     this.http.post(Url.CADASTRO_FUNCIONARIOS, produtos, this.headerOptions()).subscribe(
//       success => {
//       },
//       (err: any) => {
//       }
//     );
//   }
//
//   login(login: Login) {
//     return this.http.post(Url.LOGIN_URL, login, this.headerOptions());
//   }
// }
