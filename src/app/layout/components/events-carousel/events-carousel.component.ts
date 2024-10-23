import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ChurchEvent } from '../../../models/church-event.model.js';  // Importar a classe ChurchEvent

@Component({
  selector: 'app-events-carousel',
  templateUrl: './events-carousel.component.html',
  styleUrls: ['./events-carousel.component.scss']
})
export class EventsCarouselComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef; // Capturar o elemento 'carousel'
  @ViewChild('indicators') indicators!: ElementRef; // Capturar os indicadores

  @Output() eventSelected = new EventEmitter<ChurchEvent>(); // Para emitir o evento selecionado

  events : ChurchEvent[] = [
    {
        title: "Abe Huber",
        date: "30/10/2024",
        time: "21:00h",
        location: "ICMAV Sede",
        description: [
            "No dia 30/10, quarta-feira, às 21h, receberemos o Pastor Abe Huber com uma palavra poderosa!",
            "Estamos a preparar um ambiente especial para si, mas para isso confirme a sua presença. Para inscrever-te basta aceder ao link a baixo:"
        ],
        image: "assets/images/events/Abe-Huber.jpg",
        links: [
            { url: "https://icmav.churchcenter.com/people/forms/838448", label: "Fazer Inscrição" }
        ]
    },
    {
        title: "Classe Boas Vindas",
        date: "4/11/18/25 Novembro",
        time: "20:30h",
        location: "Zoom",
        description: [
            "A Classe é destinada a todos aqueles que desejam conhecer mais sobre a família ICMAV, os que querem assumir o compromisso do batismo nas águas, e também aos que querem tornar-se membros.",
            "Para te inscreveres na Classe de Boas Vindas podes aceder ao link a baixo ou inscrever-te no domingo, no stand ICMAV com Propósito."
        ],
        image: "assets/images/events/Classe-Boas-Vindas.png",
        links: [
            { url: "https://icmav.churchcenter.com/people/forms/838104", label: "Fazer Inscrição" }
        ]
    },
    {
      title: "Conferência Alcançar",
      date: "8/10/2024 a 10/10/2024",
      time: "21h",
      location: "ICMAV Sede",
      description: [
          'A nossa Conferência Alcançar está a chegar e para te inscreveres, basta acederes ao link em baixo.',
          'Se tens um coração de servo e desejas ajudar na conferência como voluntário, inscreve-te no link indicado.',
      ],
      image: "assets/images/events/Conferencia-Alcancar.jpg",
      links: [
          { url: "https://icmav.churchcenter.com/people/forms/838135", label: "Fazer Inscrição" },
          { url: "https://icmav.churchcenter.com/people/forms/827063", label: "Fazer Inscrição Voluntário" },
      ]
    }
  ];

  currentIndex = 0;
  autoRotate: any;
  selectedEvent: ChurchEvent | null = null; // Evento selecionado para o modal
  isModalOpen = false; // Estado para controlar se o modal está aberto

  ngAfterViewInit() {
    this.buildCarousel(); // Inicializar o carrossel
    this.buildIndicators(); // Inicializar os indicadores
    this.resetAutoRotate(); // Iniciar a rotação automática
  }

  buildCarousel() {
    const carouselElement = this.carousel.nativeElement;

    if (!carouselElement) {
      return; // Verificação de segurança para evitar null reference
    }

    // Limpar o conteúdo atual do carrossel e reconstruir
    carouselElement.innerHTML = ''; // Limpar o conteúdo existente

    // Adicionar o evento anterior, atual e próximo
    for (let i = -1; i <= 1; i++) {
      const eventIndex = (this.currentIndex + i + this.events.length) % this.events.length;
      const event = this.events[eventIndex];

      // Criar a estrutura de cada item do carrossel
      const eventDiv = document.createElement('div');
      eventDiv.classList.add('carousel-item', 'flex-shrink-0', 'w-full', 'md:w-[32%]', 'h-auto', 'flex', 'flex-col', 'items-center', 'justify-center', 'p-4', 'bg-gray-800', 'rounded-lg', 'shadow-lg', 'hover:shadow-xl', 'transition-shadow', 'duration-300');

      eventDiv.innerHTML = `
        <div class="carousel-item-inner w-full flex flex-col items-center justify-center">
          <img src="${event.image}" alt="${event.title}" class="w-full h-auto object-contain rounded-md mb-4">
          <div class="text-center text-white">
            <h3 class="text-2xl font-bold">${event.title}</h3>
            <div class="flex items-center justify-center mt-2 text-gray-400">
              <i class="fa-solid fa-calendar mr-2"></i>
              <p class="text-base">${event.date}</p>
            </div>
            <div class="flex items-center justify-center mt-1 text-gray-400">
              <i class="fa-solid fa-location-dot mr-2"></i>
              <p class="text-base">${event.location}</p>
            </div>
            <button class="mt-2 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition-colors duration-300">Mais Informações</button>
          </div>
        </div>
      `;

      // Adicionar o evento de clique para abrir o modal
      eventDiv.querySelector('button')?.addEventListener('click', () => this.openModal(event));

      carouselElement.appendChild(eventDiv); // Adicionar ao carrossel
    }
  }

  buildIndicators() {
    const indicatorsElement = this.indicators.nativeElement;

    if (!indicatorsElement) {
      return; // Verificar se existe o elemento de indicadores
    }

    indicatorsElement.innerHTML = ''; // Limpar os indicadores anteriores

    // Criar os pontos de navegação do carrossel
    for (let i = 0; i < this.events.length; i++) {
      const indicatorDot = document.createElement('span');
      indicatorDot.classList.add('w-3', 'h-3', 'rounded-full', 'cursor-pointer', 'transition-colors', 'duration-300');

      // Atualizar a cor do indicador (branco se for o atual, cinza se não for)
      if (i === this.currentIndex) {
        indicatorDot.classList.add('bg-white');
      } else {
        indicatorDot.classList.add('bg-gray-500');
      }

      // Adicionar o evento de clique a cada ponto indicador
      indicatorDot.addEventListener('click', () => {
        this.currentIndex = i;
        this.buildCarousel(); // Atualizar o carrossel ao clicar no indicador
        this.buildIndicators(); // Atualizar os indicadores
        this.resetAutoRotate(); // Reiniciar a rotação automática
      });

      indicatorsElement.appendChild(indicatorDot); // Adicionar o indicador à div de indicadores
    }
  }

  resetAutoRotate() {
    clearInterval(this.autoRotate); // Limpar o intervalo atual
    this.autoRotate = setInterval(() => {
      this.next();
    }, 7000); // Rotação a cada 7 segundos
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.events.length;
    this.buildCarousel();
    this.buildIndicators(); // Atualizar os indicadores ao avançar
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.events.length) % this.events.length;
    this.buildCarousel();
    this.buildIndicators(); // Atualizar os indicadores ao retroceder
  }

  // Função para emitir o evento selecionado
  openModal(event: ChurchEvent) {
    this.eventSelected.emit(event); // Emitir o evento selecionado para o componente do modal
  }

}
