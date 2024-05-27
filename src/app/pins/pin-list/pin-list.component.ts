import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PinFormComponent } from 'src/app/shared/pin-form/pin-form.component';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html'
})
export class PinListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'image', 'collaborators', 'privacy'];
  pins: any[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadPins();
  }

  loadPins(): void {
    this.pins = JSON.parse(localStorage.getItem('pins') || '[]');
  }

  openPinForm(): void {
    const dialogRef = this.dialog.open(PinFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.pins.push(result);
        localStorage.setItem('pins', JSON.stringify(this.pins));
      }
    });
  }
}
