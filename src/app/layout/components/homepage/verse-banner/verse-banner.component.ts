import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-verse-banner',
  templateUrl: './verse-banner.component.html',
  styleUrl: './verse-banner.component.scss'
})
export class VerseBannerComponent {
  @Input() bannerImage: string = 'assets/images/banner.jpg';
  @Input() mainText: string = '"Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim."';
  @Input() verse: string = 'João 14:6';
}
