import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rtitle',
  templateUrl: './rtitle.component.html',
  styleUrls: ['./rtitle.component.scss']
})
export class RtitleComponent implements OnInit {

  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
