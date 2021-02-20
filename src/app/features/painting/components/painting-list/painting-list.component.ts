import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PaintingFormComponent } from '../painting-form/painting-form.component';
import { PaintingReviewComponent } from '../painting-review/painting-review.component';
@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrls: ['./painting-list.component.scss']
})
export class PaintingListComponent implements OnInit {
  
  constructor(private modalService: BsModalService) {
    
  }

  ngOnInit(): void {
    
  }
  openModal(){
    const initialState = {
      title: 'Modal with component'
    };
    const modalRef:BsModalRef = this.modalService.show(PaintingFormComponent,{});
    modalRef.content.closeBtnName = 'Close';
  }
  openPaintingModal(){
    const initialState = {
      title: 'Modal with component'
    };
    const modalRef:BsModalRef = this.modalService.show(PaintingReviewComponent,{});
    modalRef.content.closeBtnName = 'Close';
  }
  }

