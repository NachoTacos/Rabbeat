import { Component, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
import {Howl} from 'howler';
export interface Track{
  name: string;
  path: string; 
  duracion: string; 
}
@Component({
  selector: 'app-grow',
  templateUrl: './grow.page.html',
  styleUrls: ['./grow.page.scss'],
})
export class GrowPage {

  playlist: Track[]= [
    {
      name:'Being Hunted',
      path:'./assets/Grow/Being-Hunted.mp3',
      duracion:'4:06'
      
    },
    {
      name:'Drift Away',
      path:'./assets/Grow/Drift-Away.mp3',
      duracion:'4:51'
    },
    {
      name:'End',
      path:'./assets/Grow/End.mp3',
      duracion:'3:22'
    },
    {
      name:'Grow',
      path:'./assets/Grow/Grow.mp3',
      duracion:'5:07'
    },
    {
      name:'Hide',
      path:'./assets/Grow/Hide.mp3',
      duracion:'4:39'
    },
    {
      name:'Hurry, Get Up',
      path:'./assets/Grow/Hurry-Get-Up.mp3',
      duracion:'3:52'
    },
    {
      name:'Move Forward',
      path:'./assets/Grow/Move-Forward.mp3',
      duracion:'5:19'
    },
    {
      name:'Nothing Lasts',
      path:'./assets/Grow/Nothing-Lasts.mp3',
      duracion:'4:51'
    },
    {
      name:'We All Need Something',
      path:'./assets/Grow/We-All-Need-Something.mp3',
      duracion:'6:14'
    },
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