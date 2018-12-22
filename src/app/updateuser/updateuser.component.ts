import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service'
@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private servicio: AuthService) {
    this.ruta.params.subscribe(params => {

      this.servicio.SelectUser(params['id']).subscribe(response => {
        console.log(response)
        this.UserDatos = response[0];
      });

    });
  }

  UserDatos : {
    
    idUsuario: Number,
    nombre: String,
    contrasena: String,
    correo: String,
    comentario: String,
    experiencia: Number,
    estado: Number,
    fkPersona: Number
  
  } = {
    
    idUsuario: null,
    nombre: null,
    contrasena: null,
    correo: null,
    comentario: null,
    experiencia: null,
    estado: null,
    fkPersona: null
  }

  ngOnInit() {
  }

  UpdateUser(){
    this.servicio.UpdateUser(this.UserDatos).subscribe(response => {
      console.log(response);
      this.servicio.SelectUser(this.UserDatos.idUsuario).subscribe(response => {
        this.UserDatos = response[0];
      });
      
    })
  }

}
