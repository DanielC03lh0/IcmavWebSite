import { Component } from '@angular/core';
import { ChurchEvent } from '../../../models/church-event.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedEvent: ChurchEvent | null = null;
  isModalOpen = false;

  onEventSelected(event: ChurchEvent) {
    this.selectedEvent = event;
    this.isModalOpen = true;
  }

  closeModal() {
    this.selectedEvent = null;
    this.isModalOpen = false;
  }
}
