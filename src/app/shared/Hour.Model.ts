export class Hour {
  constructor(
       public Date_Time_Txt: number,
       public Weather_Description: string,
       public Weather_Icon: string,
       public Main_Temperature: number,
       public Main_Feels_Like: number,
       public Main_Humidity: number,
       public Main_Pressure: number,
       public Probability_Precipitation: number,
       public Wind_Speed: number,
       public Clouds: number,
      
  ) {}
}
