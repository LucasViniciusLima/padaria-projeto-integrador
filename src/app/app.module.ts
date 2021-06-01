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
import { PedidoDetalheComponent } from './pedido-detalhe/pedido-detalhe.component';
import { ConfigMessagesComponent } from './config-messages/config-messages.component';
import { FormsModule } from '@angular/forms';
import { ModelNavigationComponent } from './model-navigation/model-navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartQuantidadeComponent } from './dashboard/chart-quantidade/chart-quantidade.component';
import { ChartStatusPedindgComponent } from './dashboard/chart-status-pedindg/chart-status-pedindg.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    PedidosComponent,
    NavbarComponent,
    PedidoDetalheComponent,
    ConfigMessagesComponent,
    ModelNavigationComponent,
    DashboardComponent,
    ChartQuantidadeComponent,
    ChartStatusPedindgComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    NgApexchartsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
