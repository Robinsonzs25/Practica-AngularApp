import { Component } from '@angular/core';
import { DatosComponent } from '../datos/datos.component';
import { GenerosComponent } from '../generos/generos.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [ GenerosComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}
