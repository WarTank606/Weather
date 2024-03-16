import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentComponent } from './current/current.component';
import { HourlyComponent } from './hourly/hourly.component';
import { DailyComponent } from './daily/daily.component';
import { CityLocationComponent } from './city-weather/city-location/city-location.component';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  {
    path: 'Home', component: HomeComponent, children: 
    [
      { path: 'City_Weather', component: CityWeatherComponent, children: 
      [
        {path: 'City_Location', canActivate:[AuthGuard], component: CityLocationComponent}
      ]
      }
    ,
      { path: 'Current', canActivate:[AuthGuard], component: CurrentComponent },
      { path: 'Hourly', canActivate:[AuthGuard], component: HourlyComponent },
      { path: 'Daily', canActivate:[AuthGuard], component: DailyComponent }
    ],
  },
  {path: '**', redirectTo: '/Home/City_Weather'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
