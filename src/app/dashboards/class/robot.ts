import { Robot } from './class';

export const ROBOTS: Robot[] = [
  { id: 1, name: 'RB-01', kind: '로봇', center: '시설A', inserted: '2020.10.15', where: '활동실', status: '정상', color: 'success'},
  { id: 2, name: 'ST-04', kind: '센서', center: '시설B', inserted: '2020.11.25', where: '주방', status: '정상', color: 'success'},
  { id: 3, name: 'ST-01', kind: '센서', center: '시설C', inserted: '2020.11.16', where: '활동실', status: '정상', color: 'success'},
  { id: 4, name: 'RB-01', kind: '로봇', center: '시설B', inserted: '2020.10.05', where: '휴게실', status: '이상', color: 'danger'},
  { id: 5, name: 'ST-02', kind: '센서', center: '시설C', inserted: '2020.10.15', where: '출입구', status: '수리', color: 'warning'},
]
