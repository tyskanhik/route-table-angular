import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Route, RouteSortColumn } from '../models/route.model';
import { RouteService } from '../services/route.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-routes-table',
  imports: [CommonModule, AsyncPipe],
  templateUrl: './routes-table.component.html',
  styleUrl: './routes-table.component.scss'
})
export class RoutesTableComponent {
  routes$: Observable<Route[]>;
  isLoading$: Observable<boolean>;

  readonly ARROW_UP = '↑';
  readonly ARROW_DOWN = '↓';
  readonly ARROWS = '⇅';

  sortIcons = {
    address: this.ARROWS,
    mask: this.ARROWS,
    gateway: this.ARROWS,
    interface: this.ARROWS
  };

  constructor(private routeService: RouteService) {
    this.routes$ = routeService.getRoutes().pipe(
      tap(() => this.updateSortIcons())
    );
    this.isLoading$ = routeService.isLoading$;
  }

  sort(column: RouteSortColumn) {
    this.routeService.sort(column);
  }

  private updateSortIcons(): void {
    const sortState = this.routeService.getCurrentSortState();

    // Сбрасываем все иконки к состоянию по умолчанию
    this.sortIcons = {
      address: this.ARROWS,
      mask: this.ARROWS,
      gateway: this.ARROWS,
      interface: this.ARROWS
    };

    if (sortState.column) {
      this.sortIcons[sortState.column] = sortState.direction === 'asc' ? this.ARROW_UP : this.ARROW_DOWN;
    }
  }
}
