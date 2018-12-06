import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from 'src/app/home/home.component';
import { AboutComponent } from 'src/app/about/about.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { DoctorsComponent } from 'src/app/doctors/doctors.component';
import { EventComponent } from 'src/app/event/event.component';
import { GalleryComponent } from 'src/app/gallery/gallery.component';
import { CntDeptGyncComponent } from 'src/app/cnt-dept-gync/cnt-dept-gync.component';
import { CntDeptOncComponent } from 'src/app/cnt-dept-onc/cnt-dept-onc.component';
//import { TaskSectionComponent } from './task-section/task-section.component';



const routes: Routes = [
// { path: 'task/order_manager', component: TaskSectionComponent },
   { path: '', component: HomeComponent },
   { path: 'About', component: AboutComponent },
   { path: 'Contact', component: ContactComponent },
   { path: 'doctors', component: DoctorsComponent },
   { path: 'events', component: EventComponent },
   { path: 'gallery', component: GalleryComponent },
   { path: 'dept_gync', component: CntDeptGyncComponent },
   { path: 'dept_onc', component: CntDeptOncComponent }

  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
