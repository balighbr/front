import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-viewcategorie',
  templateUrl: './viewcategorie.component.html',
  styleUrls: ['./viewcategorie.component.css']
})
export class ViewcategoriesComponent implements OnInit {

categories: any[] | undefined
  url: string = "http://localhost:8090/";

  constructor(private service: AppService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.service.getcategories().subscribe(data => {
      this.categories = data;
    })
  }

  delete(id: number){
    this.service.deletecategorie(id).subscribe(data => {
      this.categories = this.categories?.filter(categories => categories.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  
  }

  updatecategorie(id: any){
    this.router.navigate(['update', id]);
  }
  
  getProduitByCategorie(id:any){
    this.router.navigate(['getproduitbycat', id]);
  }

}