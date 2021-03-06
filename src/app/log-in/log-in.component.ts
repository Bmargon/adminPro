import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../providers/service.index';
import { Usuario } from '../models/usuario.model';
declare const gapi: any;



declare function init_plugins();

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./login.component.css']
})
export class LogInComponent implements OnInit {

  email: string;
  recuerdame: boolean = false;
  auth2: any;

  constructor( public router: Router, public _usuarioService: UsuarioService ) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();

    this.email = localStorage.getItem('email') || '';

    if (this.email.length > 1) {
      this.recuerdame = true;
    }
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '398498604670-ksofb372uun8ideocdc280fu9ourn92e.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignIn(document.getElementById('btnGoogle'));
    });
  }

  attachSignIn(element) {

    this.auth2.attachClickHandler(element, {}, (googleUser) => {

      // let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;

      this._usuarioService.loginGoogle( token ).subscribe( () => window.location.href = '#/dashboard');
    });


  }

  ingresar(forma: NgForm) {

    if (forma.invalid) {
      return;
    }

    let usuario = new Usuario(null, forma.value.email, forma.value.password);

    this._usuarioService.login(usuario, forma.value.recuerdame).subscribe( correcto => this.router.navigate(['dashboard']));

    console.log(forma.valid);
    console.log(forma.value);

  }
}
