import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from '../models/route.model';
import { RouteService } from '../services/route.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-routes-table',
  imports: [AsyncPipe],
  templateUrl: './routes-table.component.html',
  styleUrl: './routes-table.component.scss'
})
export class RoutesTableComponent {
  routes$: Observable<Route[]>
  isLoading = true; // Флаг загрузки

  constructor(private routeServis: RouteService) { 
    this.routes$ = routeServis.getRoutes();

    // Сбрасываем флаг загрузки при получении данных
    this.routes$.subscribe({
      next: () => this.isLoading = false,
      error: () => this.isLoading = false
    })
  }

}
