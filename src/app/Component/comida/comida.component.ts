import { Component } from '@angular/core';
import { comidaList } from './pizza.mock';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-comida',
  standalone: true,
  imports: [NgFor],
  templateUrl: './comida.component.html',
  styleUrl: './comida.component.css'
})
export class ComidaComponent {
  comidaList = comidaList;
}
