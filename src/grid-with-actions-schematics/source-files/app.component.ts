import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridMainComponent } from './components/grid-main/grid-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GridMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'grid-with-actions';
}
