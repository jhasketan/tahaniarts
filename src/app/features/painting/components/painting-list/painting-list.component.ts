import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrModule, ToastrService } from 'ngx-toastr';
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
    private paintingService: PaintingService,
    private toaster:ToastrService,
    private loader:NgxSpinnerService
  ) {
    this.paintingService.getList().subscribe(res=>{
      this.paintingList = [];
      res.forEach((each) => {
        console.log('--res--', each.payload.doc.data(), each.payload.doc.id);
        this.paintingList.push({
          id: each.payload.doc.id,
          data: each.payload.doc.data(),
        });
      });

      this.paintingList.forEach(each=>{
        each.data.createdOn = each.data.createdOn?new Date(each.data.createdOn.seconds * 1000):each.data.createdOn;
        each.data.lastUpdatedOn = each.data.lastUpdatedOn?new Date(each.data.lastUpdatedOn.seconds * 1000):each.data.lastUpdatedOn;
      })
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

  deletePainting(id:string){
    this.loader.show();
    this.paintingService.delete(id).then(res=>{
      this.loader.hide();
      this.toaster.success('Item deleted successfully');
    },err=>{
      this.loader.hide();
      this.toaster.error('Error while deleting item, please try again later');
    })
  }
}
