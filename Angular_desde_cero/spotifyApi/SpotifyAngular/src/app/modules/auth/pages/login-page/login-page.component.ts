import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{
  formLogin: FormGroup = new FormGroup({});
    errorSession: boolean = false;
  constructor(private authService: AuthService, private cookie: CookieService) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ])
    })
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value
    this.authService.sendCredentials(email, password)
      //Todo 200 < 400
      .subscribe(responseOK => {// usuario con credenciales correstas
        console.log('Sesion iniciada correcta', responseOK);
        const { tokenSession, data } = responseOK
        this.cookie.set('token', tokenSession, 4, '/') // Aqui se indica q ala variable cookie se le va asignar tokenSession, dura 4 dias y es para toda la app

      }, err => { //todo error 400 >=
        this.errorSession = true
        console.log('Ocurrio error en email o password')
      })
  }


}
