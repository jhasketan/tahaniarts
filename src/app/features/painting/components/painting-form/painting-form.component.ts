import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  BsModalService
} from 'ngx-bootstrap/modal';
import {
  ToastrService
} from 'ngx-toastr';
import {
  MainService
} from 'src/app/main.service';
import { SharedService } from 'src/app/shared/shared.service';
import {
  Painting
} from '../../models/painting.interface';
import {
  PaintingService
} from '../../painting.service';

@Component({
  selector: 'app-painting-form',
  templateUrl: './painting-form.component.html',
  styleUrls: ['./painting-form.component.scss'],
})
export class PaintingFormComponent implements OnInit {
  painting: Painting | any;
  id: string = '';
  masterData: any = {
    painting_type: [],
    painting_material: [],
    painting_medium: []
  }
  imageURLGenerated: string ='';
  sliderImageURLGenerated: {index:number;url:string;}[] =[];
  // @ViewChild('paintingForm') form :NgForm;
  constructor(
    private paintingService: PaintingService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toaster: ToastrService,
    private mainService: MainService,
    private sharedService: SharedService
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
  addSlide() {
    if(this.painting.images.rest.length<5){
      this.painting.images.rest.push('');
    }
  }
  removeSlide(index: number) {
    if(this.painting.images.rest.length>1){
      this.painting.images.rest.splice(index, 1);
    }
  }

  getMasterData() {
    for (let key in this.masterData) {
      this.masterData[key] = this.mainService.filterMasterDataByType(key);
    }
    console.log('masterData', this.masterData);
  }

  get emptyPainting(): Painting {
    return {
      artist: '',
      createdOn: '',
      description: '',
      images: {
        front: '',
        rest: ['']
      },
      lastUpdatedOn: '',
      material: '',
      medium: '',
      name: '',
      price: {
        unit: '',
        value: 0
      },
      size: {
        height: 0,
        width: 0,
        unit: ''
      },
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

  saveForm(form :any) {
    console.log('form valid--', form.form.valid);
    console.log('form dirty--', form.form.dirty);
    if(form.form.dirty){
      if(form.form.valid){
        console.log('form values--', this.painting);
      }
      else{
        this.toaster.error('Please fill all the mandatory fields to proceed');
      }
    }
    else{
      this.toaster.warning('Nothing to save');
    }
    // debugger;
    // if (this.id) {
    //   this.paintingService
    //     .update(this.painting, this.id)
    //     .then((res) => {
    //       this.toaster.success('Painting Updated Successfully');
    //       this.closeForm();
    //     })
    //     .catch((err) => {
    //       this.toaster.error('Error While Updating Painting');
    //       this.closeForm();
    //     });
    // } else {
    //   this.paintingService
    //     .add(this.painting)
    //     .then((res) => {
    //       this.toaster.success('Painting Added Successfully');
    //       this.closeForm();
    //     })
    //     .catch((err) => {
    //       this.toaster.error('Error While Adding Painting');
    //       this.closeForm();
    //     });
    // }
  }

  closeForm() {
    this.router.navigate(['painting/list']);
  }

  //File upload to firestoe storage
  triggerUploadFileInService(event: any) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `painting/cover/${n}.${file.name.split('.')[1]}`;
    return this.sharedService.uploadFile(file, filePath);
  }

  uploadImage(event: any) {
    this.triggerUploadFileInService(event)
      .then((res:any) => {
        console.log('--uploaded--', res);
        this.imageURLGenerated = res;
        this.painting.images.front = res;//this.removeParam('token', res);
        console.log(this.painting.images.front);
        this.toaster.success('File uploaded successfully');
      })
      .catch((err:any) => {
        console.log('--err--', err);
        this.toaster.error('Error while uploading file');
      });
  }

  uploadSliderImage(event :any, index:number){
    this.triggerUploadFileInService(event)
      .then((res:any) => {
        console.log('--uploaded--', res);
        if(this.sliderImageURLGenerated && this.sliderImageURLGenerated.length){
          this.sliderImageURLGenerated.push({index,url:res});
        }
        else{
          this.sliderImageURLGenerated = [{index,url:res}];
        }
        this.painting.images.rest[index] = res;//this.removeParam('token', res);
        console.log(this.painting.images.rest[index]);
        this.toaster.success('File uploaded successfully');
      })
      .catch((err:any) => {
        console.log('--err--', err);
        this.toaster.error('Error while uploading file');
      });
  }
  deleteFile(path:string, slideIndex?:number){
    this.sharedService.deleteFile(path).subscribe(res=>{
      if(slideIndex){
        this.painting.images.rest[slideIndex-1] =''; 
      }
      else{
        this.painting.images.front='';
      }
      this.toaster.success('File deleted successfully');
    },err=>{
      this.toaster.error('Error while deleting file');
      console.error('File delete error',err);
    });
  }
}
