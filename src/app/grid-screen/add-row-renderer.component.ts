// Author: T4professor

import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
    selector: 'app-button-renderer',
    template: `
    <button type="button" class="display--flex btn btn-primary" (click)="onClick($event)">Add Package</button>
    `
})

export class AddButtonRenderer implements ICellRendererAngularComp {

    public params: any;

    agInit(params: any): void {
        this.params = params;
    }

    refresh(): boolean {
        return true;
    }

    onClick(event: any) {
        if (this.params.onClick instanceof Function) {
            // put anything into params u want pass into parents component
            const params = {
                event: event,
                rowData: this.params.node.data
                // ...something
            }
            this.params.onClick(params);

        }
    }
}