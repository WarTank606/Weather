import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css'],
})
export class DailyComponent implements OnInit {
  FiveDay = [];
  Day_Avg_Date = [];
  Day_Avg_Temperature = [];
  Day_Avg_Feels_Like = [];
  Day_Avg_POP = [];
  Day_Avg_Wind_Speed = [];
  Day_Avg_Wind_Gust = [];
  CityName = '';
  StateName = ''
  CountryName = '';

  constructor(private WeatherService: WeatherService, private Router: Router) {}

  ngOnInit() {
    this.FiveDay = this.WeatherService.FiveDay;
  

    if (this.FiveDay != null && this.CityName == this.WeatherService.CityName) 
    {
      // console.log('Already Done');
      this.CreateFiveDaysAvg();
    } 
    
    else
    {
      // console.log('Not Done');
      this.WeatherService.GetFiveDayWeatherServer(
        this.WeatherService.Latitude,
        this.WeatherService.Longitude
      ).subscribe((Data) => {
        this.WeatherService.ProcessDailyWeatherData(Data);
        this.FiveDay = this.WeatherService.FiveDay;
        this.CityName = this.WeatherService.CityName;
        this.StateName = this.WeatherService.StateName;
        this.CountryName = this.WeatherService.CountryName;
        this.CreateFiveDaysAvg();
      });
    }
  }

  CreateFiveDaysAvg() {
    this.Day_Avg_Date = this.WeatherService.Day_Avg_Date;
    this.Day_Avg_Temperature = this.WeatherService.Day_Avg_Temperature;
    this.Day_Avg_Feels_Like = this.WeatherService.Day_Avg_Feels_Like;
    this.Day_Avg_POP = this.WeatherService.Day_Avg_POP;
    this.Day_Avg_Wind_Speed = this.WeatherService.Day_Avg_Wind_Speed;
    this.Day_Avg_Wind_Gust = this.WeatherService.Day_Avg_Wind_Gust;
  }

  ChangeCity()
  {
    this.Router.navigate(['/Home/City_Weather']);
  }
}
