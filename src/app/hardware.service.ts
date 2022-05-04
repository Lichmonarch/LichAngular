import { Injectable } from '@angular/core';
import { Hardware } from './hardware';
import { HARDWARE } from './hardware-repository';
import {catchError, Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {SERVER_API_URL} from "./constants/app.constants";
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  private hardwareURL = `${SERVER_API_URL}/hardware`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient
  ) { }

  getAllHardware(): Observable<Hardware[]> {
    return this.http.get<Hardware[]>(this.hardwareURL)
      .pipe(
        tap(_ => console.log('fetched hardware')),
        catchError(this.handleError<Hardware[]>('getAllHardware', []))
      );
  }

  getHardware(id: string | null): Observable<Hardware> {
    const url = `${this.hardwareURL}/${id}`;
    return this.http.get<Hardware>(url)
      .pipe(
        tap(_ => console.log(`fetched hardware id=${id}`)),
        catchError(this.handleError<Hardware>(`getHardware id=${id}`))
      );
  }

  updateHardware(hardware: Hardware): Observable<any> {
    const url = `${this.hardwareURL}/${hardware.id}`;
    return this.http.put(url, hardware).pipe(
      tap(_ => console.log(`updated hardware id=${hardware.id}`)),
      catchError(this.handleError<any>('updateHardware'))
    );
  }

  addHardware(hardware: Hardware): Observable<Hardware> {
    return this.http.post<Hardware>(this.hardwareURL, hardware).pipe(
      tap((newHardware: Hardware) => console.log(`added hardware w/ ID=${newHardware.id}`)),
      catchError(this.handleError<Hardware>('addHardware'))
    );
  }

  deleteHardware(hardware: Hardware | string): Observable<Hardware> {
    const id = typeof hardware === 'string' ? hardware : hardware.id;
    const url = `${this.hardwareURL}/${id}`;

    return this.http.delete<Hardware>(url).pipe(
      tap(_ => console.log(`deleted hardware ID=${id}`)),
      catchError(this.handleError<Hardware>('deleteHardware'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }

}
