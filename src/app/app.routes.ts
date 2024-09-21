import { Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { CountryComponent } from './country/country.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
    {path:'cities', component:CityComponent},
    {path:'countries', component:CountryComponent},
    {path:'', component:WeatherComponent, pathMatch:'full'}
];
