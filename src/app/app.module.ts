import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ViolaoComponent } from './components/violao/violao.component';
import { TecladoComponent } from './components/teclado/teclado.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BiografiaComponent } from './components/biografia/biografia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViolaoComponent,
    TecladoComponent,
    AboutComponent,
    NavbarComponent,
    BiografiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
