import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-painting-review',
  templateUrl: './painting-review.component.html',
  styleUrls: ['./painting-review.component.scss']
})
export class PaintingReviewComponent implements OnInit {

  constructor(private modalService:BsModalService) { }

  ngOnInit(): void {
  }
  close(){
    this.modalService.hide();
  }
}
