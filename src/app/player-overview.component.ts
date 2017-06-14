import {Component, OnInit} from '@angular/core';
import {Player} from './player';
import { PlayerService } from './player.service';

@Component({
  selector: 'my-players',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayerService]
})
export class PlayerOverview implements OnInit {
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
