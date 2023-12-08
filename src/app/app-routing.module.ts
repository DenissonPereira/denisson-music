import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ViolaoComponent } from './components/pages/violao/violao.component';
import { TecladoComponent } from './components/pages/teclado/teclado.component';
import { AboutComponent } from './components/pages/about/about.component';
import { BiografiaComponent } from './components/pages/biografia/biografia.component';
import { CentralComponent } from './components/pages/central/central.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'violao', component: ViolaoComponent},
  {path: 'teclado', component: TecladoComponent},
  {path: 'biografia', component: BiografiaComponent},
  {path: 'central', component: CentralComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
