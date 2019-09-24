import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from 'src/app/providers/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean = true;



  constructor( public _usuarioService: UsuarioService, public _modalUploadService: ModalUploadService ) { }

  ngOnInit() {
    this.cargarUsuarios();
    this._modalUploadService.notificacion.subscribe( resp => this.cargarUsuarios());
  }

  cargarUsuarios(){
    this.cargando = true;

    this._usuarioService.cargarUsuarios( this.desde ).subscribe( (resp: any) => {
      console.log( resp );
      this.totalRegistros = resp.total;
      this.usuarios = resp.usuarios;
      this.cargando = false;

    });
  }

  cambiarDesde( valor: number) {

    let desde = this.desde + valor;
    console.log(desde);

    if (desde >= this.totalRegistros) {
      return;
    }
    if ( desde < 0 ) {
      return;
    }
    this.desde += valor;
    this.cargarUsuarios();

  }

  buscarUsuario(termino: string) {

  if ( termino.length <= 0 ) {
    this.cargarUsuarios();
    return;
  }
  console.log(termino);
  this._usuarioService.buscarUsuarios(termino).subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
    });
  }

  borrarUsuario( usuario: Usuario) {

    if (usuario._id === this._usuarioService.usuario._id) {
      Swal.fire({
        title: 'Error!',
        text: 'No te puedes borrar a ti mismo',
        type: 'error'
      });
      return;
    }

    Swal.fire({
      title: 'Atención!',
      text: 'Estás seguro de borrar a ' + usuario.nombre,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!'
    }).then((borrar) => {
      if (borrar.value) {
        this._usuarioService.borrarUsuario(usuario._id).subscribe( (resp: any) => {
          console.log(resp);
          this.cargarUsuarios();
        });
      }
    });

  }

  guardarUsuario(usuario: Usuario) {
    this._usuarioService.actualizarUsuario(usuario).subscribe();
  }

  mostrarModal( id: string) {
    this._modalUploadService.mostrarModal('usuarios', id);
  }
}
