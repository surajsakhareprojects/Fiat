import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { UserService } from '../user.service';
// import { ProfileService } from '../services/loginservices/profile.service';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
  // ,providers:[ProfileService]
})
export class LoginFormComponent implements OnInit {
  public href: string = "";
  //public profileObject : any ={name:'', job:'', city:'', id:''}
  public loginObject: any = {username: '', password:''};
  public loginObjjson= {};
  // public status = {};
  public jsonloginbody :any;
  // constructor(private router:Router) { }
  // constructor(private router:Router, private user:UserService, private profileService: ProfileService) { }

  constructor(private router:Router, private user:UserService, private http:Http) { }

  ngOnInit() {
    this.href = this.router.url;
  }



  public loginUser(e): void {
  	e.preventDefault();
  	console.log(e);
  	var username = e.target.elements[0].value;
    var usrPassword = e.target.elements[1].value;
    // const addColourObject = {auditor_name: username, password: usrPassword}
    // let jsonloginbody = JSON.stringify(addColourObject);
    
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type':  'application/json',
//         'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWRpdG9yX2lkIjoiMSIsImF1ZGl0b3JfbmFtZSI6IlN1cmFqIiwiZmlyc3ROYW1lIjoiU3VyYWoiLCJsYXN0TmFtZSI6IlN1cmFqIiwiaWF0IjoxNTE5MDIyNDc3LCJleHAiOjE1MTkxMDg4Nzd9.gZ2DhaycV5QGpG5ImuyiVooorcgt3AMGnz0J8O-KBLw'
//       })
//     };

//     let url = "http://118.102.250.138:3033/v1/masterColours";
// this.http.post(url, httpOptions, jsonloginbody)
// .subscribe(
//     (res) => {
//       if(res['status']) {
//               this.user.setUserLoggedIn();
//               this.router.navigate(['dashboard']);
//             }else if(!(res['status'])) {
//                   if(res['error'].messageCode == 'MAU016')
//                   {
//                     alert("Invalid Username");
//                   }
//                   else if(res['error'].messageCode == 'MAU015')
//                   {
//                     alert("Invalid Password");
//                   }
//             }else{
//               alert("Server Not working");
//             }
//     },
//     err => {alert( "Error occoured");
//     alert("status"+err['status']+ + "Message Code::"+ err['messageCode']);
//   }
//     );



    // Service function not working for login
  //  this.profileService.saveProfile(username,usrPassword).subscribe(
  //   (res: any) => {
  //     this.loginObjjson = res; 
  //       if(res.status == true) {
  //       this.user.setUserLoggedIn();
  //       this.router.navigate(['dashboard']);
  //     }else if(res.status == false) {
  //           if(res.error.messageCode == 'MAU016')
  //           {
  //             alert("Invalid Username");
  //           }
  //           else if(res.error.messageCode == 'MAU015')
  //           {
  //             alert("Invalid Password");
  //           }
  //     }else{
  //       alert("Server Not working");
  //     }
  //   },
  //   error => {
  //     alert("ERROR"+error);
  //   });



  //  .subscribe(
  //   // data => {
  //     res => this.loginObject = res
  //     /* all data is available here */
  // //     console.log("Is Editable ... " + JSON.stringify(this.loginObject))
  // //     if(this.loginObject.status == 'true') {
  // //       this.user.setUserLoggedIn();
  // //       this.router.navigate(['dashboard']);
  // //     }else if(this.loginObject.status == 'false') {
  // // alert("Credential Not working");
  // //     }else{
  // //       alert("Server Not working");
  // //     }
  // // }
  //   )
  //  this.loginObjjson = this.loginObject['data'];
  //   console.log("this.loginObject"+this.loginObjjson['auditor_name']);
  //   console.log("this.loginObject_Name "+this.loginObject['data']['auditor_name']);
  
  //  console.log("usrPassword"+ this.loginObject);
  //  console.log("res"+ res);
  if(username == 'Suraj' && usrPassword == 'tnex123') {  
//   if(this.loginObject.status == 'true') {
      this.user.setUserLoggedIn();
  		this.router.navigate(['dashboard']);
    }else
//      if(this.loginObject.status == 'false') {
// alert("Credential Not working");}else
    {
      alert("Server Not working");
    }
  }

public saveUserProfile(): void{
// this.profileService.saveProfile().subscribe(res => this.profileObject = res);
}

}
