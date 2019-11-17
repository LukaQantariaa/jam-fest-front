import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { AuthguardService } from './guards/authguard.service';


const routes: Routes = [
  { path: '',  component: MainPageComponent },
  { path: 'items/:id', component: CategoryPageComponent, canActivate: [AuthguardService] },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
