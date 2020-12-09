import { Request } from './class';

export const REQUESTS: Request[] = [
  { id: 1, color: 'info', progress: '진행 중', from: '관리자', desc: '택시 호출', who: '김모모'},
  { id: 2, color: 'info', progress: '진행 중', from: '관리자', desc: '병원 동행', who: '윤모모'},
  { id: 3, color: 'danger', progress: '취소', from: '로봇', desc: '노래 검색', who: '박모모'},
  { id: 4, color: 'success', progress: '완료', from: '로봇', desc: '병원 동행', who: '임모모'},
  { id: 5, color: 'info', progress: '진행 중', from: '로봇', desc: '택시 호출', who: '정모모'},
  { id: 6, color: 'success', progress: '완료', from: '앱', desc: '택시 호출', who: '설모모'},
  { id: 7, color: 'success', progress: '완료', from: '로봇', desc: '노래 검색', who: '이모모'},
  { id: 8, color: 'danger', progress: '취소', from: '관리자', desc: '병원 동행', who: '김모모'},
  { id: 9, color: 'success', progress: '완료', from: '앱', desc: '관공서 서비스', who: '최모모'},
  { id: 10, color: 'success', progress: '완료', from: '관리자', desc: '관공서 서비스', who: '진모모'},
]