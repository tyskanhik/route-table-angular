import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Route } from '../models/route.model';
import { MOCK_ROUTES } from '../mocks/routes.mock';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  constructor() { }

  /**
   * Имитация API с задержкой
   * Возвращает Observable<Route[]> с задержкой 1 секунда
   */
  getRoutes(): Observable<Route[]> {
    return of(MOCK_ROUTES).pipe(
      delay(1000)
    )
  }
}
