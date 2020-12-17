import { Routes } from '@angular/router';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { FacilityComponent } from './facility/facility.component';
import { SeniorListComponent } from './senior-list/senior-list.component';
import { SeniorDetailComponent } from './senior-detail/senior-detail.component';
import { SeniorPresentListComponent } from './senior-present-list/senior-present-list.component';
import { CctvComponent } from './cctv/cctv.component';
import { SeniorPresentDetailComponent } from './senior-present-detail/senior-present-detail.component';
import { DevicesComponent } from './devices/devices.component';
import { WorkersComponent } from './workers/workers.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityPhotoComponent } from './activity-photo/activity-photo.component';
import { TasksComponent } from './tasks/tasks.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { VideoplayComponent } from './videoplay/videoplay.component';
import { DietaryComponent } from './dietary/dietary.component';

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
  },
  {
    path: '',
    children: [
      {
        path: 'cctv',
        component: CctvComponent,
        data: {
          title: 'Dashboard 1',
          urls: [
            { title: 'cctv', url: '/cctv' },
            { title: 'cctv' }
          ]
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'seniorPresentList',
        component: SeniorPresentListComponent,
        data: {
          title: 'Dashboard 1',
          urls: [
            { title: 'seniorPresentList', url: '/seniorPresentList' },
            { title: 'seniorPresentList' }
          ]
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'seniorPresentDetail',
        component: SeniorPresentDetailComponent,
        data: {
          title: 'Dashboard 1',
          urls: [
            { title: 'seniorPresentDetail', url: '/seniorPresentDetail' },
            { title: 'seniorPresentDetail' }
          ]
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'devices',
        component: DevicesComponent,
        data: {
          title: 'Dashboard 1',
          urls: [
            { title: 'devices', url: '/devices' },
            { title: 'devices' }
          ]
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'workers',
        component: WorkersComponent,
        data: {
          title: 'Dashboard 1',
          urls: [
            { title: 'workers', url: '/workers' },
            { title: 'workers' }
          ]
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'activityList',
        component: ActivityListComponent,
        data: {
          title: 'Dashboard 1',
          urls: [
            { title: 'activityList', url: '/activityList' },
            { title: 'activityList' }
          ]
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'activityPhoto',
        component: ActivityPhotoComponent,
        data: {
          title: 'Dashboard 1',
          urls: [
            { title: 'activityPhoto', url: '/activityPhoto' },
            { title: 'activityPhoto' }
          ]
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'tasks',
        component: TasksComponent,
        data: {
          title: 'Dashboard 1',
          urls: [
            { title: 'tasks', url: '/tasks' },
            { title: 'tasks' }
          ]
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'schedule',
        component: ScheduleComponent,
        data: {
          title: 'Dashboard 1',
          urls: [
            { title: 'schedule', url: '/schedule' },
            { title: 'schedule' }
          ]
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'videoplay',
        component: VideoplayComponent,
        data: {
          title: 'Dashboard 1',
          urls: [
            { title: 'videoplay', url: '/videoplay' },
            { title: 'videoplay' }
          ]
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'dietary',
        component: DietaryComponent,
        data: {
          title: 'Dashboard 1',
          urls: [
            { title: 'dietary', url: '/dietary' },
            { title: 'dietary' }
          ]
        }
      }
    ]
  }
  
];