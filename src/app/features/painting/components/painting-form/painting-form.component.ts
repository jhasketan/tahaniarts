import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-painting-form',
  templateUrl: './painting-form.component.html',
  styleUrls: ['./painting-form.component.scss']
})
export class PaintingFormComponent implements OnInit {

  constructor(private modalService:BsModalService) { }

  ngOnInit(): void {
  }
  close(){
    this.modalService.hide();
  }
}
