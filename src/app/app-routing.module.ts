import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { PurposesComponent } from './layout/pages/purposes/purposes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'propositos', component: PurposesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
