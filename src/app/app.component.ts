import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    template: `<h1>Hello world!  {{title}}</h1>
               <second-directive [firstName]="book1.author" [book]="book1.name" [year]="book1.year"></second-directive>
               <second-directive [firstName]="book2.author" [book]="book2.name" [year]="book2.year"></second-directive>
               `
})
export class AppComponent {
    public title = 'This is Angular!';

    public book1 = {author: "Joyce.", name: 'Ulysses', year: '1920'};
    public book2 = {author: "Dole.", name: 'Baskerville', year: '1860'};
    public price = '2';

}
