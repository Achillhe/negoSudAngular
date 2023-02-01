import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './components/client/client/client.component';
import { ProduitComponent } from './components/produit/produit/produit.component';
import { ConnexionComponent } from './components/connexion/connexion/connexion.component';
import { CommandeComponent } from './components/commande/commande/commande.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ProduitComponent,
    ConnexionComponent,
    CommandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
