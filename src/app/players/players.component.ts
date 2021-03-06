import { Component, OnInit, Input } from '@angular/core';
import {Player} from '../player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit {
  @Input() player: Player;

  constructor() {}

  ngOnInit() {
  }
}
