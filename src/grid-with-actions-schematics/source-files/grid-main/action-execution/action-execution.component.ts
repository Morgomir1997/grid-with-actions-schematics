import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RowType } from '../grid-col-def';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'action-execution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-execution.html',
  styleUrls: ['./action-execution.scss']
})
export class ActionExecutionComponent {
  @Input({required: true})
  public action!: string | null;

  @Input({required: true})
  public rows!: RowType[] | null;

  @Output()
  public actionHasBeenExecuted = new EventEmitter<void>();

  public actionDoneHandler(): void {
    this.actionHasBeenExecuted.emit();
  }
}
