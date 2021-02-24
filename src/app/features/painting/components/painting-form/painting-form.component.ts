import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { PaintingService } from '../../painting.service';

@Component({
  selector: 'app-painting-form',
  templateUrl: './painting-form.component.html',
  styleUrls: ['./painting-form.component.scss']
})
export class PaintingFormComponent implements OnInit {

  painting:any;
  id:string = '';
  constructor(private paintingService: PaintingService, private router:Router, private activatedRoute:ActivatedRoute, private toaster:ToastrService) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res=>{
      console.log('--params--', res);
      this.id = res.id;
      this.getPaintingById(res.id);
    })
  }

  getPaintingById(id:string){
    this.paintingService.getById(id).subscribe(res=>{
      console.log('--painting--', res);
      // this.painting = res;
    })
  }

  saveForm(){
    if(this.id){
      this.paintingService.update(this.painting, this.id).then(res=>{
        this.toaster.success('Painting Updated Successfully');
        this.closeForm();
      }).catch(err=>{
        this.toaster.error('Error While Updating Painting');
        this.closeForm();
      });
    }
    else{
      this.paintingService.add(this.painting).then(res=>{
        this.toaster.success('Painting Added Successfully');
        this.closeForm();
      }).catch(err=>{
        this.toaster.error('Error While Adding Painting');
        this.closeForm();
      });
    }
  }

  closeForm(){
    this.router.navigate(['painting/list']);
  }
}
