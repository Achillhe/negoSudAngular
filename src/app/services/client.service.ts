import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/data/product.model';



@Injectable({
    providedIn:'root'
})
export class ClientService {

    constructor(private http: HttpClient){}
    public productEndPoint = "https://localhost:7141/api/Produit"
    public productUpdateEndPoint = "https://localhost:7141/api/Produit/" 
    public productAddEndPoint = "https://localhost:7141/api/Produit"
    public productRemoveEndPoint = "https://localhost:7141/api/Produit/"
  
    getProduct():Observable<Product[]> {
        return this.http.get<Product[]>(this.productEndPoint);
    }

    updateProduct(id:number, product:Product){
        return this.http.put(this.productUpdateEndPoint+id, product);
    }

    addProduct(product: Product){
        return this.http.post<Product>(this.productAddEndPoint, product);
    }

    removeProduct(id:number){
        return this.http.delete(this.productUpdateEndPoint+id);
    }
}
