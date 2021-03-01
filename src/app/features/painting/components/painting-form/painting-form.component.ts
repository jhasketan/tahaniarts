import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { MainService } from 'src/app/main.service';
import { Painting } from '../../models/painting.interface';
import { PaintingService } from '../../painting.service';

@Component({
  selector: 'app-painting-form',
  templateUrl: './painting-form.component.html',
  styleUrls: ['./painting-form.component.scss'],
})
export class PaintingFormComponent implements OnInit {
  painting: Painting | any;
  id: string = '';
  masterData:any = {
    painting_type:[],
    painting_material:[],
    painting_medium:[]
  }

  constructor(
    private paintingService: PaintingService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toaster: ToastrService,
    private mainService:MainService
  ) {
    this.painting = this.emptyPainting;
  }

  ngOnInit(): void {
    this.getMasterData();
    this.activatedRoute.params.subscribe((res) => {
      console.log('--params--', res);
      this.id = res.id;
      this.getPaintingById(res.id);
    });
  }

  getMasterData(){
    for(let key in this.masterData){
      this.masterData[key] = this.mainService.filterMasterDataByType(key);
    }
    console.log('masterData', this.masterData);
  }

  get emptyPainting(): Painting {
    return {
      artist: '',
      createdOn: '',
      description: '',
      images: { front: '', rest: [] },
      lastUpdatedOn: '',
      material: '',
      medium: '',
      name: '',
      price: { unit: '', value: 0 },
      size: { height: 0, width: 0, unit: '' },
      type: '',
      updatedBy: '',
    };
  }

  getPaintingById(id: string) {
    this.paintingService.getById(id).subscribe((res) => {
      console.log('--painting--', res);
      if (res) {
        this.painting = res;
      } else {
        this.painting = this.emptyPainting;
      }
    });
  }

  saveForm() {
    if (this.id) {
      this.paintingService
        .update(this.painting, this.id)
        .then((res) => {
          this.toaster.success('Painting Updated Successfully');
          this.closeForm();
        })
        .catch((err) => {
          this.toaster.error('Error While Updating Painting');
          this.closeForm();
        });
    } else {
      this.paintingService
        .add(this.painting)
        .then((res) => {
          this.toaster.success('Painting Added Successfully');
          this.closeForm();
        })
        .catch((err) => {
          this.toaster.error('Error While Adding Painting');
          this.closeForm();
        });
    }
  }

  closeForm() {
    this.router.navigate(['painting/list']);
  }
}
