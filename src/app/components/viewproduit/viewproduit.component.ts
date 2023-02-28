import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Produit } from 'src/app/produit';

@Component({
  selector: 'app-viewproduit',
  templateUrl: './viewproduit.component.html',
  styleUrls: ['./viewproduit.component.css']
})
export class ViewproduitComponent {
  produit: Produit[] | undefined
  

  constructor(private service: AppService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.service.getProduit().subscribe(data => {
      this.produit = data;
      console.log(data);
    })
  }

  deleteproduit(id: number){
    this.service.deleteproduit(id).subscribe(data => {
      this.produit = this.produit?.filter(produit => produit.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  }

  updateproduit(id: any){
    this.router.navigate(['updateproduit', id]);
  }

}


