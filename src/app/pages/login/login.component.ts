import { LoginService } from './../../services/login.service';
import { routes } from './../../app.routes';
import { Component } from '@angular/core';
import { DeafaultLoginLayoutComponent } from '../../components/deafault-login-layout/deafault-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from "../../components/primary-input/primary-input.component";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DeafaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
],
  providers: [
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private LoginService: LoginService,
    private toastService: ToastrService,


  ){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  Submit(){
    this.LoginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.toastService.success("Login feito com sucesso!"),
      error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde.")
    })
  }

  Navigate(){
    this.router.navigate(["signup"])
 }

}
