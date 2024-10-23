import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-header',
  templateUrl: './small-header.component.html',
  styleUrl: './small-header.component.scss'
})
export class SmallHeaderComponent {
  @Input() backgroundImage: string = '/assets/images/header2.jpg'; // Caminho da imagem de fundo
  @Input() darkFilter: boolean = false; // Controla se o filtro escuro é ativo
  @Input() title: string = 'IGREJA COM PROPÓSITOS'; // Título
  @Input() description: string = 'Conheça os fundamentos da nossa igreja'; // Descrição
}
