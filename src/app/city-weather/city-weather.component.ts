import { Component } from '@angular/core';
import { WeatherService } from 'src/app/shared/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css'],
})
export class CityWeatherComponent {
  CityWeatherData: any;
  CityLocationData: any;
  SearchCity = false;
  SelectCity = false;

  constructor(private WeatherService: WeatherService, private Router: Router) {}

  GetCity_Search(event: any) {
    this.SearchCity = true;
    this.CityLocationData = event;
  }

  SelectedCity(index: number) {
    this.SearchCity = false;
    this.SelectCity = true;

    this.WeatherService.CityName = this.CityLocationData[index].name;
    this.WeatherService.StateName = this.CityLocationData[index].state;
    this.WeatherService.CountryName = this.CityLocationData[index].country;
    this.WeatherService.Latitude = this.CityLocationData[index].lat;
    this.WeatherService.Longitude = this.CityLocationData[index].lon;

    this.WeatherService.GetCurrentWeatherServer(
      this.WeatherService.Latitude,
      this.WeatherService.Longitude
    ).subscribe((Data) => {
      this.CityWeatherData = Data;
      this.WeatherService.CityWeatherData = this.CityWeatherData;
      this.Router.navigate(['/Home/Current']);
    });
  }
}
