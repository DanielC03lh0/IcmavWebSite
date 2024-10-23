import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ChurchEvent } from '../../../models/church-event.model';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrl: './event-modal.component.scss'
})
export class EventModalComponent {
  @Input() event: ChurchEvent | null = null; // Recebe o evento do pai
  @Input() isModalOpen = false; // Controla a visibilidade do modal
  @Output() closeModalEvent = new EventEmitter<void>(); // Emite um evento para fechar o modal

  // Função para fechar o modal
  closeModal() {
    this.closeModalEvent.emit();
  }

    // Detectar clique fora do modal e fechar
    @HostListener('document:click', ['$event'])
    onClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (this.isModalOpen && target.id === 'eventModal') {
        this.closeModal();
      }
    }
  
    // Detectar tecla ESC e fechar o modal
    @HostListener('document:keydown.escape', ['$event'])
    onEscKeydown(event: KeyboardEvent) {
      if (this.isModalOpen) {
        this.closeModal();
      }
    }
}
