import { Component, OnInit } from '@angular/core';
import { BackendApiService } from './../../services/backendapi.service';
import { MedicalRecord } from './../../classes/medical-record';

@Component({
  selector: 'app-allmedicalrecords',
  templateUrl: './allmedicalrecords.component.html',
  styleUrls: ['./allmedicalrecords.component.css']
})
export class AllmedicalrecordsComponent implements OnInit {

  records: MedicalRecord[] = new Array();

  constructor(private backendapi: BackendApiService) {
  }

  ngOnInit() {
    this.getRecords();
  }

  getRecords() {

    this.backendapi.getAllMedicalRecords().then( response => {

      // const data = response.json();
      // console.log(data);
      this.records = response.json();

    }).catch( err => {

      console.log(err);

    });
  }

}
