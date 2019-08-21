import { Injectable} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
    public zapatillas : Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Adidas', 'superstar','rojo', 40 , true),
            new Zapatilla('Nike', 'runner','negra', 70 , true),
            new Zapatilla('Reebok', 'jump','verde', 140 , false)
        ];
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}
