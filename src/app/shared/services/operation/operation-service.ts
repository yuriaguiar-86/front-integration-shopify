import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operation } from '../../../core/interface/operation';

@Injectable({
  providedIn: 'root',
})
export class OperationService {
  private apiUrl = '/api/v1/operations';

  constructor(private http: HttpClient) { }

  getAllOperations(): Observable<Operation[]> {
    return this.http.get<Operation[]>(this.apiUrl);
  }

  getOperationById(id: any): Observable<Operation> {
    return this.http.get<Operation>(`${this.apiUrl}/${id}`);
  }

  createOperation(operation: Operation): Observable<Operation> {
    return this.http.post<Operation>(this.apiUrl, operation);
  }

  updateOperation(id: any, operation: Operation): Observable<Operation> {
    return this.http.put<Operation>(`${this.apiUrl}/${id}`, operation);
  }

  deleteOperation(id: any): Observable<Operation> {
    return this.http.delete<Operation>(`${this.apiUrl}/${id}`);
  }
}
