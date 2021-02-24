import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-painting-review',
  templateUrl: './painting-review.component.html',
  styleUrls: ['./painting-review.component.scss'],
})
export class PaintingReviewComponent implements OnInit {
  @Input() painting: any;
  constructor(private modalService: BsModalService, private router: Router) {}

  ngOnInit(): void {}
  close() {
    this.modalService.hide();
  }
  openUpdateForm(paintingId : any) {
    if(paintingId){
      this.router.navigate(['/painting/edit/'+ paintingId]);
      this.modalService.hide();
    }
  }
}
