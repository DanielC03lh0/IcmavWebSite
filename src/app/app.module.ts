import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { BigHeaderComponent } from './layout/components/big-header/big-header.component';
import { AboutUsComponent } from './layout/components/homepage/about-us/about-us.component';
import { VerseBannerComponent } from './layout/components/homepage/verse-banner/verse-banner.component';
import { EventsCarouselComponent } from './layout/components/events-carousel/events-carousel.component';
import { EventModalComponent } from './layout/components/event-modal/event-modal.component';
import { ContactsComponent } from './layout/components/homepage/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BigHeaderComponent,
    AboutUsComponent,
    VerseBannerComponent,
    EventsCarouselComponent,
    EventModalComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
