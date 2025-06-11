import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, delay, Observable, of, tap, throwError } from 'rxjs';
import { Route, RouteSortColumn, SortDirection } from '../models/route.model';
import { MOCK_ROUTES } from '../mocks/routes.mock';

type CurrensSort = {
  column: RouteSortColumn | '';
  direction: SortDirection;
}

@Injectable({
  providedIn: 'root'
})

export class RouteService {
  private routesSubject = new BehaviorSubject<Route[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(true);
  public isLoading$ = this.loadingSubject.asObservable();
  private currentSort: CurrensSort = { column: '', direction: 'asc' as 'asc' | 'desc' };

  constructor() {
    this.loadInitialData()
  }

  /**
   * Загружаем моковые данные с задержкой
   */
  private loadInitialData(): void {
    of(MOCK_ROUTES).pipe(
      delay(1000),
      tap(route => {
        this.routesSubject.next(route);
        this.loadingSubject.next(false);
      }),
      catchError(err => {
        this.loadingSubject.next(false);
        return throwError(() => err);
      })
    ).subscribe()
  }

  /**
   * Получаем маршруты
   */
  getRoutes(): Observable<Route[]> {
    return this.routesSubject
  }

  /**
   * Изменяем параметры сортировки
   * @param column - столбец для сортировки
   */
  sort(column: RouteSortColumn): void {
    if (this.currentSort.column !== column) {
      this.currentSort.column = column;
      this.currentSort.direction = 'asc'
    } else {
      this.currentSort.direction = this.currentSort.direction === 'asc' ? 'desc' : 'asc'
    }

    this.routesSubject.next(this.applySort([...this.routesSubject.value]))

  }

  /**
   * Применяем текущую сортировку к данным
   * @param routes
   */
  private applySort(routes: Route[]): Route[] {
    if (!this.currentSort.column || !['address', 'mask', 'gateway', 'interface'].includes(this.currentSort.column)) {
      return routes
    }

    const column = this.currentSort.column;

    return [...routes].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (['address', 'mask', 'gateway'].includes(this.currentSort.column)) {
        const numA = this.ipToNumber(valueA as string);
        const numB = this.ipToNumber(valueB as string);

        return (numA - numB) * (this.currentSort.direction === 'asc' ? 1 : -1)
      }

      return valueA.localeCompare(valueB) * (this.currentSort.direction === 'asc' ? 1 : -1);
    })
  }

  /**
   * Конвертируем IP в число для корректного сравнения
   * @param ip
   */
  private ipToNumber(ip: string): number {
    const [a, b, c, d] = ip.split('.').map(Number);
    return a * 256 ** 3 + b * 256 ** 2 + c * 256 + d;
  }

  /**
   * Получаем стейт сортировки 
   */
  getCurrentSortState(): CurrensSort {
    return this.currentSort;
  }
}
