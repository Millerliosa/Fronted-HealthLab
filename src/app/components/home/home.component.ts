import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

interface LabOrder {
  fecha: string;
  documento: string;
  numero: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  patientName = 'Nombre paciente';
  displayedColumns: string[] = ['select', 'fecha', 'documento', 'numero', 'acciones'];
  dataSource = new MatTableDataSource<LabOrder>([
    { fecha: '9/11/2024', documento: '12345678', numero: 'ORD123' },
    { fecha: '9/18/2024', documento: '09876543', numero: 'ORD456' },
    { fecha: '9/20/2024', documento: '45678901', numero: 'ORD789' },
    { fecha: '9/25/2024', documento: '12312312', numero: 'ORD321' },
    { fecha: '9/30/2024', documento: '98765432', numero: 'ORD654' },
  ]);

  orderNumber: string = '';
  startDate: Date | null = null;
  endDate: Date | null = null;

  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor() { }

  ngOnInit(): void { }

  filterOrders(): void {
    const filteredData = this.dataSource.data.filter(order => {
      const matchesOrderNumber = this.orderNumber ? order.numero.includes(this.orderNumber) : true;
      const orderDate = new Date(order.fecha);
      const matchesDateRange = this.startDate && this.endDate ? (orderDate >= this.startDate && orderDate <= this.endDate) : true;
      return matchesOrderNumber && matchesDateRange;
    });
    this.dataSource.data = filteredData;
  }

  onPageChange(event: PageEvent): void {
    // Handle page change
  }

  closeSession(): void {
    // Handle session close
  }
}
