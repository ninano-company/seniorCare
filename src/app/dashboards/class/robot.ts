import { Robot } from './class';

export const ROBOTS: Robot[] = [
  { id: 1, name: 'RB-01', kind: '로봇', where: '활동실', status: '정상', color: 'success'},
  { id: 2, name: 'ST-04', kind: '센서', where: '주방', status: '정상', color: 'success'},
  { id: 3, name: 'ST-01', kind: '센서', where: '활동실', status: '정상', color: 'success'},
  { id: 4, name: 'RB-01', kind: '로봇', where: '휴게실', status: '이상', color: 'danger'},
  { id: 5, name: 'ST-02', kind: '센서', where: '출입구', status: '수리', color: 'warning'},
]
