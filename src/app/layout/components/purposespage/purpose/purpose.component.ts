import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-purpose',
  templateUrl: './purpose.component.html',
  styleUrl: './purpose.component.scss'
})
export class PurposeComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() descriptionTitle: string = '';
  @Input() description: string = '';
  @Input() image: string = '/assets/images/placeholder.png';
  @Input() reverse: boolean = false; // Controla se a imagem fica à direita ou à esquerda
  @Input() bgColor: string = ''; // Controla a cor de fundo (caso seja cinza escuro, por exemplo)
}
