import { Component, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
import {Howl} from 'howler';
export interface Track{
  name: string;
  path: string; 
  duracion: string; 
}

@Component({
  selector: 'app-daltonico',
  templateUrl: './daltonico.page.html',
  styleUrls: ['./daltonico.page.scss'],
})
export class DaltonicoPage  {

  playlist: Track[]= [
    {
      name:'Amenaza',
      path:'./assets/DaltonicoDelux/Amenaza.mp3',
      duracion:'3:18'
      
    },
    {
      name:'Cambiante',
      path:'./assets/DaltonicoDelux/Cambiante.mp3',
      duracion:'3:08'
    },
    {
      name:'Ciencia de la lluvia',
      path:'./assets/DaltonicoDelux/Ciencia-De-La-Lluvia.mp3',
      duracion:'3:50'
    },
    {
      name:'Cobarde',
      path:'./assets/DaltonicoDelux/Cobarde.mp3',
      duracion:'4:16'
    },
    {
      name:'Como le llevo serenata',
      path:'./assets/DaltonicoDelux/Como-le-llevo-serenata.mp3',
      duracion:'3:21'
    },
    {
      name:'Dulce soledad',
      path:'./assets/DaltonicoDelux/Dulce-Soledad.mp3',
      duracion:'3:42'
    },
    {
      name:'Eliza mi hortaliza',
      path:'./assets/DaltonicoDelux/Eliza-Mi-Hortaliza.mp3',
      duracion:'3:55'
    },
    {
      name:'Enemigo',
      path:'./assets/DaltonicoDelux/Enemigo.mp3',
      duracion:'3:52'
    },
    {
      name:'Intruso',
      path:'./assets/DaltonicoDelux/Intruso.mp3',
      duracion:'3:27'
    },
    {
      name:'La duda',
      path:'./assets/DaltonicoDelux/La Duda.mp3',
      duracion:'3:12'
    },
    {
      name:'Madrugada',
      path:'./assets/DaltonicoDelux/Madrugada.mp3',
      duracion:'2:50'
    },
    {
      name:'Visita',
      path:'./assets/DaltonicoDelux/Visita.mp3',
      duracion:'3:42'
    },
    {
      name:'Sanguijuela',
      path:'./assets/DaltonicoDelux/Sanguijuela.mp3',
      duracion:'3:04'
    },
    {
      name:'Tu yugular dulce hogar',
      path:'./assets/DaltonicoDelux/Tu-Yugular-Dulce-Hogar.mp3',
      duracion:'2:53'
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