import { Component } from '@angular/core';
import { RowType, colDefs, defaultColDef } from './grid-col-def';
import { GridActionButtonsComponent } from './grid-action-buttons/grid-action-buttons.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActionExecutionComponent } from './action-execution/action-execution.component';
import { ColDef, GridApi, GridReadyEvent, Module } from '@ag-grid-community/core';
import { AgGridModule } from '@ag-grid-community/angular';
import { CommonModule } from '@angular/common';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

@Component({
  selector: 'grid-main',
  standalone: true,
  imports: [AgGridModule, GridActionButtonsComponent, ActionExecutionComponent, CommonModule ],
  templateUrl: './grid-main.component.html',
  styleUrls: ['./grid-main.component.scss']
})
export class GridMainComponent {
  public readonly themeClass = 'ag-theme-quartz';
  public action = new BehaviorSubject<string|null>(null);
  public modules: Module[] = [ClientSideRowModelModule];
  public context: this;

  private gridApi!: GridApi;

  public rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  public colDefs: ColDef[] = colDefs;
  public defaultColDef: ColDef = defaultColDef;

  constructor() {
    this.context = this;
  }

  public onGridReady(event: GridReadyEvent) {
    this.gridApi = event.api;
  }

  public setAction(action: string|null): void {
    this.action.next(action);
  }

  public actionDone(): void {
    this.action.next(null);
  }

  public get isActionSettled(): Observable<string|null> {
    return this.action.asObservable();
  }

  public get selectedRows(): RowType[]|null {
    return this.gridApi.getSelectedRows();
  }
}
