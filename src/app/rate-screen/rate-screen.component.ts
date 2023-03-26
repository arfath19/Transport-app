import { Component } from '@angular/core';
import { ColDef, } from 'ag-grid-community';

@Component({
  selector: 'app-rate-screen',
  templateUrl: './rate-screen.component.html',
  styleUrls: ['./rate-screen.component.scss']
})
export class RateScreenComponent {


  public columnDefs = [
    {
      headerName: 'Rate',
      field: 'rate',
      flex: 1,
      spanHeaderHeight: true,
      headerClass: 'show-input'
    },
    {
      headerName: 'Amount',
      headerClass: ['text-center', 'show-input'],
      children: [
        {
          headerName: 'Rs. p.',
          field: 'rs',
          flex: 1,
          editable: true,
          singleClickEdit: true,
          cellClass: 'input-feel',
          headerClass: 'show-input'
        },
        {
          headerName: ' ',
          field: ' ',
          flex: 1,
          headerClass: 'show-input',
        }
      ]
    }
  ];

  public rowData = [
    { rate: 'Freight', rs: '', },
    { rate: 'Hamali', rs: '', },
    { rate: 'Sur. Ch.', rs: '', },
    { rate: 'D.D', rs: '', },
    { rate: 'Bilty Ch.', rs: '', },
    { rate: 'Total', rs: '', },
    { rate: 'GST', rs: '', },
    { rate: 'G.TOTAL', rs: '', },
    { rate: 'Advance', rs: '', },
    { rate: 'Balance', rs: '', },


  ];

  public defaultColDef: ColDef = {
    sortable: false,
    suppressMovable: true,
    resizable: false,
    filter: false,
  };
}
