import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements AfterViewInit, OnDestroy {
  @ViewChild('slider') sliderElement!: ElementRef<HTMLElement>;

  url = 'https://mercado-pago-alkemi.vercel.app/checkout';

  currentSlide: number = 0;
  dotHelper: Array<Number> = [];
  slider: KeenSliderInstance | null = null;

  ngAfterViewInit() {

    setTimeout(()=>{

      this.slider = new KeenSlider(
        this.sliderElement.nativeElement,
        {
          initial: this.currentSlide,
          loop: true,
          slideChanged: s => {
            this.currentSlide = s.track.details.rel;
          },
        },
        [
          slider => {
            let timeout:any;
            let mouseOver = false;
            function clearNextTimeout() {
              clearTimeout(timeout);
            }
            function nextTimeout() {
              clearTimeout(timeout);
              if (mouseOver) return;
              timeout = setTimeout(() => {
                slider.next();
              }, 3000);
            }
            slider.on('created', () => {
              slider.container.addEventListener('mouseover', () => {
                mouseOver = true;
                clearNextTimeout();
              });
              slider.container.addEventListener('mouseout', () => {
                mouseOver = false;
                nextTimeout();
              });
              nextTimeout();
            });
            slider.on('dragStarted', clearNextTimeout);
            slider.on('animationEnded', nextTimeout);
            slider.on('updated', nextTimeout);
          },
        ]
      );
  
      this.dotHelper = [...Array(this.slider.track.details.slides.length).keys()];
    })
  }

  prev() {
    this.slider?.prev();
  }

  next() {
    this.slider?.next();
  }

  moveTo(n: number) {
    this.slider?.moveToIdx(n);
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }

  constructor() {}
}
