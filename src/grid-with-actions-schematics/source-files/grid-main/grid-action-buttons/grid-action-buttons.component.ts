import { Component, EventEmitter, Output } from '@angular/core';
import { RowType } from '../grid-col-def';
import { CommonModule } from '@angular/common';
import { actionTitle } from '../action-type';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';
import { ICellRendererParams } from '@ag-grid-community/core';

@Component({
  selector: 'grid-action-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-action-buttons.html',
  styleUrls: ['./grid-action-buttons.scss']
})
export class GridActionButtonsComponent implements ICellRendererAngularComp {
  public params!: ICellRendererParams;
  public row!: RowType;
  public isInRowActions: boolean = false;

  public actionTitle = actionTitle;

  @Output()
  public setBulkAction = new EventEmitter<string>();

  public agInit(params: ICellRendererParams): void {
    this.params = params;
    this.row = params.data;
    this.isInRowActions = true;
  }

  public refresh(_params: ICellRendererParams): boolean {
    return false;
  }

  public setAction(action: string): void {
    if(this.params?.context.setAction) {
      this.params.context.setAction(action);
      return;
    }
    this.setBulkAction.emit(action);
  }
}
