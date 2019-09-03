import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { FormGroup , FormGroupDirective, NgForm, FormBuilder,Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-backoffice-articles',
  templateUrl: './backoffice-articles.component.html',
  styleUrls: ['./backoffice-articles.component.scss']
})
export class BackofficeArticlesComponent implements OnInit {
  form:FormGroup;
  articles: any;

 constructor(private dataService : DataService, private formBuilder: FormBuilder) { }

 ngOnInit(){
  this.dataService.getArticles().subscribe((articlesSnapshot) => {
    this.articles = [];
    articlesSnapshot.forEach((article: any) => {
      this.articles.push({
        id: article.payload.doc.id,
        data: article.payload.doc.data()
      });
    })
  });
  this.buildForm();
 }
 public buildForm(){
   this.form = this.formBuilder.group({
     title:['', [Validators.required,Validators.minLength(2)]],
     category:['', [Validators.required, Validators.minLength(2)]],
     tags:['', [Validators.required]],
     content:['', [Validators.required, Validators.minLength(2)]],
     image:[''] 
   });
   
}
public onSubmit(){

 if (this.form.valid) {
   console.log(this.form.value);
   //this.dataService.addArticle(this.form.value);
 } else {
   console.log('form is not valid, cannot save to database')

 }

}
 
}





