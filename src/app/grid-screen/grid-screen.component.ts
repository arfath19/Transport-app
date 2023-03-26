import { Component } from '@angular/core';
import { ColDef,  } from 'ag-grid-community';

@Component({
  selector: 'app-grid-screen',
  templateUrl: './grid-screen.component.html',
  styleUrls: ['./grid-screen.component.scss']
})
export class GridScreenComponent {
  public columnDefs = [
    {
      headerName: 'Package',
      field: 'package',
      editable: true,
      spanHeaderHeight: true,
      flex: 1,

    },
    {
      headerName: 'Description (Said to contain)',
      spanHeaderHeight: true,
      field: 'description',
      flex: 2,
    },
    {
      headerName: 'Weight', field: 'weight',
      children: [
        {
          headerName: 'Charged',
          field: 'charged',
          flex: 1,
        },
        {
          headerName: 'Actual',
          field: 'actual',
          flex: 1,
        }
      ]
    }
  ];

  public rowData = [
    { package: 'Toyota', description: 'Celica', weight: 35000 },
    { package: 'Ford', description: 'Mondeo', weight: 32000 },
    { package: 'Porsche', description: 'Boxster', weight: 72000 }
  ];

  
  public defaultColDef: ColDef = {
    sortable: false,
    suppressMovable:true,
    resizable: false,
    filter: false,

  };
}
