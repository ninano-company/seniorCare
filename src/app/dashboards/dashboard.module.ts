import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { DashboardRoutes } from './dashboard.routing';

import { Dashboard1Component } from './dashboard1/dashboard1.component';

import {
    InfocardComponent,
    ChatComponent,
    CommentComponent,
    TopsellComponent,
    ActivityComponent,
    BrowserStatsComponent,
    DeviceVisitsComponent,
    EarningsComponent,
    FeedsComponent,
    InfoBoxComponent,
    MixstatsComponent,
    ProductInfoComponent,
    ProjectComponent,
    ReviewComponent,
    SalesComponent,
    SalesIncomeComponent,
    TasklistComponent,
    UserProfileComponent,
    UserDetailsComponent,
    VisitorsComponent,
    VisitsBounceComponent,
    WeathercardComponent,
    WelcomeComponent
} from './dashboard-components';
import { TopsellsComponent } from './dashboard-components/topsells/topsells.component';
import { TopsellssComponent } from './dashboard-components/topsellss/topsellss.component';
import { FacilityComponent } from './facility/facility.component';
import { FacilityWidgetComponent } from './dashboard-components/facility-widget/facility-widget.component';
import { FacilityTabComponent } from './dashboard-components/facility-tab/facility-tab.component';
import { FacilityTimelineComponent } from './dashboard-components/facility-timeline/facility-timeline.component';
import { FacilityUserComponent } from './dashboard-components/facility-user/facility-user.component';
import { FacilityRobotComponent } from './dashboard-components/facility-robot/facility-robot.component';
import { FacilityRequestComponent } from './dashboard-components/facility-request/facility-request.component';
import { SeniorListComponent } from './senior-list/senior-list.component';
import { SeniorDetailComponent } from './senior-detail/senior-detail.component';
import { FilterComponent } from './dashboard-components/filter/filter.component';
import { CardListComponent } from './dashboard-components/card-list/card-list.component';
import { CctvComponent } from './cctv/cctv.component';
import { SeniorPresentListComponent } from './senior-present-list/senior-present-list.component';
import { PresentTableComponent } from './dashboard-components/present-table/present-table.component';
import { PresentDetailComponent } from './dashboard-components/present-detail/present-detail.component';
import { SeniorPresentDetailComponent } from './senior-present-detail/senior-present-detail.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceFilterComponent } from './dashboard-components/device-filter/device-filter.component';
import { DeviceTableComponent } from './dashboard-components/device-table/device-table.component';
import { WorkersComponent } from './workers/workers.component';
import { WorkersFilterComponent } from './dashboard-components/workers-filter/workers-filter.component';
import { WorkersTableComponent } from './dashboard-components/workers-table/workers-table.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityListFilterComponent } from './dashboard-components/activity-list-filter/activity-list-filter.component';
import { ActivityListTableComponent } from './dashboard-components/activity-list-table/activity-list-table.component';
import { ActivityPhotoComponent } from './activity-photo/activity-photo.component';
import { ActivityPhotoFilterComponent } from './dashboard-components/activity-photo-filter/activity-photo-filter.component';
import { ActivityPhotoListComponent } from './dashboard-components/activity-photo-list/activity-photo-list.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksFilterComponent } from './dashboard-components/tasks-filter/tasks-filter.component';
import { TasksTableComponent } from './dashboard-components/tasks-table/tasks-table.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NgbModule,
        ChartsModule,
        ChartistModule,
        RouterModule.forChild(DashboardRoutes),
        PerfectScrollbarModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
        }),
        NgxChartsModule,
        NgxDatatableModule
    ],
    declarations: [
        Dashboard1Component,
        InfocardComponent,
        ChatComponent,
        CommentComponent,
        TopsellComponent,
        ActivityComponent,
        BrowserStatsComponent,
        DeviceVisitsComponent,
        EarningsComponent,
        FeedsComponent,
        InfoBoxComponent,
        MixstatsComponent,
        ProductInfoComponent,
        ProjectComponent,
        ReviewComponent,
        SalesComponent,
        SalesIncomeComponent,
        TasklistComponent,
        UserProfileComponent,
        UserDetailsComponent,
        VisitorsComponent,
        VisitsBounceComponent,
        WeathercardComponent,
        WelcomeComponent,
        TopsellsComponent,
        TopsellssComponent,
        FacilityComponent,
        FacilityWidgetComponent,
        FacilityTabComponent,
        FacilityTimelineComponent,
        FacilityUserComponent,
        FacilityRobotComponent,
        FacilityRequestComponent,
        SeniorListComponent,
        SeniorDetailComponent,
        FilterComponent,
        CardListComponent,
        CctvComponent,
        SeniorPresentListComponent,
        PresentTableComponent,
        PresentDetailComponent,
        SeniorPresentDetailComponent,
        DevicesComponent,
        DeviceFilterComponent,
        DeviceTableComponent,
        WorkersComponent,
        WorkersFilterComponent,
        WorkersTableComponent,
        ActivityListComponent,
        ActivityListFilterComponent,
        ActivityListTableComponent,
        ActivityPhotoComponent,
        ActivityPhotoFilterComponent,
        ActivityPhotoListComponent,
        TasksComponent,
        TasksFilterComponent,
        TasksTableComponent,
    ]
})
export class DashboardModule { }
