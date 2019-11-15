import { Component, OnInit } from '@angular/core';

import { Filmes } from './../filmes';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  vendas: Filmes;
  fluxos: Filmes[] = [];

  start() {
    this.vendas = {
      titulo: "",
      codigo: undefined,
      preco: undefined,
      tipo: ""
    }
  }
  Del(fluid) {
    this.fluxos.splice(this.fluxos.indexOf(fluid), 1)
  }

  constructor() {
    this.start();
  }

  publicar(v: Filmes) {
    console.log(v)
    this.fluxos.push(this.vendas)
    console.log(this.fluxos)
    this.start();
  }

  ngOnInit() {

  }

}
