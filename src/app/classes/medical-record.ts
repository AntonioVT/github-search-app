export class MedicalRecord {

  public idmedicalrecords: number;
  public patientname: string;
  public recorddate: string;
  public diagnosis: string;
  public prescription: string;

  public setRecordInfo(id: number, name: string, creationdate: string, diagnosis: string, prescription: string) {
    this.idmedicalrecords = id;
    this.patientname = name;
    this.recorddate = creationdate;
    this.diagnosis = diagnosis;
    this.prescription = prescription;
  }

}
