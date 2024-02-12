import { Component } from '@angular/core';
import { PeliculasService } from '../servicios/peliculas.service';


@Component({
  selector: 'app-generos',
  standalone: true,
  imports: [],
  templateUrl: './generos.component.html',
  styleUrl: './generos.component.css'
})
export class GenerosComponent {
  generos:any;
  constructor( private peliculasService:PeliculasService){}

  ngOnInit(){
    this.cargarGeneros()
  }

  cargarGeneros(){
    this.peliculasService.getGeneros().subscribe({
      next:(datos:any)=>{
        this.generos=datos.genres;
      },
      error:(e)=>{
        debugger
        console.log('Error al obtener los generos')
      }

      })
  }
}
