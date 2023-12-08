import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-anadirartista',
  templateUrl: './anadirartista.page.html',
  styleUrls: ['./anadirartista.page.scss'],
})
export class AnadirartistaPage  {
  nom_art:string;
  ig:string;
  spotify:string;
  descripcion:string;
  @Output() onChange: EventEmitter<File> = new EventEmitter<File>();

  constructor(private http: HttpClient) { }
anadir(){
  this.http.get("https://apocarpous-tourniqu.000webhostapp.com/insertar.php?nom_art="+this.nom_art
    +"&ig="+this.ig+"&spotify="+this.spotify+"&descripcion="+this.descripcion).subscribe(snap=>
    {console.log(snap);

});
}
}
