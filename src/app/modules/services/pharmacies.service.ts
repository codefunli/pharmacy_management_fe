import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmaciesService {

  private baseUrl = 'http://localhost:8080/pharmacy/api/v1/pharmacies';
  private exportUrl = 'http://localhost:8080/pharmacy/api/v1/pharmacies/export'

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // Pharmacy area

  getMedicineList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createMedicine(medicine: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, medicine);
  }

  exportMedicine(exportMedicine: Object): Observable<Object> {
    console.log('here')
    return this.http.post(`${this.exportUrl}`, exportMedicine);
  }
}
