import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
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
