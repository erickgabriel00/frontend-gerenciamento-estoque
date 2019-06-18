import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
// import {Util} from '../shared/util';
// import {ProdutosForm} from './produtos.form';
import { ToastrService } from 'ngx-toastr';
// import { ApiService } from '../shared/api-service';
// import {Produtos} from './produtos';


@Component({
  selector: 'app-tabs',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  // listagemProdutos: any = [];
  // produtosForm: ProdutosForm;
  // busy: Subscription;
  // errorMessage = '';
  successMessage = '';

  constructor(
    // public toastService: ToastrService,
    // public apiService: ApiService,
  ) {
    // this.produtosForm = new ProdutosForm();
  }

  ngOnInit() {
    // this.listarProdutos();
  }

  insertProduto() {
  //
  //   let produtos = new Produtos(
  //     this.produtosForm.get('nomeProduto').value,
  //     this.produtosForm.get('codigoProduto').value,
  //     this.produtosForm.get('marca').value,
  //     this.produtosForm.get('unidade').value,
  //     this.produtosForm.get('peso').value,
  //     this.produtosForm.get('localizacao').value,
  //     this.produtosForm.get('estoqueMin').value,
  //     this.produtosForm.get('estoqueMax').value,
  //     this.produtosForm.get('codigoGtinEan').value,
  //     this.produtosForm.get('valorVenda').value,
  //     this.produtosForm.get('valorCusto').value,
  //     this.produtosForm.get('tamanhoProduto').value,
  //     this.produtosForm.get('origemProduto').value,
  //     this.produtosForm.get('numOrdem').value
  //   );
  //   this.apiService.inserirProduto(produtos);
  //
  //   this.successMessage = 'Produto cadastrado com sucesso.';
  //   setTimeout(() => this.toastService.warning('Sucesso', 'Cadastro finalizado.'));
  }

  // listarProdutos() {
  //   this.listagemProdutos = [];
  //
  //   this.apiService.consultarProdutos().subscribe(
  //     (success: any) => {
  //       if (success.length > 0) {
  //         this.listagemProdutos = success;
  //       }
  //     },
  //     error => {
  //       this.errorMessage = 'Não foi possível carregar a listagem de produtos.';
  //       setTimeout(() => this.toastService.warning('Atenção', 'Nenhum registro encontrado.'));
  //     }
  //   );
  // }

}
