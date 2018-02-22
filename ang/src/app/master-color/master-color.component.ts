import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
// import { ColourMasterService } from '../services/masters/colourmaster.service';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-master-color',
  templateUrl: './master-color.component.html',
  styleUrls: ['./master-color.component.css']
  // , providers:[ColourMasterService]
})
export class MasterColorComponent implements OnInit {

  public masterColoursobj : any;
  public deactivemasterColoursobj: any;
  checkboxValue:boolean;
  public viewColours: string;
  public colourResponseObj= {};
 // public addColourObject: any = {id: '', colour_Name:'', colour_IsActive:''}
 public addColourObject: any = {"master_colour_name": ''};
 public yoyo: any;
  // constructor(private http:HttpClient, private colourMasterService: ColourMasterService) { }

  constructor(private http:HttpClient) { }

  refreshMasterColoursTbl(){
    this.getColorMasterData();
  }
  

  ShowColourTable(){
    this.viewColours = 'addColours';
  }

    public addColour(e): void{
      e.preventDefault();
      debugger;
      let colour_name =  e.target.elements[0].value;
      const addColourObject = { master_colour_name : colour_name}
      let jsonColourObjectBody = JSON.stringify(addColourObject);

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWRpdG9yX2lkIjoiMSIsImF1ZGl0b3JfbmFtZSI6IlN1cmFqIiwiZmlyc3ROYW1lIjoiU3VyYWoiLCJsYXN0TmFtZSI6IlN1cmFqIiwiaWF0IjoxNTE5MDIyNDc3LCJleHAiOjE1MTkxMDg4Nzd9.gZ2DhaycV5QGpG5ImuyiVooorcgt3AMGnz0J8O-KBLw'
  })
};

// Below code for post api call using services
// this.colourMasterService.saveColourName(jsonColourObjectBody).subscribe(
//   (res) => {
//     this.masterColoursobj = res['data'];
//     if(res['status'] == true &&  res['messageCode'] == 'MCO001') {
//      alert("You added "+res['data']['master_colour_name']+" colour successfully..");
//         }else if(res['status'] == false) {
//           alert("Colour NOT Added");
//         }else{
//           alert("Server Not working, Please Try after some time or contact to Administrator");
//         }
//   },
//   err => {alert( "Error occoured");
//   alert("status"+err['status']+ + "Message Code::"+ err['messageCode']);
// }
// );
let url = "http://118.102.250.138:3033/v1/masterColours";
this.http.post(url, jsonColourObjectBody, httpOptions)
.subscribe(
    (res) => {
    
      if(res['status'] == true &&  res['messageCode'] == 'MCO001') {
       alert("You added "+res['data']['master_colour_name']+" colour successfully..");
          }else if(res['status'] == false) {
            alert("Colour NOT Added");
          }else{
            alert("Server Not working, Please Try after some time or contact to Administrator");
          }
    },
    err => {alert( "Error occoured");
    alert("status"+err['status']+ + "Message Code::"+ err['messageCode']);
  }
    );

      this.getColorMasterData();
}


      editColour(colour_id:number){
        alert("you want to edit"+ colour_id);
        this.viewColours = 'editColours';
      }

      onIsActiveChange(colour_id:number, isActive:string){
        debugger;
        if(confirm("Are you sure ?")){
          if(isActive)
          {
            alert("Not Ceck");
            isActive = 'false';
          }else{
            alert("Check");
            isActive = 'true';
          }
          let url = "http://118.102.250.138:3033/v1/masterColours/"+colour_id;
// if(isActive == 'true'){
//   isActive = 'false';
// }else{
//   isActive = 'true';
// }

          const deactiveColourObject = { is_active : isActive }
          let jsonColourObjectBody = JSON.stringify(deactiveColourObject);

          //deactivateColor = {}
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWRpdG9yX2lkIjoiMSIsImF1ZGl0b3JfbmFtZSI6IlN1cmFqIiwiZmlyc3ROYW1lIjoiU3VyYWoiLCJsYXN0TmFtZSI6IlN1cmFqIiwiaWF0IjoxNTE5MDIyNDc3LCJleHAiOjE1MTkxMDg4Nzd9.gZ2DhaycV5QGpG5ImuyiVooorcgt3AMGnz0J8O-KBLw'
            })
          };

this.http.put(url, deactiveColourObject, httpOptions).subscribe(
  (res) => {
    this.deactivemasterColoursobj = res['data'];
    // alert("You have changed staus of"+colour_id);
    alert("You have changed staus of "+res['data']['master_colour_name']+" colour successfully..");
  });
        }else{alert("You made no change");}
      } //onIsActiveCange Function Close

      deleteColour(colour_id:number){
//         if(confirm("Are you sure ?")){
//           let url = "http://118.102.250.138:3033/v1/masterColours/"+colour_id;

//           const deactiveColourObject = { is_active : false }
//           let jsonColourObjectBody = JSON.stringify(deactiveColourObject);

//           //deactivateColor = {}
//           const httpOptions = {
//             headers: new HttpHeaders({
//               'Content-Type':  'application/json',
//               'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWRpdG9yX2lkIjoiMSIsImF1ZGl0b3JfbmFtZSI6IlN1cmFqIiwiZmlyc3ROYW1lIjoiU3VyYWoiLCJsYXN0TmFtZSI6IlN1cmFqIiwiaWF0IjoxNTE5MDIyNDc3LCJleHAiOjE1MTkxMDg4Nzd9.gZ2DhaycV5QGpG5ImuyiVooorcgt3AMGnz0J8O-KBLw'
//             })
//           };

// this.http.put(url, deactiveColourObject, httpOptions).subscribe(
//   (res) => {
//     this.deactivemasterColoursobj = res['data'];
//   });
//         }
//         else{
//           alert("Cant Delete!!!");
//         }
      }

       getColorMasterData(){
        this.http.get("http://118.102.250.138:3033/v1/masterColours")
        .subscribe(
            (res:Response) => {
              this.masterColoursobj = res['data'];
          //  console.log(res);
          //  console.log("this.masterColoursobj "+ this.masterColoursobj);
          },
          err => {alert( "Error occoured");}
          );
      }

      ngOnInit() {
        this.getColorMasterData();
    }

}
