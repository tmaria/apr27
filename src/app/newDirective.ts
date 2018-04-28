import { Component, Input } from '@angular/core';

// Define second directive.
@Component({
    selector: 'second-directive',
    template: `<h3>This is the second directive! --> {{book}} by {{firstName}} published in {{year}}</h3>
    <third-directive [price]="price"></third-directive>`,
})
// This is really just a component.
export class NewDirective {
    @Input() firstName: string;
    @Input() book: string;
    @Input() year: string;
}
