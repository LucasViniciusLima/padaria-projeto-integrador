import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

import { routing } from './app.routing';
import { environment } from 'src/environments/environment';
import { PedidosComponent } from './pedidos/pedidos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponent } from './topbar/topbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    PedidosComponent,
    NavbarComponent,
    TopbarComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
