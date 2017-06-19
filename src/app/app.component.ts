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
  players: Player[];
  selectedPlayer: Player;
  pitcherBoy: Player;
  editMode: boolean;

  constructor(private playerService: PlayerService){
    this.editMode = false;
  }

  ngOnChange(): void {
    // localStorage.setItem("players", JSON.stringify(this.players));
    // if(localStorage.getItem("players")) {
    //   this.players = JSON.parse(localStorage.getItem("players"));
    // } else {
    //   localStorage.setItem("players", JSON.stringify(this.players));
    // }
    // console.log(JSON.parse(localStorage.getItem("players")));
    localStorage.setItem("players", JSON.stringify(this.players));
    try {
      this.players.sort(function(a: Player ,b: Player): number { return (a.nr_of_pitchers > b.nr_of_pitchers) ? -1 : ((b.nr_of_pitchers > a.nr_of_pitchers) ? 1 : 0); });
    } catch (e) {
      console.log(e)
    }
  }
  ngOnInit(): void {
    this.getPlayers();
        setTimeout(function(){
          this.checkStorageForPlayers();
    }, 500);
    // this.checkStorageForPlayers();
    // this.players.sort(function(a: Player, b: Player): number { return (a.nr_of_pitchers > b.nr_of_pitchers) ? 1 : ((b.nr_of_pitchers > a.nr_of_pitchers) ? -1 : 0); });
  }

  roll() {
    let tkb = Math.floor(Math.random() * 100)
    // if(tkb === 42) {
    //   this.pitcherBoy =
    // }
    let rand = Math.floor(Math.random() * this.players.length);
    this.pitcherBoy = this.players[rand];
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

  getPlayers(): void {
    this.playerService.getPlayers().then(players => this.players = players)
    // .then(function() {
    //   this.checkStorageForPlayers();
    // }, function(e) {
    //   console.log(e);
    // });
    // this.checkStorageForPlayers();
  }

  checkStorageForPlayers(): void {
    if(localStorage.getItem("players")) {
      this.players = JSON.parse(localStorage.getItem("players"));
      console.log(localStorage.getItem("players"));
    } else {
      localStorage.setItem("players", JSON.stringify(this.players));
    }
  }

  cowardFarmer(player: Player): void{
    player.nr_of_laf += 1;
    this.pitcherBoy = null;
    this.ngOnChange();
  }

  fetchedPitcher(player: Player): void {
    player.nr_of_pitchers += 1;
    this.pitcherBoy = null;
    this.ngOnChange();
  }

  toggleEdit(): void {
    if (this.editMode === false) {
      this.editMode = true;
    } else {
      this.editMode = false;
    }
    this.ngOnChange();
  }
}
