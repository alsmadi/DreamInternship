import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JobsProfile } from '../Interfaces/JobsClass';

@Injectable({
  providedIn: 'root'
})
export class HttpcallService {

  constructor(private http:HttpClient) { }

   getJobs(){
    return this.http.get<JobsProfile>("http://localhost:5000/jobs");
  }
}
