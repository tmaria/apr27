import { Component } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';


// Define third directive.
@Component({
    // Selector uses lower case with hyphens.
    selector: 'third-directive',
    template: `<h3>Price:  {{price}}</h3>`,
})
export class ThirdDirective {
    @Input()
    price: string;
}

