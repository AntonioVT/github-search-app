import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BackendApiService {

  baseUrlAndPort: string = 'http://localhost:6789';
  
  constructor(private http: Http) { }

  getAllMedicalRecords() {

    return this.http.get( this.baseUrlAndPort + '/medicalrecords' ).toPromise();

  }

}
