import {Component, OnInit} from '@angular/core';
import {Player} from './player';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayerService]
})
export class AppComponent implements OnInit {
  name = 'wiehaaltdepitcher';
  title = 'Wie haalt de pitcher?';
  // players = PLAYERS;
  players: Player[];
  selectedPlayer: Player;
  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }
  getPlayers(): void {
    this.playerService.getPlayers().then(players => this.players = players);
  }

  constructor(private playerService: PlayerService){
  }

  ngOnInit(): void {
    this.getPlayers();
  }
}
