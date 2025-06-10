/**
 * Модель данных маршрута
 * 
 * uuid - уникальный идентификатор
 * address - IP-адрес сети назначения (например "192.168.1.0")
 * mask - маска подсети (например "255.255.255.0")
 * gateway - IP-адрес шлюза (например "192.168.1.1")
 * interface - имя сетевого интерфейса (например "Подключение Ethernet", "Гостевая сеть" и т.д.)
 */
export interface Route {
  'uuid': string;
  'address': string;
  'mask': string;
  'gateway': string;
  'interface': string;
}

/**
 * Тип для столбцов, по которым можно сортировать
 * (исключаем uuid, так как по нему сортировка не имеет смысла)
 */
export type RouteSortColumn = keyof Omit<Route, 'uuid'>;

/**
 * Направление сортировки
 */
export type SortDirection = 'asc' | 'desc';