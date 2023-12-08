import { Component, ViewChild } from '@angular/core';
import { IonSlides, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonSlides) slides: IonSlides;
  slidePrev() {
    this.slides.slidePrev();
  }
  slideNext() {
    this.slides.slideNext();
  }

  constructor(private menu: MenuController) { }

  option={
    slidesPreView:1.5,
    centeredSlides:true,
    loop :true,
    spaceBetween:10,
    autoplay:false,
  }
  ngOnInit() {
  }

}