import { Filter } from './class';

export const CCTVFILTER : Filter = {
  name : '전체',
  completed : '',
  subFilters : [
    {name: '응급상황', completed: '' },
    {name: '기타', completed: '' },
  ]
}

export const DEVICEFILTER : Filter = {
  name : '전체',
  completed : '',
  subFilters : [
    {name: '정상', completed: '' },
    {name: '이상', completed: '' },
    {name: '수리 중', completed: '' },
    {name: '로봇', completed: '' },
    {name: '센서', completed: '' },
    {name: '스마트 스피커', completed: '' },
  ]
}

export const WORKERFILTER : Filter = {
  name : '전체',
  completed : '',
  subFilters : [
    {name: '보건', completed: '' },
    {name: '레크리에이터', completed: '' },
    {name: '자원봉사자', completed: '' },
    {name: '노래교실', completed: '' },
    {name: '볼링', completed: '' },
    {name: '요양보호사', completed: '' },
  ]
}

export const ACTIVITYFILTER : Filter = {
  name : '전체',
  completed : '',
  subFilters : [
    {name: '예정', completed: '' },
    {name: '진행중', completed: '' },
    {name: '완료', completed: '' },
    {name: '취소', completed: '' },
  ]
}

export const ACTIVITYPHOTOFILTER : Filter = {
  name : '전체',
  completed : '',
  subFilters : [
    {name: '프로그램', completed: '' },
    {name: '일상', completed: '' },
  ]
}

export const TASKFILTER : Filter = {
  name : '전체',
  completed : '',
  subFilters : [
    {name: '화재', completed: '' },
    {name: '낙상', completed: '' },
    {name: '배회', completed: '' },
    {name: '체온이상자', completed: '' },
    {name: '무단결석', completed: '' },
    {name: '기타 사건사고', completed: '' },
  ]
}