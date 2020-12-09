import { Routes } from '@angular/router';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { FacilityComponent } from './facility/facility.component';
import { SeniorListComponent } from './senior-list/senior-list.component';
import { SeniorDetailComponent } from './senior-detail/senior-detail.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard1',
        component: Dashboard1Component,
        data: {
          title: 'Dashboard 1',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Dashboard' }
          ]
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'facility',
        component: FacilityComponent,
        data: {
          title: 'Dashboard 1',
          urls: [
            { title: 'facility', url: '/facility' },
            { title: 'facility' }
          ]
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'seniorList',
        component: SeniorListComponent,
        data: {
          title: 'Dashboard 1',
          urls: [
            { title: 'seniorList', url: '/seniorList' },
            { title: 'seniorList' }
          ]
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'seniorDetail',
        component: SeniorDetailComponent,
        data: {
          title: 'Dashboard 1',
          urls: [
            { title: 'seniorDetail', url: '/seniorDetail' },
            { title: 'seniorDetail' }
          ]
        }
      }
    ]
  }
];
