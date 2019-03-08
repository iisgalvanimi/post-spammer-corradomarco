import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
articles = new Array<string>();


  constructor() {}
  
  fuunzione(spamText,b){
    console.log(`spamText: ${spamText.value} and spamNum: ${spamText.value}`);
   let  spam= b(b.value);
   for(let i:number=0;i<spam;i++){
     this.articles.push(spamText.value);
   }
  }

  ngOnInit() {
  }

}
