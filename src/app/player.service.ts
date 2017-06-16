/**
 * Created by bauke on 8-6-2017.
 */
import { Injectable } from '@angular/core';
import {PLAYERS} from './players';
import {Player} from './player';

@Injectable()
export class PlayerService {

  getPlayers(): Promise<Player[]> {
    return Promise.resolve(PLAYERS);
  }
}
