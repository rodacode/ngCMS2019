import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn',  [
      state('in', style({ opacity: 0 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate(600)
      ]),
      transition('* => void', [
        animate(600, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.generateTags({
      title: 'NG CMS',
      content: 'My SEO friendly Angular Component'
    })
  }

}
