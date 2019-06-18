import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Subscription} from 'rxjs';
// import {FuncionariosForm} from './funcionarios.form';
// import {Util} from '../shared/util';
// import {ApiService} from '../shared/api-service';
// import {Funcionarios} from './funcionarios';


@Component({
  selector: 'app-forms',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent implements OnInit {
  // listagemFuncionarios: any = [];
  // funcionariosForm: FuncionariosForm;
  // busy: Subscription;
  errorMessage = '';
  successMessage = '';

  constructor(
    // public toastService: ToastrService,
    // public apiService: ApiService,
  ) {
    // this.funcionariosForm = new FuncionariosForm();
  }

  ngOnInit() {
    // this.listarFuncionarios();
  }

  insertFuncionario() {

    // let funcionarios = new Funcionarios(
    //   this.funcionariosForm.get('nome').value,
    //   this.funcionariosForm.get('email').value,
    //   this.funcionariosForm.get('horaEntrada').value,
    //   this.funcionariosForm.get('horaSaida').value,
    //   this.funcionariosForm.get('funcao').value,
    //   this.funcionariosForm.get('senha').value,
    //   this.funcionariosForm.get('qualificacao').value,
    //   Util.soNumeros(this.funcionariosForm.get('cep').value),
    //   this.funcionariosForm.get('endereco').value,
    //   this.funcionariosForm.get('numero').value,
    //   this.funcionariosForm.get('bairro').value,
    //   this.funcionariosForm.get('cidade').value,
    //   this.funcionariosForm.get('uf').value,
    //   this.funcionariosForm.get('dddTelefone').value,
    //   this.funcionariosForm.get('tipoDocumento').value,
    //   this.funcionariosForm.get('cpf').value,
    //   this.funcionariosForm.get('admissao').value,
    //   this.funcionariosForm.get('demissao').value,
    //   this.funcionariosForm.get('rg').value,
    //   this.funcionariosForm.get('orgaoExpeditor').value
    // );
    // this.apiService.inserirFuncionario(funcionarios);
    //
    // this.successMessage = 'Usuário cadastrado com sucesso.';
    // setTimeout(() => this.toastService.warning('Sucesso', 'Cadastro finalizado.'));
  }

  // listarFuncionarios() {
  //   this.listagemFuncionarios = [];
  //
  //   this.apiService.consultarFuncionarios().subscribe(
  //     (success: any) => {
  //       if (success.length > 0) {
  //         this.listagemFuncionarios = success;
  //       }
  //     },
  //     error => {
  //       this.errorMessage = 'Não foi possível carregar a listagem de funcionários.';
  //       setTimeout(() => this.toastService.warning('Atenção', 'Nenhum registro encontrado.'));
  //     }
  //   );
  // }

}
