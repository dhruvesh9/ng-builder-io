import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BuilderBlock } from '@builder.io/angular';

interface NameValueTuple {
  name: string;
  code: string;
}
@Component({
  selector: 'app-simple-component',
  templateUrl: './simple-color-changer.component.html',
  styleUrls: ['./simple-color-changer.component.css'],
})
export class SimpleColorChangerComponent implements OnInit {
  colors: NameValueTuple[] | undefined;

  selectedColor: NameValueTuple | undefined;

  @ViewChild('colorChangeDiv') colorChangeDiv!: ElementRef;

  ngOnInit() {
    this.colors = [
      { name: 'Dusty Rose', code: '#C49A9E' },
      { name: 'Cool Gray', code: '#B4B7B9' },
      { name: 'Soft Lavender', code: '#B4A0E6' },
      { name: 'Warm Beige', code: '#D9C4A7' },
    ];
  }

  changeColor() {
    if (this.selectedColor?.code) {
      this.colorChangeDiv.nativeElement.style.backgroundColor =
        this.selectedColor?.code;
    }
  }
}

BuilderBlock({
  tag: 'app-simple-component', // <-- use the component selector here
  name: 'Simple Color Changer Component',
  inputs: [
    {
      name: 'colorOptions', // <-- this name matches the Angular @Input() above
      type: 'array',
    },
  ],
})(SimpleColorChangerComponent);
