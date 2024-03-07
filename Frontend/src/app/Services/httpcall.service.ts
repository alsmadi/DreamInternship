import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JobsProfile } from '../Interfaces/JobsClass';

@Injectable({
  providedIn: 'root'
})
export class HttpcallService {
  URL="https://internshipbackend-cl0t.onrender.com/jobs"
 // localhosturl="http://localhost:5000/jobs"
  constructor(private http:HttpClient) { }
  
   getJobs(){
    return this.http.get<JobsProfile>(this.URL);
  }
}
