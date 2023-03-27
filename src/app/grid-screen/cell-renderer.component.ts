import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'simple-component',
  template: `
    <span
      [style.borderLeft]="'10px solid ' + params.value"
      [style.paddingLeft]="'5px'"
      >{{ params.value ??'select &darr;' }}</span
    >
  `,
})
export class CellRenderer implements ICellRendererAngularComp {
  public params!: ICellRendererParams;

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh() {
    return false;
  }
}