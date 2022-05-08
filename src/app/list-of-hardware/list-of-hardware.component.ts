import {Component, Input, OnInit} from '@angular/core';
import { Hardware } from '../hardware';
import { HardwareService} from "../hardware.service";
import {ActivatedRoute, Router} from '@angular/router';
import {catchError, Observable, of, switchMap, tap} from "rxjs";
import {SERVER_API_URL} from "../constants/app.constants";
import {HttpClient} from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-hardware',
  templateUrl: './list-of-hardware.component.html',
  styleUrls: ['./list-of-hardware.component.css']
})
export class ListOfHardwareComponent implements OnInit {

  hardware: Hardware[] = [];
  selectedHardware!: Hardware;
  private hardwareURL = `${SERVER_API_URL}/hardware`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private hardwareService: HardwareService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getAllHardware();
  }

  getAllHardware(): void {
    this.hardwareService.getAllHardware()
      .subscribe(hardware => this.hardware = hardware);
  }

  navigateToEdit(hardware: Hardware) {
    this.router.navigate([`/hardware/edit/${hardware.id}`]);
  }

  navigateToDetails(hardware: Hardware) {
    this.router.navigate([`/hardware/${hardware.id}`]);
  }

  deleteStudent(hardware: Hardware | string): Observable<Hardware> {
    const id = typeof hardware === 'string' ? hardware : hardware.id;
    const url = `${this.hardwareURL}/${id}`;
    return this.http.delete<Hardware>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted hardware ID=${id}`)),
      catchError(this.handleError<Hardware>('deleteHardware'))
    );
  }
  onSelect(hardware: Hardware) {
    this.selectedHardware = hardware;
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }

}
/*
listOfHardware: Hardware[] | undefined;
selectedHardware: Hardware | undefined;


constructor(private hardwareService: HardwareService, private router: Router) { }

ngOnInit(): void {
  this.getHardware();
}
getHardware(): void {
  this.hardwareService.getHardware().subscribe(hardware => this.listOfHardware = hardware);
}
onSelect(hardware: Hardware): void {
  this.selectedHardware = hardware;
}
navigateToDetails(hardware: Hardware) {
  this.router.navigate([`/hardware/detail/${hardware.id}`]);
}
*/
