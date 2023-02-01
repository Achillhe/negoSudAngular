import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data/product.model';
import notify from 'devextreme/ui/notify';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-product',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
  products: Product[]=[]
  readonly allowedPageSizes = [5, 10, 'all'];

  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];

  displayMode = 'full';

  showPageSizeSelector = true;

  showInfo = true;

  showNavButtons = true;

  constructor(private clientService: ProduitService) {
    
  }
  updateProduct(event){
    console.log("mon event",event);
    var product =  this.products.find(x => x.id == event.key);
    console.log("mon produit",product)
  
    product.type = event.newData.type == undefined ? product.type : event.newData.type
    product.millesime = event.newData.millesime == undefined ? product.millesime : event.newData.millesime
    product.nom_de_domaine = event.newData.nom_de_domaine == undefined ? product.nom_de_domaine : event.newData.nom_de_domaine
    product.prix = event.newData.prix == undefined ? product.prix : event.newData.prix
    product.quantite = event.newData.quantite == undefined ? product.type : event.newData.quantite
    product.reference = event.newData.reference == undefined ? product.type : event.newData.reference
    product.volume = event.newData.volume == undefined ? product.type : event.newData.volume
  
    this.clientService.updateProduct(event.key, product).subscribe(resulat => {
      notify("Produit correctement modifié", "success", 500);
    
    });
  }

  addProduct(event){
    console.log("new product", event);
    this.clientService.addProduct(event.data).subscribe(resulat => {
      notify("Produit correctement ajouté", "success", 500);
    });
  }

  removeProduct(event){
    console.log("remove product", event);
    this.clientService.removeProduct(event.data.id).subscribe(resulat => {
      notify("Produit correctement supprimé", "success", 500);
    });
  }

  ngOnInit(): void {
   this.clientService.getProduct().subscribe(resultat => {
    this.products = resultat;
   })
  }
}
