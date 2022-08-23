import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { PharmaciesService } from '../services/pharmacies.service';
import { Medicine } from 'src/app/model/medicine';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.scss']
})
export class PharmaciesComponent implements OnInit {

  search : String ="";
  dataSource!: MatTableDataSource<any>;
  employees!: Observable<Employee[]>;
  medicines!: Observable<Medicine[]>;
  displayedColumns: string[] = ['ID','MedicineName', 'MedicineCompany', 'Category', 'Origin','ManufactureDate','ExpireDate','Amount','Unit','Status', 'Actions'];

  constructor(private pharmaciesService: PharmaciesService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.medicines = this.pharmaciesService.getMedicineList();
    // Thắng
    this.pharmaciesService.getMedicineList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
   })
  }

  deleteMedicine(id: number) {
    this.pharmaciesService.deleteMedicine(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  medicineDetails(id: number){
    this.router.navigate(['details', id]);
  }

  medicineUpdate(id: number){
    this.router.navigate(['update', id]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  report(){
    this.pharmaciesService.getReport().subscribe()
  }
  

}

