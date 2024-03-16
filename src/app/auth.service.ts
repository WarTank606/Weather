import { Injectable } from "@angular/core";
import { WeatherService } from "./shared/weather.service";

@Injectable()
export class AuthService
{

    constructor(private WeatherService: WeatherService)
    {
    }

    CityName:String
    AccessToWeather = false;

    ConfirmCitySelected()
    {

        this.CityName = this.WeatherService.CityName;
    

        if (this.CityName == null)
        {
            this.AccessToWeather = false;
        }
        else if (this.CityName != null)
        {
            this.AccessToWeather = true;
        }

        return this.AccessToWeather;
    }

}