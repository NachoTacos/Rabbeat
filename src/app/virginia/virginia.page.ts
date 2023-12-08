import { Component, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
import {Howl} from 'howler';
export interface Track{
  name: string;
  path: string; 
  duracion: string; 
}
@Component({
  selector: 'app-virginia',
  templateUrl: './virginia.page.html',
  styleUrls: ['./virginia.page.scss'],
})
export class VirginiaPage {

  playlist: Track[]= [
    {
      name:'backstabber',
      path:'./assets/virginia/backstabber.mp3',
      duracion:'3:39'
      
    },
    {
      name:'delilah',
      path:'./assets/virginia/delilah.mp3',
      duracion:'3:06'
    },
    {
      name:'dirty business',
      path:'./assets/virginia/dirty-business.mp3',
      duracion:'3:41'
    },
    {
      name:'first orgasm',
      path:'./assets/virginia/first-orgasm.mp3',
      duracion:'3:49'
    },
    {
      name:'mandy goes to medical school',
      path:'./assets/virginia/mandy-goes-to-med-school.mp3',
      duracion:'3:49'
    },
    {  
      name:'me & the minibar',
      path:'./assets/virginia/me-&-the-minibar.mp3',
      duracion:'3:49'
    },
    {
      name:'modern-moonlight',
      path:'./assets/virginia/modern-moonlight.mp3',
      duracion:'3:49'
    },
    {
      name:'mrs-o',
      path:'./assets/virginia/mrs-o.mp3',
      duracion:'3:49'
    },
    {
      name:'my alcoholic friends',
      path:'./assets/virginia/my-alcoholic-friends.mp3',
      duracion:'3:49'
    },
    {
      name:'necessary evil',
      path:'./assets/virginia/necessary-evil.mp3',
      duracion:'3:49'
    },
    {
      name:'sex changes',
      path:'./assets/virginia/sex-changes.mp3',
      duracion:'3:49'
    },
    {
      name:'shores of california',
      path:'./assets/virginia/shores-of-california.mp3',
      duracion:'3:49'
    },
    {
      name:'sing',
      path:'./assets/virginia/sing.mp3',
      duracion:'3:49'
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

