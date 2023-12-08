import { Component, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
import {Howl} from 'howler';
export interface Track{
  name: string;
  path: string; 
  duracion: string; 
}

@Component({
  selector: 'app-madrileno',
  templateUrl: './madrileno.page.html',
  styleUrls: ['./madrileno.page.scss'],
})
export class MadrilenoPage{
  playlist: Track[]= [
    {
      name:'CAMBIA!',
      path:'./assets/Elmadrileno/Cambia.mp3',
      duracion:'3:08'
      
    },
    {
      name:'Comerte Entera',
      path:'./assets/Elmadrileno/Comerte-Entera.mp3',
      duracion:'3:06'
    },
    {
      name:'Demasiadas Mujeres',
      path:'./assets/Elmadrileno/Demasiadas-Mujeres.mp3',
      duracion:'2:34'
    },
    {
      name:'Hong Kong',
      path:'./assets/Elmadrileno/Hong-Kong.mp3',
      duracion:'3:23'
    },
    {
      name:'Ingobernable',
      path:'./assets/Elmadrileno/Ingobernable.mp3',
      duracion:'3:07'
    },
    {
      name:'Los Tontos',
      path:'./assets/Elmadrileno/Los-Tontos.mp3',
      duracion:'3:12'
    },
    {
      name:'Muriendo De Envidia',
      path:'./assets/Elmadrileno/Muriendo-De-Envidia.mp3',
      duracion:'3:02'
    },
    {
      name:'Nominao',
      path:'./assets/Elmadrileno/Nominao.mp3',
      duracion:'2:56'
    },
    {
      name:'Nunca Estoy',
      path:'./assets/Elmadrileno/Nunca-estoy.mp3',
      duracion:'2:42'
    },
    {
      name:'Olvidar',
      path:'./assets/Elmadrileno/Olvidar.mp3',
      duracion:'3:09'
    },
    {
      name:'Parteme la cara',
      path:'./assets/Elmadrileno/Parteme-la-cara.mp3',
      duracion:'2:47'
    },
    {
      name:'Tu me dejaste de querer',
      path:'./assets/Elmadrileno/Tu-me-dejaste-de-querer.mp3',
      duracion:'3:18'
    },
    {
      name:'Un-veneno',
      path:'./assets/Elmadrileno/Un-Veneno.mp3',
      duracion:'3:13'
    },
    {
      name:'Te olvidaste',
      path:'./assets/Elmadrileno/Te-Olvidaste.mp3',
      duracion:'3:07'
    }
  ];

  activeTrack:Track = null;
  player: Howl = null;
  isPlaying = false;
  progress = 0;
  @ViewChild('range', {static:false}) range: IonRange;
  constructor() {}

start(track: Track){
  if (this.player){
    this.player.stop();
  }
  this.player = new Howl ({
    src:[track.path],
    html5: true,
    onplay:()  =>{
      //console.log('onplay');
      this.isPlaying = true;
      this.activeTrack = track;
      this.updateProgress();
    },
    onend: ()  => {
      console.log('onend');
    }
  });
  this.player.play();

}

togglePlayer(pause){
this.isPlaying = !pause;
if (pause) {
this.player.pause();
}
else{
this.player.play();
 }
}

next(){
  let index = this.playlist.indexOf (this.activeTrack);
  if (index != this.playlist.length - 1){
    this.start(this.playlist[index + 1]);
  }else{
    this.start(this.playlist[0]);
  }

}
prev() {
  let index = this.playlist.indexOf(this.activeTrack);
  if (index > 0){
    this.start(this.playlist[index - 1]);
  } else {
    this.start(this.playlist[this.playlist.length - 1]);
  }
}
seek(){
  let newValue = +this.range.value;
  let duration = this.player.duration();
  this.player.seek (duration * ( newValue / 100));

}
updateProgress(){
let seek = this.player.seek();
this.progress = (seek / this.player.duration()) * 100 || 0;
setTimeout(()=>{
this.updateProgress();
}, 1000)
}

}