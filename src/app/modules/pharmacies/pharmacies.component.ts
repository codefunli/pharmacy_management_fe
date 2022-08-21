import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { PharmaciesService } from '../services/pharmacies.service';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.scss']
})
export class PharmaciesComponent implements OnInit {

  employees!: Observable<Employee[]>;
  displayedColumns: string[] = ['ID','FirstName', 'LastName', 'Email', 'Actions'];

  constructor(private pharmaciesService: PharmaciesService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.pharmaciesService.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.pharmaciesService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }

  employeeUpdate(id: number){
    this.router.navigate(['update', id]);
  }

  

}

