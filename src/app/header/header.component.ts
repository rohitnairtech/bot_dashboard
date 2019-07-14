import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // showChannels:boolean = false;
  // showData:boolean = false;
  // showAlerts:boolean = false;
  showProfileForm:boolean;


  constructor() { }

  ngOnInit() {
  }

  // toggleChannels() {
  //   this.showChannels = !this.showChannels;
  //   // if(this.showChannels){
  //   //  this.showData = false;
  //   //  this.showAlerts =false;
  //   }
  
 //     }

 //  toggleData(){
 // 	this.showData = !this.showData; 
 //   if(this.showData){
 //     this.showChannels = false;
 //     this.showAlerts =false;
 //    }
 //   }   

 // toggleAlerts(){
 // 	this.showAlerts = !this.showAlerts;
 //   if(this.showAlerts){
 //     this.showData = false;
 //     this.showChannels =false;
 //    } 
 //  }   


// mouseEnter(){
// this.showChannels=true;
// }


// mouseLeave(){
//      this.showChannels=false;
//    }


profileBtn(){
this.showProfileForm= !this.showProfileForm;

}
}
