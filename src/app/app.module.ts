import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './items/items.component';
import { FooterComponent } from './footer/footer.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryPageComponent } from './category-page/category-page.component';
import { LoginDialogComponent } from './header/login.dialog/login.dialog.component';
import { RegisterDialogComponent } from './header/register.dialog/register.dialog.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyItemsComponent } from './my-items/my-items.component';
import { AddDialogComponent } from './my-items/add-dialog/add-dialog.component';
import { MessagesComponent } from './messages/messages.component';
import { OfferDialogComponent } from './category-page/offer-dialog/offer-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    FooterComponent,
    FavouritesComponent,
    MainPageComponent,
    CategoryPageComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    MyItemsComponent,
    AddDialogComponent,
    MessagesComponent,
    OfferDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginDialogComponent,
    RegisterDialogComponent,
    AddDialogComponent,
    OfferDialogComponent
  ]
})
export class AppModule { }
