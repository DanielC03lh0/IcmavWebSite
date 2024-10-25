import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { PurposesComponent } from './layout/pages/purposes/purposes.component';
import { ContributeComponent } from './layout/pages/contribute/contribute.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'propositos', component: PurposesComponent },
  { path: 'contribuir', component: ContributeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
