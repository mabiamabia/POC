import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  entrar() {
    this.router.navigate(["/listing"])
  }

}
