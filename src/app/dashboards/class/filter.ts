import { cctvFilter } from './class';
import { RobotFilter } from './class';

export const CCTVFILTERS: cctvFilter[] = [
  { id: 1, name: '전체' },
  { id: 2, name: '응급 상황' },
  { id: 3, name: '기타' },
]

export const ROBOTFILTERS: RobotFilter[] = [
  { id: 1, name: '전체' },
  { id: 2, name: '정상' },
  { id: 3, name: '이상' },
  { id: 4, name: '수리 중' },
  { id: 5, name: '로봇' },
  { id: 6, name: '센서류' },
  { id: 7, name: '스마트 스피커' },
]