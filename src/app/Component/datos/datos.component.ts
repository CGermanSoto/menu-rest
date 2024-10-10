import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { datosList } from './datos.mock';

@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css'
})
export class DatosComponent {
  datosList = datosList;
}
