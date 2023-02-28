import { Component } from '@angular/core';
import { Produit } from 'src/app/produit';

import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Categorie } from 'src/app/categorie';

@Component({
  selector: 'app-updateproduit',
  templateUrl: './updateproduit.component.html',
  styleUrls: ['./updateproduit.component.css']
})
export class UpdateproduitComponent {
  produit?: Produit
  data: any


  constructor(private service: AppService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getproduitByid(id).subscribe(data => {
      this.produit = data
      console.log(this.produit)
    })
  }

  form = new FormGroup({
    nomp: new FormControl('', [Validators.required]),
    qtp: new FormControl('', [Validators.required]),
    disponible: new FormControl('', [Validators.required]),
    
  })

  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.updateproduit(this.produit?.id,this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/products']);
  }


}
