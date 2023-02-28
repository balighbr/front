import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Produit } from 'src/app/produit';

@Component({
  selector: 'app-viewproduitbycategorie',
  templateUrl: './viewproduitbycategorie.component.html',
  styleUrls: ['./viewproduitbycategorie.component.css']
})
export class ViewproduitbycategorieComponent {
  produit: Produit[] | undefined
  url: string = "http://localhost:8090/Produits";

  constructor(private service: AppService, private router: Router,private route: ActivatedRoute) { 
   
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getProduitByCategorie(id).subscribe(data => {
      this.produit = data;
      console.log(data);
    })
  }

}
