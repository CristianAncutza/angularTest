import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'videojuego',
   templateUrl: './videojuego.component.html'
    
})

export class VideoJuegoComponent implements OnInit, DoCheck, OnDestroy{
    
    public nombre:string;
    
    constructor(
        private _route: ActivatedRoute,
        private _router: Router
        //console.log("se cargo mi componente de juegos");
    ){}

    ngOnInit(){
        this._route.params.subscribe((params:Params) =>{
            this.nombre = params.nombre;    
            console.log(params);
        });
        
        //console.log("onInit ejecutado");
    }

    ngDoCheck(){
        //console.log("doCheck ejecutado");
    }

    ngOnDestroy(){
        //console.log("onDestroy ejecutado");
    }
}