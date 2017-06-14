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
  pitcherBoy: Player;

  constructor(private playerService: PlayerService){
  }
  ngOnChange(): void {
        this.players.sort(function(a:Player ,b:Player): number { return (a.nr_of_pitchers > b.nr_of_pitchers) ? -1 : ((b.nr_of_pitchers > a.nr_of_pitchers) ? 1 : 0); });

  }
  ngOnInit(): void {
    this.getPlayers();
    this.players.sort(function(a:Player ,b:Player): number { return (a.nr_of_pitchers > b.nr_of_pitchers) ? 1 : ((b.nr_of_pitchers > a.nr_of_pitchers) ? -1 : 0); });
  }

  roll() {
    var rand = Math.floor(Math.random() * this.players.length);
    this.pitcherBoy = this.players[rand];
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }
  getPlayers(): void {
    this.playerService.getPlayers().then(players => this.players = players);
  }
  cowardFarmer(): void{
    this.pitcherBoy = null;
  }

  fetchedPitcher(player: Player): void {
    player.nr_of_pitchers += 1; 
    this.pitcherBoy = null;
    this.ngOnChange();  
  }
}
