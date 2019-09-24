import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from '../../providers/subir-archivo/subir-archivo.service';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  imagenTemp: string;
  imagenSubir: File;

  constructor(public _cargaArchivo: SubirArchivoService,
              public _modalUploadService: ModalUploadService ) {
    console.log('modal listo');
   }

  ngOnInit() {
  }

  seleccionImagen( archivo: File ) {

    if (!archivo) {
      this.imagenSubir = null;
      return;
    }

    if(archivo.type.indexOf('image') < 0) {
      alert('Solo imagenes, el archivo no es una imagen');
      this.seleccionImagen =  null;
    }


    this.imagenSubir = archivo;

    let reader: any = new FileReader();
    let urlImahenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imagenTemp = reader.result;
  }

  subirImagen() {
    this._cargaArchivo.subirArchivo( this.imagenSubir, this._modalUploadService.tipo, this._modalUploadService.id )
    .then(resp => {
      console.log(resp);

      this._modalUploadService.notificacion.emit( resp );
      this.cerrarModal();
    }).catch(err => {
      console.log('error en la carga');
    });
  }

  cerrarModal() {
    this.imagenTemp = null;
    this.imagenSubir = null;
    this._modalUploadService.ocultarModal();
  }
}
