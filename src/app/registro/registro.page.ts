import { Component, OnInit } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  email:string;
  user:string;
  contrasena:string;
  id:number;
  miModelo: any;

  constructor(
    private http: HttpClient,
     public navCtrl: NavController,
      public alertCtrl: AlertController,
      private menu: MenuController
      ) 
      {
       }


  ngOnInit() {
  }

  registrar(){
    this.http.get("https://apocarpous-tourniqu.000webhostapp.com/guardar.php?user="+this.user
    +"&email="+this.email+"&contrasena="+this.contrasena).subscribe(snap=>
    {console.log(snap);
      this.presentAlert();
     });
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: 'Tu informacion',
      message: 'Es correcta',
      buttons: ['Oke']

    });

   
   
    await alert.present();
  }
}