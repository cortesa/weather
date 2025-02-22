export type WTTRResponse<T = object> = (T | { error?: string }) | undefined

export type CurrentCondition = {
  FeelsLikeC: string;
  FeelsLikeF: string;
  cloudcover: string;
  humidity: string;
  localObsDateTime: string;
  observation_time: string;
  precipInches: string;
  precipMM: string;
  pressure: string;
  pressureInches: string;
  temp_C: string;
  temp_F: string;
  uvIndex: string;
  visibility: string;
  visibilityMiles: string;
  weatherCode: string;
  weatherDesc: WeatherDescription[];
  weatherIconUrl: WeatherIcon[];
  winddir16Point: string;
  winddirDegree: string;
  windspeedKmph: string;
  windspeedMiles: string;
};

export type WeatherDescription = {
  value: string;
};

export type WeatherIcon = {
  value: string;
};

export type NearestArea = {
  areaName: WeatherDescription[];
  country: WeatherDescription[];
  latitude: string;
  longitude: string;
  population: string;
  region: WeatherDescription[];
  weatherUrl: WeatherIcon[];
};

export type RequestData = {
  query: string;
  type: string;
};

export type WeatherData = {
  astronomy: Astronomy[];
  avgtempC: string;
  avgtempF: string;
  date: string;
  hourly: HourlyWeather[];
  maxtempC: string;
  maxtempF: string;
  mintempC: string;
  mintempF: string;
  sunHour: string;
  totalSnow_cm: string;
  uvIndex: string;
};

export type Astronomy = {
  moon_illumination: string;
  moon_phase: string;
  moonrise: string;
  moonset: string;
  sunrise: string;
  sunset: string;
};

export type HourlyWeather = {
  DewPointC: string;
  DewPointF: string;
  FeelsLikeC: string;
  FeelsLikeF: string;
  HeatIndexC: string;
  HeatIndexF: string;
  WindChillC: string;
  WindChillF: string;
  WindGustKmph: string;
  WindGustMiles: string;
  chanceoffog: string;
  chanceoffrost: string;
  chanceofhightemp: string;
  chanceofovercast: string;
  chanceofrain: string;
  chanceofremdry: string;
  chanceofsnow: string;
  chanceofsunshine: string;
  chanceofthunder: string;
  chanceofwindy: string;
  cloudcover: string;
  diffRad: string;
  humidity: string;
  precipInches: string;
  precipMM: string;
  pressure: string;
  pressureInches: string;
  shortRad: string;
  tempC: string;
  tempF: string;
  time: string;
  uvIndex: string;
  visibility: string;
  visibilityMiles: string;
  weatherCode: string;
  weatherDesc: WeatherDescription[];
  weatherIconUrl: WeatherIcon[];
  winddir16Point: string;
  winddirDegree: string;
  windspeedKmph: string;
  windspeedMiles: string;
};

export type WTTRMessageData = {
  current_condition: CurrentCondition[];
  nearest_area: NearestArea[];
  request: RequestData[];
  weather: WeatherData[];
};
