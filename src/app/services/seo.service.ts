import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta, private titleService: Title) { }

  generateTags(tags) {
    // default values
    tags = { 
      title: 'Angular SSR', 
      content: 'My SEO friendly Angular Component', 
      image: 'https://angularfirebase.com/images/logo.png',
      slug: '',
      ...tags
    }

    // Set a title
    this.titleService.setTitle(tags.title);

    // Set meta tags
    this.meta.addTag({name: 'description', content: 'CMS made in Angular by Nicolás Hardmeier'});
    this.meta.addTag({ name: 'author', content: 'talkingdotnet' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: 'hey' });
    this.meta.updateTag({ name: 'twitter:description', content: 'hey' });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:title', content: 'NG CMS' });
    this.meta.updateTag({ property: 'og:description', content: 'CMS made in Angular by Nicolás Hardmeier' });
    this.meta.updateTag({ property: 'og:image', content: 'jol' });
  }
}
