import { Component, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../../shared/weather.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-city-location',
  templateUrl: './city-location.component.html',
  styleUrls: ['./city-location.component.css'],
})
export class CityLocationComponent {
  CityLocationData: any;

  @Output() City_Search = new EventEmitter<any>();

  constructor(private WeatherService: WeatherService) {}

  GetCityLocation(Form: NgForm) {
    this.WeatherService.GetCityLocation(Form.value.CityName).subscribe(
      (Data) => {
        this.CityLocationData = Data;

        // console.log(this.CityLocationData);

        this.City_Search.emit(this.CityLocationData);
      }
    );
  }
}
