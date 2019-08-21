//modulos del router de angular
import{ModuleWithProviders} from '@angular/core';
import{Routes, RouterModule} from '@angular/router';

//components
import{ ZapatillasComponent} from './zapatillas.component';
import{ VideoJuegoComponent} from '../videojuego/videojuego.component';
import { HomeComponent } from '../home/home.component';
import { Zapatilla } from '../models/zapatilla';
import {ExternoComponent} from '../externo/externo.component';

//array de rutas
const appRoutes: Routes = [
    {path:'', component:HomeComponent},
    {path:'zapatillas', component: ZapatillasComponent},
    {path:'videojuegos', component: VideoJuegoComponent},
    {path:'videojuegos/:nombre', component: VideoJuegoComponent},
    {path:'externo', component: ExternoComponent},
    //ruta 404
    {path:'**' , component:HomeComponent}
];

//exporta el modulo del router
export const appRoutingProvider: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);