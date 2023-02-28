import { Categorie } from "./categorie"

export interface Produit {
    id: number
    nomp: string
    qtp: number
    disponible:boolean
    date_creation_prod: Date
    date_modif_prod: Date,
    categorie_id: number
    
}