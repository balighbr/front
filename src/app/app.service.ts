import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Categorie } from './categorie';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "http://localhost:8090/categories";
  private url2 = "http://localhost:8090/products";

  constructor(private http: HttpClient) { }

  // Add User - Create
  addcategorie(categorie: Categorie){
    return this.http.post<Categorie>((this.url+'/add'), categorie)
  }

  // Get Users - Reads
  getcategories(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'/getall')
  }

  // Get User by Id - Read
  getcategorieByid(id: number): Observable<Categorie>{
    return this.http.get<Categorie>(`${this.url}/lire/${id}`)
  }

  // Update User - Update
  updatecategorie(id: any ,categorie?: any): Observable<any>{
    return this.http.put<any>(`${this.url}/modifier/${id}` ,categorie)
  }

  // Delete User - Delete
  deletecategorie(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/supprimer/${id}`)
  }

  getProduit(): Observable<any[]>{
    return this.http.get<any[]>(this.url2+'/geta')
  }
  addproduit(id:any,produit: Produit){
    return this.http.post<Produit>(`${this.url2}/add/`+id, produit)
  }
  updateproduit(id: any ,produit?: any): Observable<any>{
    return this.http.put<any>(`${this.url2}/modif/${id}` ,produit)
  }
  getproduitByid(id: number): Observable<Produit>{
    return this.http.get<Produit>(`${this.url2}/get/${id}`)
  }
  deleteproduit(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url2}/supprimer/${id}`)
  }
  getProduitByCategorie(id:number): Observable<any[]>{
    return this.http.get<any[]>(`${this.url2}/getprodbycat/${id}`)
  }

}