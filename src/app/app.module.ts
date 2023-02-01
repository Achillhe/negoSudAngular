import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { DxDataGridModule } from 'devextreme-angular';
import { ClientComponent } from './components/client/client.component';
import { ProduitComponent } from './components/produit/produit.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { CommandeComponent } from './components/commande/commande.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ProduitComponent,
    ConnexionComponent,
    CommandeComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
