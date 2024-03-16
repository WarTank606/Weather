import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/weather.service';
import { Observable } from 'rxjs';
import { CityWeatherComponent } from '../city-weather/city-weather.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css'],
})
export class CurrentComponent implements OnInit {
  CityName: string;
  StateName: string;
  CountryName: string;
  Latitude: string;
  Longitude: string;
  Weather_Description: string;
  Weather_Icon_Id: string;
  Weather_Icon = '';
  Main_Temperature: number;
  Main_Feels_Like: number;
  Main_Temperature_Min: number;
  Main_Temperature_Max: number;
  Main_Humidity: number;
  Date_Time = new Date();
  CityWeatherData: any;

  constructor(private WeatherService: WeatherService, private Router: Router) {}

  ngOnInit(): void {


    this.CityName = this.WeatherService.CityName;
    this.StateName = this.WeatherService.StateName;
    this.CountryName = this.WeatherService.CountryName;
    this.Latitude = this.WeatherService.Latitude;
    this.Longitude = this.WeatherService.Longitude;
    this.CityWeatherData = this.WeatherService.CityWeatherData;
    this.Weather_Description = this.CityWeatherData.weather[0].description;
    this.Weather_Icon_Id = this.CityWeatherData.weather[0].icon;
    this.Main_Temperature = this.CityWeatherData.main.temp;
    this.Main_Feels_Like = this.CityWeatherData.main.feels_like;
    this.Main_Temperature_Max = this.CityWeatherData.main.temp_max;
    this.Main_Temperature_Min = this.CityWeatherData.main.temp_min;
    this.Main_Humidity = this.CityWeatherData.main.humidity;


    switch (this.Weather_Icon_Id) {
      case '01d':
        this.Weather_Icon = '/assets/icons/01d.png';
        break;
      case '01n':
        this.Weather_Icon = '/assets/icons/01n.png';
        break;

      case '02d':
        this.Weather_Icon = '/assets/icons/02d.png';
        break;
      case '02n':
        this.Weather_Icon = '/assets/icons/02n.png';
        break;

      case '03d':
        this.Weather_Icon = '/assets/icons/03d.png';
        break;
      case '03n':
        this.Weather_Icon = '/assets/icons/03d.png';
        break;

      case '04d':
        this.Weather_Icon = '/assets/icons/04d.png';
        break;
      case '04n':
        this.Weather_Icon = '/assets/icons/04d.png';
        break;

      case '09d':
        this.Weather_Icon = '/assets/icons/09d.png';
        break;
      case '09n':
        this.Weather_Icon = '/assets/icons/09d.png';
        break;

      case '10d':
        this.Weather_Icon = '/assets/icons/10d.png';
        break;
      case '10n':
        this.Weather_Icon = '/assets/icons/10n.png';
        break;

      case '11d':
        this.Weather_Icon = '/assets/icons/11d.png';
        break;
      case '11n':
        this.Weather_Icon = '/assets/icons/11d.png';
        break;

      case '13d':
        this.Weather_Icon = '/assets/icons/13d.png';
        break;
      case '13n':
        this.Weather_Icon = '/assets/icons/13d.png';
        break;

      case '50d':
        this.Weather_Icon = '/assets/icons/50d.png';
        break;
      case '50n':
        this.Weather_Icon = '/assets/icons/50d.png';
        break;
    }
  }

  ChangeCity()
  {
    this.Router.navigate(['/Home/City_Weather']);
  }

}
