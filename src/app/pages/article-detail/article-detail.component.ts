import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { tap, startWith, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
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
export class ArticleDetailComponent implements OnInit {
  article: any;

  constructor(
    private dataService: DataService,
    private seo: SeoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.dataService.getArticle(id).subscribe(data => this.article = data)
    this.seo.generateTags({
      title: 'NG CMS',
      content: 'My SEO friendly Angular Component'
    })
  }
}

