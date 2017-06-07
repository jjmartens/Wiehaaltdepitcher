import { Component } from '@angular/core';


export class Player {
  id: number;
  name: string;
  nr_of_pitchers: number;
}

const PLAYERS: Player[] = [
  {id: 1, name: 'Bauke', nr_of_pitchers : 0},
  {id: 2, name: 'Roland', nr_of_pitchers : 0},
  {id: 3, name: 'Jochem', nr_of_pitchers : 0},
  {id: 4, name: 'Jan', nr_of_pitchers : 0},
  {id: 5, name: 'Sebastiaan', nr_of_pitchers : 0}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "wiehaaltdepitcher";
  title = 'Wie haalt de pitcher?';
  players = PLAYERS;
}
