import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewcategoriesComponent } from './components/viewcategorie/viewcategorie.component';
import { AddcategorieComponent } from './components/addcategorie/addcategorie.component';
import { UpdatecategorieComponent } from'./components/updatecategorie/updatecategorie.component';
import { ViewproduitComponent } from './components/viewproduit/viewproduit.component';
import { AddproduitComponent } from './components/addproduit/addproduit.component';
import { UpdateproduitComponent } from './components/updateproduit/updateproduit.component';
import { ViewproduitbycategorieComponent } from './components/viewproduitbycategorie/viewproduitbycategorie.component';
const routes: Routes = [
  { path: '', component: ViewcategoriesComponent },
  {path:'add',component:AddcategorieComponent},
  {path:'update/:id',component:UpdatecategorieComponent},
  {path:'products',component:ViewproduitComponent},
  {path:'addproduit',component:AddproduitComponent},
  {path:'updateproduit/:id',component:UpdateproduitComponent},
  {path:'getproduitbycat/:id',component:ViewproduitbycategorieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
