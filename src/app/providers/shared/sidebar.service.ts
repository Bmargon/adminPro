import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { subtitulo: 'Dashboard', url: '/dashboard'},
        { subtitulo: 'ProgressBar', url: '/progress'},
        { subtitulo: 'Gráficas', url: '/graficas1'},
        { subtitulo: 'Promesas', url: '/promesas'},
        { subtitulo: 'rxjs', url: '/rxjs'}

      ]
    },
    {
      titulo: 'Mantenimientos',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        {subtitulo: 'Usuarios', url: '/usuarios'},
        {subtitulo: 'Hospitales', url: '/hospitales'},
        {subtitulo: 'Médicos',  url: '/medicos'}
            ]
    }
  ];

  constructor() { }
}
