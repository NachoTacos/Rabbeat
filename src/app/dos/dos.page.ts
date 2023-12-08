import { Component, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
import {Howl} from 'howler';
export interface Track{
  name: string;
  path: string; 
  duracion: string; 
}
@Component({
  selector: 'app-dos',
  templateUrl: './dos.page.html',
  styleUrls: ['./dos.page.scss'],
})
export class DosPage {

  playlist: Track[]= [
    {
      name:'Baptism',
      path:'./assets/2/Baptism.mp3',
      duracion:'4:11'
      
    },
    {
      name:'Doe Deer',
      path:'./assets/2/Doe-Deer.mp3',
      duracion:'1:35'
    },
    {
      name:'Fainting Spells',
      path:'./assets/2/Fainting-Spells.mp3',
      duracion:'2:41'
    },
    {
      name:'I Am Made Of Chalk',
      path:'./assets/2/I-Am-Made-Of-Chalk.mp3',
      duracion:'3:09'
    },
    {
      name:'Intimate',
      path:'./assets/2/Intimate.mp3',
      duracion:'4:44'
    },
    {
      name:'Not In Love',
      path:'./assets/2/Not-In-Love.mp3',
      duracion:'3:47'
    },
    {
      name:'Pap Smear',
      path:'./assets/2/Pap-Smear.mp3',
      duracion:'3:41'
    },
    {
      name:'Suffocation',
      path:'./assets/2/Suffocation.mp3',
      duracion:'4:00'
    },
    {
      name:'Vietnam',
      path:'./assets/2/Vietnam.mp3',
      duracion:'5:06'
    },
    {
      name:'Year Of Silence',
      path:'./assets/2/Year-Of-Silence.mp3',
      duracion:'4:52'
    },
    {
      name:'Birds',
      path:'./assets/2/Birds.mp3',
      duracion:'2:29'
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
