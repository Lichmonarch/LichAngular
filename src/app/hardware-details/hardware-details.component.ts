import {Component, Input, OnInit} from '@angular/core';
import { Hardware } from '../hardware';
import {ActivatedRoute} from "@angular/router";
import {HardwareService} from "../hardware.service";
import {HARDWARE} from "../hardware-repository";
import {ListOfHardwareComponent} from "../list-of-hardware/list-of-hardware.component";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-hardware-details',
  templateUrl: './hardware-details.component.html',
  styleUrls: ['./hardware-details.component.css']
})
export class HardwareDetailsComponent implements OnInit {

  @Input() hardware: Hardware | undefined;

  constructor(
    private route: ActivatedRoute,
    private hardwareService: HardwareService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
          const id = params.get('id');
          return this.hardwareService.getHardware(id);
        }
      )
    ).subscribe((hardware: Hardware) => {
      this.hardware = hardware;
    });
  }

}


/*
    unit: HardwareDTO;

  constructor(private service: ResponseService,
              private route: ActivatedRoute) {
      this.unit = new HardwareDTO();
  }

  ngOnInit(): void {
      this.service.getHardwareCode(this.route.snapshot.params['code'])
          .subscribe(s => this.unit = s);
  }
 */
