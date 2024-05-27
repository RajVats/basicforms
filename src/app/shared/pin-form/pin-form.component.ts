
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pin-form',
  templateUrl: './pin-form.component.html'
})
export class PinFormComponent implements OnInit {
  pinForm!: FormGroup;
  privacyOptions = ['Public', 'Private'];

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<PinFormComponent>) { }

  ngOnInit(): void {
    this.pinForm = this.fb.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      collaborators: [[]],
      privacy: ['Public', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.pinForm.valid) {
      this.dialogRef.close(this.pinForm.value);
    }
  }
}
