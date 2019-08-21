import { Component, OnInit } from '@angular/core';
import {Zapatilla} from '../models/zapatilla';
import {ZapatillaService} from '../services/zapatillas.service';


@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css'],
  providers:[ZapatillaService]
})
export class ZapatillasComponent implements OnInit {

  public mostrar_items:boolean = true;
  public zapatillas:Array<Zapatilla>; 
  public mi_marca:string; 
  public marcas:string[];

  ocultarItems(value){
    this.mostrar_items = value;
  }

  constructor(
      private _zapatillaService: ZapatillaService

  ) {     
    this.mi_marca = "Fila";
    this.marcas = new Array();

  }

  ngOnInit() {
    this.zapatillas = this._zapatillaService.getZapatillas();

    this.getMarcas();
  }

  getMarcas(){
    this.zapatillas.forEach((zapatilla, index) =>{
        if(this.marcas.indexOf(zapatilla.marca) <0) {
            this.marcas.push(zapatilla.marca) ;
        }
    });
  }

  getMarca(){
    alert(this.mi_marca);
  }

  addMarca(){
    this.marcas.push(this.mi_marca);
  }

  borrarMarca(index){
    //delete this.marcas[index];
    this.marcas.splice(index, 1);
  }
}
