import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { SwiperModule } from 'angular2-useful-swiper';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CntDeptGyncComponent } from './cnt-dept-gync/cnt-dept-gync.component';
import { CntDeptOncComponent } from './cnt-dept-onc/cnt-dept-onc.component';
import { ContactComponent } from './contact/contact.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { EventComponent } from './event/event.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PafeNotFoundComponent } from './pafe-not-found/pafe-not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CntDeptGyncComponent,
    CntDeptOncComponent,
    ContactComponent,
    DoctorsComponent,
    EventComponent,
    GalleryComponent,
    PafeNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
