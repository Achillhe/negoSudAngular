import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/data/product.model';



@Injectable({
    providedIn:'root'
})
export class ProduitService {

    constructor(private http: HttpClient){}
    public productEndPoint = "https://localhost:7141/api/Produit"
    public productUpdateEndPoint = "https://localhost:7141/api/Produit/"
  
    getProduct():Observable<Product[]> {
        return this.http.get<Product[]>(this.productEndPoint);
    }
    updateProduct(id:number, product:Product){
        return this.http.put(this.productUpdateEndPoint+id, product);
    }
}