import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { League } from 'src/shared/models/league';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private http:HttpClient) { }

  private url: string = 'https://radardeaprendiz-production-595b.up.railway.app';

  saveLeagues(league:League):Observable<any>{
    let direction = this.url + '/create/league';
    return this.http.post<League>(direction,league);
  }

  addAprenticeToLeague(email: string, leagueName: string):Observable<any>{
    let direction = this.url + `/addEmailApprentice/league/${email}/${leagueName}`;
    return this.http.post<League>(direction,  {
      responseType: 'text' as 'json',
    });
  }

  listLeagues():Observable<any>{
    let direction = this.url +'/listall/leagues';
    return this.http.get<League[]>(direction);
  }

  getLeague(leagueName: string | null):Observable<any>{
    let direction = this.url + '/league/'+ leagueName;
    return this.http.get<League>(direction);
  }



}
