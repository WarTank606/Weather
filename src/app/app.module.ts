import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { WeatherService } from './shared/weather.service';
import { HttpClientModule } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { CurrentComponent } from './current/current.component';
import { HourlyComponent } from './hourly/hourly.component';
import { DailyComponent } from './daily/daily.component';
import { CityLocationComponent } from './city-weather/city-location/city-location.component';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentComponent,
    HourlyComponent,
    DailyComponent,
    CityLocationComponent,
    CityWeatherComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule, 
    HttpClientModule,
    MatAutocompleteModule,
    FormsModule,
    MatTableModule,
    MatExpansionModule
  ],
  providers: [WeatherService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
