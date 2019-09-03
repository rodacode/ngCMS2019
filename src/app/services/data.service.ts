import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private db: AngularFirestore
  ) { }

  //Create Article
  public createArticle(data: {nombre: string, url: string}){
    return this.db.collection('articles').add(data);
  }
  //Get Article
  public getArticle(id: string) {
    return this.db.collection('articles').doc(id).valueChanges();
  }
  //Get Articles
  public getArticles() {
    return this.db.collection('articles').snapshotChanges();
  }
  //Update Article
  public updateArticle(documentId: string, data: any) {
    return this.db.collection('articles').doc(documentId).set(data);
  }
}
