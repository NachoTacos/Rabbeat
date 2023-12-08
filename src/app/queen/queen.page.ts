import { Component, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
import {Howl} from 'howler';
export interface Track{
  name: string;
  path: string; 
  duracion: string; 
}
@Component({
  selector: 'app-queen',
  templateUrl: './queen.page.html',
  styleUrls: ['./queen.page.scss'],
})
export class QueenPage {

  playlist: Track[]= [
    {
      name:'Bigmouth Strikes Again',
      path:'./assets/thequeen/bigmouth.mp3',
      duracion:'3:39'
      
    },
    {
      name:'Cemetry Gates',
      path:'./assets/thequeen/Cemetry-Gates.mp3',
      duracion:'3:06'
    },
    {
      name:'Frankly Mr Shanlky',
      path:'./assets/thequeen/Frankly-Mr-Shankly.mp3',
      duracion:'3:41'
    },
    {
      name:'I Know Its Over',
      path:'./assets/thequeen/over.mp3',
      duracion:'3:49'
    },
    {
      name:'Never Had No One Never',
      path:'./assets/thequeen/never.mp3',
      duracion:'3:49'
    },
    {
      name:'Some Girls Are Bigger Than Others',
      path:'./assets/thequeen/Some-Girls-Are-Bigger-Than-Others.mp3',
      duracion:'3:49'
    },
    {
      name:'The Boy With The Thorn In His Side',
      path:'./assets/thequeen/thorn.mp3',
      duracion:'3:49'
    },
    {
      name:'There Is a Light That Never Goes Out',
      path:'./assets/thequeen/There-Is-a-Light-That-Never-Goes-Out.mp3',
      duracion:'3:49'
    },
    {
      name:'Vicar in a Tutu',
      path:'./assets/thequeen/Vicar-in-a-Tutu.mp3',
      duracion:'3:49'
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
