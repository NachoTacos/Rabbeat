import { Component, OnInit } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  windowWidth:string;
  showSplash: boolean=true;
  
  email:string;
  user:string;
  contrasena:string;
  Id:number;
  e;
 
  constructor(
    private http: HttpClient,
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
     private router: Router,
     private menu: MenuController
     ) { 
    
  }

  logear(){

    this.http.get("https://apocarpous-tourniqu.000webhostapp.com/login.php?user="+this.user+"&contrasena="+this.contrasena).subscribe(snap=>
    {console.log(snap);
      this.e=snap;
      if(this.e=='si'){
        this.router.navigate(['/home']);
      }else{
        this.presentAlert(); 
        this.router.navigate(['/registro']);
        
      }
     });
     
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: 'Tu informacion',
      message: 'Es incorrecta, por favor crea una cuenta',
      buttons: ['Ok']

    });

   
   
    await alert.present();
  }
  ngOnInit():void {
    //console-log("hello");
    setTimeout(()=>{
      this.windowWidth='-'+window.innerWidth+'px';
    },5000);
  }
}
