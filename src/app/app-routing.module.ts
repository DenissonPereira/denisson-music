import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViolaoComponent } from './components/violao/violao.component';
import { TecladoComponent } from './components/teclado/teclado.component';
import { AboutComponent } from './components/about/about.component';
import { BiografiaComponent } from './components/biografia/biografia.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'violao', component: ViolaoComponent},
  {path: 'teclado', component: TecladoComponent},
  {path: 'biografia', component: BiografiaComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
