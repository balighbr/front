import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Categorie } from 'src/app/categorie';

@Component({
  selector: 'app-updatecategorie',
  templateUrl: './updatecategorie.component.html',
  styleUrls: ['./updatecategorie.component.css']
})
export class UpdatecategorieComponent implements OnInit {

  categorie?: Categorie
  data: any


  constructor(private service: AppService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getcategorieByid(id).subscribe(data => {
      this.categorie = data
      console.log(this.categorie)
    })
  }

  form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    qt: new FormControl('', [Validators.required]),
    
  })

  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.updatecategorie(this.categorie?.id,this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/']);
  }

}