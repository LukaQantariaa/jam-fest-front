import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { AuthguardService } from './guards/authguard.service';
import { MyItemsComponent } from './my-items/my-items.component';
import { MessagesComponent } from './messages/messages.component';


const routes: Routes = [
  { path: '',  component: MainPageComponent },
  { path: 'items/:id', component: CategoryPageComponent },
  { path: 'my-items', component: MyItemsComponent},
  { path: 'messages', component: MessagesComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
