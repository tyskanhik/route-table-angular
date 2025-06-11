import { Route } from "../models/route.model";


/**
 * Генерация моковых данных маршрутов
 */
export const MOCK_ROUTES: Route[] = [
  {
    uuid: '6e2bc663-5197-441a-957b-bc75e6a2e8b1',
    address: '192.168.1.0',
    mask: '255.255.255.128',
    gateway: '10.0.0.1',
    interface: 'Домашняя сеть'
  },
  {
    uuid: '3a7d4e5f-8c9d-4b1e-a6f2-7c3d8e9f0a1b',
    address: '10.0.0.0',
    mask: '255.255.255.0',
    gateway: '192.168.1.1',
    interface: 'Подключение Ethernet'
  },
  {
    uuid: 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    address: '172.16.0.0',
    mask: '255.255.0.0',
    gateway: '172.16.0.1',
    interface: 'Гостевая сеть'
  },
  {
    uuid: '9a8b7c6d-5e4f-3g2h-1i0j-k9l8m7n6o5p4',
    address: '192.168.2.0',
    mask: '255.255.255.0',
    gateway: '192.168.2.1',
    interface: 'Домашняя сеть (резервная)'
  },
  {
    uuid: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
    address: '10.1.0.0',
    mask: '255.255.0.0',
    gateway: '10.1.0.1',
    interface: 'Подключение Ethernet 2'
  },
  {
    uuid: 'q1w2e3r4-t5y6-u7i8-o9p0-a1s2d3f4g5h6',
    address: '172.17.0.0',
    mask: '255.255.0.0',
    gateway: '172.17.0.1',
    interface: 'Гостевая Wi-Fi сеть'
  },
  {
    uuid: 'z1x2c3v4-b5n6-m7l8-k9j0-h1g2f3d4s5a6',
    address: '192.168.3.0',
    mask: '255.255.255.0',
    gateway: '192.168.3.1',
    interface: 'IoT Сеть'
  },
  {
    uuid: 'p0o9i8u7-y6t5r4-e3w2-q1a2s3d4f5g6h7',
    address: '10.2.0.0',
    mask: '255.255.0.0',
    gateway: '10.2.0.1',
    interface: 'Серверная сеть'
  },
  {
    uuid: 'm8n7b6v5-c4x3z2-q1w2e3-r4t5y6u7i8o9p0',
    address: '172.18.0.0',
    mask: '255.255.0.0',
    gateway: '172.18.0.1',
    interface: 'Офисная сеть'
  }
];