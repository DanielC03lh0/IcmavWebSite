import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  // Dados de contato
  contactInfo = {
    phone: '934 693 310',
    email: 'info@icmav.pt',
    workHours: [
      { day: 'Segunda a Sexta', hours: '09h00 - 17h00' },
      { day: 'Domingo', hours: '10h30 - 13h00' }
    ],
    socialLinks: [
      { icon: 'fa-facebook', url: 'https://www.facebook.com/ICMAV', color: 'text-blue-500' },
      { icon: 'fa-instagram', url: 'https://www.instagram.com/icmav/', color: 'text-pink-500' },
      { icon: 'fa-youtube', url: 'https://www.youtube.com/c/icmavumaigrejacompropositos', color: 'text-red-500' },
      { icon: 'fa-whatsapp', url: 'https://chat.whatsapp.com/EdGaqNUARdYB7HokXeleHR', color: 'text-green-500' }
    ]
  };
}
