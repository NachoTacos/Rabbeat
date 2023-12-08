import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';;

@Component({
  selector: 'app-eliminarartista',
  templateUrl: './eliminarartista.page.html',
  styleUrls: ['./eliminarartista.page.scss'],
})
export class EliminarartistaPage implements OnInit {
nom_art:string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
eliminar(){
  this.http.get("https://apocarpous-tourniqu.000webhostapp.com/eliminar.php?nom_art="+this.nom_art).subscribe(snap=>
  {console.log(snap);
});
}
}
