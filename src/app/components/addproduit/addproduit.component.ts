import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']

})
export class AddproduitComponent implements OnInit {
  constructor(private service: AppService, private router: Router) { }
  data: any
  id:any
  
  form = new FormGroup({
    nomp: new FormControl('', [Validators.required]),
    qtp: new FormControl('', [Validators.required]),
    disponible: new FormControl('', [Validators.required]),
    categorie_id: new FormControl('', [Validators.required]),
  
  
  })
  ngOnInit(): void {
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)
    this.id=this.data.categorie_id


    this.service.addproduit(this.id,this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/produit']);
  }
}