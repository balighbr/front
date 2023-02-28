import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ViewcategoriesComponent } from './components/viewcategorie/viewcategorie.component'; 
import { AddcategorieComponent } from './components/addcategorie/addcategorie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatecategorieComponent } from './components/updatecategorie/updatecategorie.component';
import { ViewproduitComponent } from './components/viewproduit/viewproduit.component';
import { AddproduitComponent } from './components/addproduit/addproduit.component';
import { UpdateproduitComponent } from './components/updateproduit/updateproduit.component';
import { ViewproduitbycategorieComponent } from './components/viewproduitbycategorie/viewproduitbycategorie.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewcategoriesComponent,
    AddcategorieComponent,
    UpdatecategorieComponent,
    ViewproduitComponent,
    AddproduitComponent,
    UpdateproduitComponent,
    ViewproduitbycategorieComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
