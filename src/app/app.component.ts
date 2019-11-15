import { Component } from '@angular/core';
import { shutz } from './shutz';

import { Filmes } from './filmes';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // interface: shutz;
  filme: Filmes;

  iniciar() {
    this.filme = {
      titulo: "",
      codigo: undefined,
      preco: undefined,
      tipo: ""
    }
  }

  play: Filmes[] = [];

  constructor() {
    this.iniciar();
  }

  // delete(pl) {
  //   this.play.splice(this.play.indexOf(pl), 1)
  // }

  delete(pl) {
    this.play = this.play.filter(p => p !== pl);
  }

  // delete(pl) {
  //   this.play.splice(1, 1)
  // }



  adicionar() {
    this.play.push(this.filme)
    console.log(this.play)
    this.iniciar();
  }
}




  // shutz: { nome: string, idade: string }


  // constructor() {
  //   this.iniciar();
  // };
  // users: shutz[] = [];

  // iniciar() {
  //   this.interface = {
  //     nome: undefined,
  //     sobrenoome: "",
  //     idade: "",
  //     estadoCivil: "",
  //     profissao: "",
  //     nacionalidade: ""
  //   }
  // }
  // mostrar() {
  //   this.users.push(this.interface)
  //   console.log(this.users);
  //   this.iniciar();

  // }


  //   currentuser: { username: string, password: string };
  //   users = [];

  //   constructor() {
  //     this.default();
  //   }


  //   add() {
  //     this.users.push(this.currentuser);
  //     this.default();
  //     console.log(this.currentuser.username)
  //     console.log(this.currentuser.password)

  //   }

  //   default() {
  //     this.currentuser = {
  //       username: '',
  //       password: ''
  //     }
  //   }

  //   show() {
  //     console.log(this.users);
  //   }

// function cadastrarCliente(ObjCliente:Cliente ; ObEndereço:Endereco):number {

