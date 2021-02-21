import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PaintingFormComponent } from '../painting-form/painting-form.component';

@Component({
  selector: 'app-painting-edit-preview',
  templateUrl: './painting-edit-preview.component.html',
  styleUrls: ['./painting-edit-preview.component.scss']
})
export class PaintingEditPreviewComponent implements OnInit {

  constructor(private modalService:BsModalService) { }

  ngOnInit(): void {
  }
  openModal(){
    const initialState = {
      title: 'Modal with component'
    };
    const modalRef:BsModalRef = this.modalService.show(PaintingFormComponent,{});
    modalRef.content.closeBtnName = 'Close';
  }
}
