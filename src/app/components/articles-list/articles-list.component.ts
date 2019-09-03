import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
  animations: [
    trigger('photosAnimation', [
      transition('* => *', [
        query('mat-card',style({ transform: 'translateX(-100%)'})),
        query('mat-card',
          stagger('200ms', [
            animate('600ms', style({ transform: 'translateX(0)'}))
        ]))
      ])
    ])
  ]
})
export class ArticlesListComponent implements OnInit {

  public articles:any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getArticles().subscribe((articlesSnapshot) => {
      this.articles = [];
      articlesSnapshot.forEach((article: any) => {
        this.articles.push({
          id: article.payload.doc.id,
          data: article.payload.doc.data()
        });
      })
    });
  }

}
