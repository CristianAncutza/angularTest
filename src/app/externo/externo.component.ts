import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { r3JitTypeSourceSpan } from '@angular/compiler';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user:any;
  new_user: { "name": string; "job": string; };
  userId: number;

  constructor(
    private _peticionesService:PeticionesService
  ) { 
    this.userId = 1,
    this.new_user = {
        "name" : "juan",
        "job" : "programador"
    }
  }

  ngOnInit() {
    this._peticionesService.getUser().subscribe(
        result => {
            this.user = result.data;
        },
        error => {
          console.log(<any>error);
        }
    );
  }

  onSubmit(form){
    this._peticionesService.adduser(this.new_user).subscribe(
        response => {
                    console.log(response);
                  },
        error => {
                    console.log(<any>error);
                  }
    )
  }

}
