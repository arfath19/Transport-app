import { Component } from '@angular/core';
import { ColDef, ISelectCellEditorParams } from 'ag-grid-community';
import { AddButtonRenderer } from './add-row-renderer.component';
import { CellRenderer } from './cell-renderer.component';
import { RowData } from './grid-screen.models';
@Component({
  selector: 'app-grid-screen',
  templateUrl: './grid-screen.component.html',
  styleUrls: ['./grid-screen.component.scss']
})
export class GridScreenComponent {

  public options = ['Bag','Jar','Container','Boxes']

  public columnDefs = [
    {
      headerName: 'Package',
      field: 'package',
      spanHeaderHeight: true,
      flex: 1,
      cellRendererSelector: (params: any) => {
        return {
          component: params.data?.addRow ? AddButtonRenderer : undefined,
          params: {
            onClick: this.onBtnClick1.bind(this),
          }
        }
      },
      editable: (params: any) => !params.data?.addRow
    },
    {
      headerName: 'Description (Said to contain)',
      spanHeaderHeight: true,
      field: 'description',
      flex: 2,
      children: [
        { flex: 1 },
        {
          headerName: 'Dropdown',
          field: 'dropdown',
          cellRendererSelector: (params: any) => {
            return {
              component: params.data?.addRow ? undefined : CellRenderer
            }
          },
          cellEditorSelector: (params: any) => { return { component: params.data?.addRow ? undefined : 'agSelectCellEditor' } },
          cellEditorParams: {
            values: this.options,
          } as ISelectCellEditorParams,
          onCellValueChanged:(params:any)=>console.log(params)
        }
      ]
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

  public rowData: RowData[] = [
    { package: '', description: '', weight: '', addRow: true }
  ];

  public onBtnClick1(e: any) {
    const rowData = this.rowData.slice();
    rowData.splice(rowData.length - 1, 0,
      { package: '', description: '', weight: '' }
    );
    this.rowData = [...rowData]
    console.log(rowData)
  }

  public defaultColDef: ColDef = {
    sortable: false,
    suppressMovable: true,
    resizable: false,
    filter: false,
    editable:(params:any)=>!params.data?.addRow ,
    singleClickEdit: true,
  };
}
