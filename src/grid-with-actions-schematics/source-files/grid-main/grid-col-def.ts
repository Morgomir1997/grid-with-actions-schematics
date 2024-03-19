import { ColDef } from '@ag-grid-community/core';
import { GridActionButtonsComponent } from './grid-action-buttons/grid-action-buttons.component';

export type RowType = {
  make: string,
  model: string,
  price: number,
}

export const colDefs: ColDef[] = [
  { field: 'make' },
  { field: 'model' },
  { field: 'price' },
  { field: 'electric' },
  { field: 'actions', cellRenderer: GridActionButtonsComponent}
];

export const defaultColDef: ColDef = {
  sortable: true,
  filter: true,
}