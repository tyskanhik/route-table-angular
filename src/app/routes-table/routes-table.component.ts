import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Route } from '../models/route.model';
import { RouteService } from '../services/route.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-routes-table',
  imports: [ CommonModule ,AsyncPipe],
  templateUrl: './routes-table.component.html',
  styleUrl: './routes-table.component.scss'
})
export class RoutesTableComponent {
  routes$: Observable<Route[]>
  isLoading = true; // Флаг загрузки

  constructor(private routeService: RouteService) { 
    this.routes$ = routeService.getRoutes();

    // Сбрасываем флаг загрузки при получении данных
    this.routes$.subscribe({
      next: () => this.isLoading = false,
      error: () => this.isLoading = false
    })
  }

}
