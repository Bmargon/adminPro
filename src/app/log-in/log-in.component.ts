import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./login.component.css']
})
export class LogInComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
    init_plugins();
  }

  ingresar() {
    this.router.navigate(['/dashboard']);
  }
}
