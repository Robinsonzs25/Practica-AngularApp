import { Component } from '@angular/core';
import { DatosComponent } from '../datos/datos.component';
import { PeliculasService } from '../servicios/peliculas.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  datos=[
    {
      id: 1,
      name: "thomas",
      apellido: "Loor",
      edad: 21
    },
    {
      id: 2,
      name: "Marcos",
      apellido: "Vera",
      edad: 22
    },]


    mgs:any;
    constructor(private peliculasService:PeliculasService){}

    registerUser(tipo:any, name:any, email:any, password:any){
      this.peliculasService.saveTipo(tipo.value, name.value, email.value, password.value).subscribe({
        next:(data:any)=>{
          this.mgs=data.message
        },
        error:(e)=>{
          debugger
        }
      })
    }
}
