import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tahaniarts';
  constructor(private service:MainService){

  }

  ngOnInit(){
    this.getMaster();
  }

  getMaster(){
    this.service.getMaster().subscribe(res=>{
      console.log('masterData-->',res);
    })
  }
}
