import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './layout/pages/home/home.component';
import { PurposesComponent } from './layout/pages/purposes/purposes.component';

import { NavbarComponent } from './layout/components/general/navbar/navbar.component';
import { FooterComponent } from './layout/components/general/footer/footer.component';
import { BigHeaderComponent } from './layout/components/general/big-header/big-header.component';
import { EventsCarouselComponent } from './layout/components/general/events-carousel/events-carousel.component';
import { EventModalComponent } from './layout/components/general/event-modal/event-modal.component';
import { SmallHeaderComponent } from './layout/components/general/small-header/small-header.component';

import { AboutUsComponent } from './layout/components/homepage/about-us/about-us.component';
import { VerseBannerComponent } from './layout/components/homepage/verse-banner/verse-banner.component';
import { ContactsComponent } from './layout/components/homepage/contacts/contacts.component';

import { PurposeComponent } from './layout/components/purposespage/purpose/purpose.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    PurposesComponent,
    
    NavbarComponent,
    FooterComponent,
    BigHeaderComponent,
    SmallHeaderComponent,
    EventsCarouselComponent,
    EventModalComponent,
    
    AboutUsComponent,
    ContactsComponent,
    VerseBannerComponent,
    
    PurposeComponent
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
