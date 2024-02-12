import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http:HttpClient) { }

  getGeneros(){
   return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=43bb95cae941badc90476b9f10f04134&language=en-US');
  }

  saveTipo(tipo:any, name:any, email:any, password:any){
    debugger
    return this.http.post('http://localhost:8000/api/usuario',
      {
        name:name,
        email:email,
        password:password,
        tipo_id:tipo
      }
    );
  }
}
