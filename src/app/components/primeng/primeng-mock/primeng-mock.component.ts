import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../../../services/json-placeholder.service';
import { Car } from '../../../models/car';

@Component({
  selector: 'app-primeng-mock',
  templateUrl: './primeng-mock.component.html',
  styleUrls: ['./primeng-mock.component.css']
})
export class PrimengMockComponent implements OnInit {
  selectedCars: any[] = [];
  availableCars: any[] = [];
  draggedCar: Car;
  car: Car;
  selectedPropertyNameElement: any;

  constructor(private jsonPlaceholderService: JsonPlaceholderService) { }

  ngOnInit() {
    this.selectedCars = [];
    this.jsonPlaceholderService.getRows4TurboTableFile(`cars-small`)
      .subscribe(res => {
        this.availableCars = res;
      });
  }

  onDragStart(event: any, aCar: Car) {
    this.draggedCar = aCar;
    console.log(`@001 onDragStart:${aCar}`, event, aCar);

  }

  onDrag(event: any) {
    console.log(`@002 onDrag`, event);

  }

  onDragEnd(event: any) {
    console.log(`@003 onDragend`, event);
    this.draggedCar = undefined;

  }

  onDragEnter(event: any) {
    console.log(`@004 onDragEnter`, event);

  }

  onDrop(event: any) {
    console.log(`@005 onDrop`, event, this.draggedCar);
    if (this.draggedCar) {
      const newCar = Object.assign({}, this.draggedCar);
      newCar.vin = Math.random().toString(36).slice(2);
      this.selectedCars = [...this.selectedCars, newCar];
      this.draggedCar = undefined;
    }
  }

  onDragLeave(event: any) {
    console.log(`@006 onDragLeave`, event);

  }

  onEdit(event: any) {

  }

  onRowClick(event: any) {

  }
  onEditInit(event: any) {

  }

  onRowSelect(event: any) {

  }

}
