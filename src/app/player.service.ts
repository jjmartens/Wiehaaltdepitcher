/**
 * Created by bauke on 8-6-2017.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Player} from './player';

@Injectable()
export class PlayerService {
  constructor (
	private http: Http
  ) {}
  
  getPlayers(): Observable<Player[]> {
    return this.http.get('http://localhost:3000/api/players').map((res:Response) => {console.log(res);return res.json();});
  }
}
