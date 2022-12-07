import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  readonly apiURL: string;
  agentList!: any[];

  constructor(private http: HttpClient) {
    this.apiURL = "https://valorant-api.com/v1/";
  }


  getAgents(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}agents`);
  };

  getAgentById(agentId: String): Observable<any> {
    return this.http.get<any>(`${this.apiURL}agents/${agentId}`)
  }

}
