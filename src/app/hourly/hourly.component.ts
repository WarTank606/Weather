import { Component } from '@angular/core';
import { WeatherService } from '../shared/weather.service';
import { ThreeHourDay } from '../shared/3-HourDay.Model';
import { Hour } from '../shared/Hour.Model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css'],
})
export class HourlyComponent {
  Eighthours = [];
  FiveDay = [];
  Hour: any;
  Weather_Icon = '';
  CityName = '';
  StateName = '';
  CountryName = '';

  constructor(private WeatherService: WeatherService, private Router:Router) {}

  ngOnInit() {
    this.FiveDay = this.WeatherService.FiveDay;
    
    // console.log('City Name: ' + this.WeatherService.CityName);
    if (this.FiveDay != null && this.CityName == this.WeatherService.CityName) {
      // console.log('Already Done');
      this.CreateEightHours();
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
        this.CreateEightHours();
      });

    }
  }

  CreateEightHours() {
    MainLoop: for (let i = 0; i < 8; i++) {
      for (let j = 0; j < this.FiveDay[i].length; j++) {
        // console.log(this.Eighthours);

        this.Hour = new Hour(
          this.FiveDay[i][j].Date_Time_Txt,
          this.FiveDay[i][j].Weather_Description,
          this.FiveDay[i][j].Weather_Icon,
          this.FiveDay[i][j].Main_Temperature,
          this.FiveDay[i][j].Main_Feels_Like,
          this.FiveDay[i][j].Main_Humidity,
          this.FiveDay[i][j].Main_Pressure,
          this.FiveDay[i][j].Probability_Precipitation,
          this.FiveDay[i][j].Wind_Speed,
          this.FiveDay[i][j].Clouds
        );

        this.Eighthours.push(this.Hour);
        if (this.Eighthours.length >= 8) {
          break MainLoop;
        }
      }
    }
  }

  ChangeCity()
  {
    this.Router.navigate(['/Home/City_Weather']);
  }
}
