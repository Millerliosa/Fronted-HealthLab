import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  tiposIdentificacion: string[] = ['Cédula', 'Pasaporte', 'Tarjeta de Identidad'];

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      tipoIdentificacion: ['', Validators.required],
      numeroIdentificacion: ['', Validators.required],
      fechaNacimiento: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log('Formulario válido:', formData);
      // Lógica para enviar el formulario al backend
    } else {
      console.log('Formulario inválido');
    }
  }
}
