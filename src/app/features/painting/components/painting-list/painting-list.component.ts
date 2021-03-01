import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PaintingService } from '../../painting.service';
import { PaintingFormComponent } from '../painting-form/painting-form.component';
import { PaintingReviewComponent } from '../painting-review/painting-review.component';
@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrls: ['./painting-list.component.scss'],
})
export class PaintingListComponent implements OnInit {
  paintingList : any[] = [];
  constructor(
    private modalService: BsModalService,
    private paintingService: PaintingService
  ) {
    this.paintingList = [];
    this.paintingService.getList().subscribe(res=>{
      // this.paintingList.push(res[0]);
      // this.paintingList.push(res[0]);
      // this.paintingList.push(res[0]);
      res.forEach((each) => {
        console.log('--res--', each.payload.doc.data(), each.payload.doc.id);
        this.paintingList.push({
          id: each.payload.doc.id,
          data: each.payload.doc.data(),
        });
        this.paintingList.push({
          id: each.payload.doc.id,
          data: each.payload.doc.data(),
        });
        this.paintingList.push({
          id: each.payload.doc.id,
          data: each.payload.doc.data(),
        });
        this.paintingList.push({
          id: each.payload.doc.id,
          data: each.payload.doc.data(),
        });
      });
      console.log('<--painting list-->', this.paintingList);
    })
  }

  ngOnInit(): void {}
  openModal() {
    const modalRef: BsModalRef = this.modalService.show(PaintingFormComponent, {
      class: 'modal-lg',
    });
    modalRef.content.closeBtnName = 'Close';
  }

  openPaintingModal(painting? : any) {
    const modalRef: BsModalRef = this.modalService.show(
      PaintingReviewComponent,
      { class: 'modal-lg' }
    );
    modalRef.content.closeBtnName = 'Close';
    modalRef.content.painting = painting;
  }
}
