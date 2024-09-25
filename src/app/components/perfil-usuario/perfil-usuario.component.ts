import { Component, OnInit } from '@angular/core';

interface PatientInfo {
  label: string;
  value: string;
  icon: string;
}

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent implements OnInit{
    patientName = 'Nombre del Paciente';
    patientImageUrl = '/placeholder.svg?height=300&width=300';
    patientInfo: PatientInfo[] = [
      { label: 'TIPO DE IDENTIFICACIÓN', value: 'XXXXXXXXXXXX', icon: 'badge' },
      { label: 'NÚMERO DE IDENTIFICACIÓN', value: 'XXXXXXXXXXXX', icon: 'pin' },
      { label: 'NÚMERO DE HISTORIA', value: 'XXXXXXXXXXXX', icon: 'folder' },
      { label: 'TIPO DE DOCUMENTO', value: 'XXXXXXXXXXXX', icon: 'description' },
      { label: 'FECHA NACIMIENTO', value: 'XXXXXXXXXXXX', icon: 'cake' },
      { label: 'DIRECCIÓN DE RESIDENCIA', value: 'XXXXXXXXXXXX', icon: 'home' },
      { label: 'NÚMERO DE CELULAR', value: 'XXXXXXXXXXXX', icon: 'phone' },
      { label: 'CORREO ELECTRÓNICO', value: 'XXXXXXXXXXXX', icon: 'email' },
    ];
  
    constructor() { }
  
    ngOnInit(): void { }
  }

