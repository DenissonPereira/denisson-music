import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ViolaoComponent } from './components/pages/violao/violao.component';
import { TecladoComponent } from './components/pages/teclado/teclado.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BiografiaComponent } from './components/pages/biografia/biografia.component';
import { CentralComponent } from './components/pages/central/central.component';
import { HeaderComponent } from './components/layout/header/header.component';


import { NgIconsModule } from '@ng-icons/core';
import { bootstrapYoutube, bootstrapSpotify, bootstrapFileMusic, bootstrapApple } from '@ng-icons/bootstrap-icons';
import { simpleDeezer, simpleTidal } from '@ng-icons/simple-icons';
import { RedesComponent } from './components/redes/redes.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { jamNapster } from '@ng-icons/jam-icons';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViolaoComponent,
    TecladoComponent,
    AboutComponent,
    NavbarComponent,
    BiografiaComponent,
    CentralComponent,
    HeaderComponent,
    RedesComponent,
    AgendaComponent
  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({ bootstrapYoutube, bootstrapSpotify, bootstrapFileMusic, bootstrapApple, simpleDeezer, simpleTidal, jamNapster }),
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
