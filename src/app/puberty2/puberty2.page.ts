import { Component, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
import {Howl} from 'howler';
export interface Track{
  name: string;
  path: string; 
  duracion: string; 
}
@Component({
  selector: 'app-puberty2',
  templateUrl: './puberty2.page.html',
  styleUrls: ['./puberty2.page.scss'],
})
export class Puberty2Page {

  playlist: Track[]= [
    {
      name:'Happy',
      path:'./assets/puberty2/Happy.mp3',
      duracion:'3:40'
      
    },
    {
      name:'A Burning Hill',
      path:'./assets/puberty2/A-Burning-Hill.mp3',
      duracion:'1:49'
    },
    {
      name:'A Loving Feeling',
      path:'./assets/puberty2/A-Loving-Feeling.mp3',
      duracion:'1:32'
    },
    {
      name:'Crack Baby',
      path:'./assets/puberty2/Crack-Baby.mp3',
      duracion:'4:52'
    },
    {
      name:'Dan The Dancer',
      path:'./assets/puberty2/Dan-the-Dancer.mp3',
      duracion:'2:25'
    },
    {
      name:'Fireworks',
      path:'./assets/puberty2/Fireworks.mp3',
      duracion:'2:38'
    },
    {
      name:'I Bet On Losing Dogs',
      path:'./assets/puberty2/dogs.mp3',
      duracion:'2:50'
    },
    {
      name:'My Bodys Made of Crushed Little Stars',
      path:'./assets/puberty2/My-Bodys-Made-of-Crushed-Little-Stars.mp3',
      duracion:'1:56'
    },
    {
      name:'Once More To See You',
      path:'./assets/puberty2/Once-More-to-See-You.mp3',
      duracion:'3:01'
    },
    {
      name:'Thursday Girl',
      path:'./assets/puberty2/Thursday-Girl.mp3',
      duracion:'3:08'
    },
    {
      name:'Your Best American Girl',
      path:'./assets/puberty2/Your-Best-American-Girl.mp3',
      duracion:'3:32'
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