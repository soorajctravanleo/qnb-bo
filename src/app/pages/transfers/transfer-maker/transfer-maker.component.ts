import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'qnb-transfer-maker',
  templateUrl: './transfer-maker.component.html',
  styleUrls: ['./transfer-maker.component.scss'],
})
export class TransferMakerComponent implements OnInit {

  showSearchBar = false;
  searchForm: FormGroup;
  showRejectedTable = false;
  showSearchTable = false;
  rejectedHeadArray = ['Reference Number', 'Debit Account Number', 'Reject Count', 'Request By', 'Requested Date', 'Rejected By', 'Rejected Date', 'Status', 'Comments'];
  constructor() { }


  ngOnInit(): void {
    this.prepareForm();
  }
  prepareForm() {
    this.searchForm = new FormGroup({
      'search': new FormGroup({
        'searchKey': new FormControl(null, [Validators.required]),
        'searchValue': new FormControl(null, [Validators.required]),
      }),
    });
  }
  onChange(event) {
    if (event === 'search') {
      this.showSearchBar = true;
      this.showSearchTable = false;
      this.showRejectedTable = false;
    } else {
      this.resetForm();
      this.showSearchBar = false;
      this.showSearchTable = false;
      this.showRejectedTable = true;
    }
  }
  onSubmit() {
    this.showSearchTable = true;
  }
  resetForm() {

    this.showSearchTable = false;
    this.showRejectedTable = false;
    this.searchForm.reset();
    this.searchForm.markAsPristine();
    this.searchForm.markAsUntouched();
  }

}
