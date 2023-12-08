import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {

  id_artista: any;
  listado;
  nom_art: string;
  spotify: string;
  ig: string;
  descripcion: string;
  d:any={
    nom_art:'',
    id_artista:'',
    spotify:'',
    ig:'',
    descripcion:''
  
  }

  constructor(private router: Router,private http:HttpClient,public navCtrl: NavController, public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  buscar(){
    this.http.get("http://localhost/buscar.php?id_artista="+
    this.id_artista).subscribe(snap=>{
      console.log(snap);
      this.listado=snap;
    });
  }

  actualizar(): void {
    this.http.get("http://localhost/editar.php?id_artista="+
    this.id_artista+"&nom_art="+this.nom_art+"&ig"+this.ig+"&spotify"+this.spotify+"&descripcion"+this.descripcion).subscribe(snap=>{
      console.log(snap);
      this.presentAlert();
    });
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'el artista se ha modificado correctamente',
      buttons: ['OK']

    });

    await alert.present();
  }

}