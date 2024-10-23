import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  animations: [
    trigger('slideInLeft', [
      state('void', style({ opacity: 0, transform: 'translateX(-50px)' })),
      transition(':enter', [
        animate('1.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideInBottom', [
      state('void', style({ opacity: 0, transform: 'translateY(50px)' })),
      transition(':enter', [
        animate('1.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AboutUsComponent implements OnInit {
  isInView = false; // Controla se a div já entrou no viewport

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    // Configuração do Intersection Observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isInView = true; // Ativa a animação quando a div entra no viewport
          observer.unobserve(this.elementRef.nativeElement); // Para de observar após entrar no viewport
        }
      });
    }, {
      threshold: 0.1 // Dispara quando 10% da div estiver visível
    });

    observer.observe(this.elementRef.nativeElement);
  }
}
