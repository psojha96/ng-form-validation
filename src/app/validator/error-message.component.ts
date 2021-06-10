import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'error-message',
    templateUrl: './error-message.component.html',
    styleUrls: ['./error-message.component.scss']
})
export class ErrorMessage {
    public message = 'Invalid Field';

    @Input() fieldForm: any;

    @Input() parentForm: NgForm;

}