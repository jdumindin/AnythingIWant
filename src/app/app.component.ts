import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
/*
export class AppComponent {
  title = 'AnythingIWant';
  public forecasts: WeatherForecast[] = [];
}
*/
export class AppComponent {
  
}

