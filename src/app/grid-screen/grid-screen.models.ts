export interface RowData {
    package: string;
     description:DescriptionItem ;
     actual: string;
     charged: string;
     addRow?: boolean 
}

export interface DescriptionItem{
    text:string;
    dropdown:string
}