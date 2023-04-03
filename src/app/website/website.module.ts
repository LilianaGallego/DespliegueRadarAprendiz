import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './pages/user/user.component';
import { AverageComponent } from './pages/average/average.component';
import { RadarComponent } from './pages/radar/radar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from 'src/shared/shared.module';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { RadarDetailComponent } from './pages/radar-detail/radar-detail.component';
import { LeagueDetailComponent } from './pages/league-detail/league-detail.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    UserComponent,
    AverageComponent,
    RadarComponent,
    DashboardComponent,
    CreateUserComponent,
    RadarDetailComponent,
    LeagueDetailComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule,
    NgxChartsModule
  ]
})
export class WebsiteModule { }
