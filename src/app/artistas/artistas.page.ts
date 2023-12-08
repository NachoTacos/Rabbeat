import { Component, OnInit } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.page.html',
  styleUrls: ['./artistas.page.scss'],
})
export class ArtistasPage implements OnInit {
  listado;
  constructor(private menu: MenuController,private http: HttpClient) { 
    this.http.get("https://apocarpous-tourniqu.000webhostapp.com/consulta.php").subscribe(snap=>
    {console.log(snap);
      this.listado=snap;
    });
  }
  cerrar(){
    this.menu.close('primero');
  }

  ngOnInit() {
  }
  
  }