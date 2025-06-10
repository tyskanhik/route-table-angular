import { Component } from '@angular/core';
import { RoutesTableComponent } from "./routes-table/routes-table.component";

@Component({
  selector: 'app-root',
  imports: [ RoutesTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'route-table-app';
}
