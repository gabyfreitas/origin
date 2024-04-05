import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meu-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meu-componente.component.html',
  styleUrl: './meu-componente.component.css'
})
export class MeuComponenteComponent {
  @Input() pessoa: {nome: string, idade: number, interesses: string[] } = {
    nome: 'Joao',
    idade: 25,
    interesses: ['programacao', 'viagem', 'fotografia']
  };
}
