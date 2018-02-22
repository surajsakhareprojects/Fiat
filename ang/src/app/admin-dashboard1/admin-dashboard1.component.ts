import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSwitchCase } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { FormsModule } from '@angular/forms';

import {  } from 'assets/global/plugins/jquery.min.js';
import {  } from 'assets/global/plugins/bootstrap/js/bootstrap.min.js';
import {  } from 'assets/global/plugins/js.cookie.min.js';
import {  } from 'assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js';
import {  } from 'assets/global/plugins/jquery.blockui.min.js';
import {  } from 'assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js';

import {  } from 'assets/global/plugins/moment.min.js';
import {  } from 'assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.js';
import {  } from 'assets/global/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js';
import {  } from 'assets/global/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.js';
import {  } from 'assets/global/plugins/clockface/js/clockface.js';
import {  } from 'assets/global/scripts/app.min.js';
import {  } from 'assets/pages/scripts/components-date-time-pickers.min.js';

import {UserService} from '../user.service';

declare var jquery:any;
declare var $:any;



@Component({
  selector: 'app-admin-dashboard1',
  templateUrl: './admin-dashboard1.component.html',
  styleUrls: ['./admin-dashboard1.component.css']
})


export class AdminDashboard1Component implements OnInit {

	
startdate = '';
starthour = '';
startmin = '';

enddate = '';
endhour = '';
endmin = '';
// editStartDate = Date;
// editEndDate = Date;

editStartDate : Date;
editEndDate : Date;

editstarthour: '';
editstartmin: number;

editendhour: number;
editendmin: number;

	app: string;
	league_name:string;
	leaguesdata1={};
	upcomingleagues={};
	pastleagues={};
	totalleagues={};
	combineLatest={};
	loadedCharacter = [];
 
 
  upleaguesObject = {};
  dtTimeObject = {};
  addleaguesArray = [];
  storeaddleague = [];
  field = [];
  config = {};
  league = {};
  
  
  arr1 = [];
  arr2 = [];
  arr3 = [];
	
  
  okeditleague= 'ok';
  editleague: string
  league_id: number;
  view: string;
 
  viewleagues:string;
  addleagues:string;
 
 
  
  upleague_id: number;
  upleague_name: string;
  upstarttime: Date;
  upendtime: Date;
  editstartdatepicker: Date;
  editenddatepicker: Date;
  
  xx={};
  x1={};
  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  description: string ;
  name: string ;
  titleAlert = 'This field is required' ;


viewinfo: string;
leaguesObject = {};
leaguesObjectconfig = {};
appid: string;
secret_key: string;

addconfigname: string;


    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    private fieldArray: Array<any> = [];
    private newAttribute: any = {};

    addFieldValue() {
        this.fieldArray.push(this.newAttribute);
        this.newAttribute = {};
    }

    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }

 addleaguesInfo(){
  this.viewinfo = 'addleagues';
  }

  addleague(addleaguesArray, fieldArray, newAttribute){
	console.log("leaguename::"+this.addleaguesArray['name']);
	var fromDate = new Date(this.addleaguesArray['startdate']);
	var toDate = new Date(this.addleaguesArray['enddate']);

	    var dateObj = new Date();
        var fromdateFormat = GetDateFormat(fromDate);
	  function GetDateFormat(fromDate){
           var month = (fromDate.getMonth() + 1).toString();
           month = month.length > 1 ? month : '0' + month;
           var day = fromDate.getDate().toString();
           day = day.length > 1 ? day : '0' + day;
           return fromDate.getFullYear()  + '-' + month + '-' + day;
       }
     
	    var TodateObj = new Date();
        var todateFormat = GetDateFormatTo(toDate);
	   
	   	  function GetDateFormatTo(toDate){
           var month = (toDate.getMonth() + 1).toString();
           month = month.length > 1 ? month : '0' + month;
           var day = toDate.getDate().toString();
           day = day.length > 1 ? day : '0' + day;
           return toDate.getFullYear()  + '-' + month + '-' + day;
       }

var	  start_dt_hh_mm = fromdateFormat+" "+this.addleaguesArray['starthour']+":"+this.addleaguesArray['startmin']+":00";
var	  end_dt_hh_mm = todateFormat+" "+this.addleaguesArray['endhour']+":"+this.addleaguesArray['endmin']+":00";		

				const body = {
					  secret_key : '98c9a3070ed241a8b3efd3e0ff10a60d',
					  name: this.addleaguesArray['name'],
					  description: this.addleaguesArray['leaguedescription'],
					  start_time : start_dt_hh_mm,
					  configs : '[]',
					  end_time : end_dt_hh_mm
				}
				
	
// Angular 5 http post call				
// this.http.post('https://sandbox.api.playblazer.com/v1/app/10139/leagues/new', body).subscribe(
        // res => {console.log(res);},
        // err => {console.log("Error status: "+err);}
      // );

// jQuery post call	  
$.post('https://sandbox.api.playblazer.com/v1/app/10139/leagues/new', body,
function(data,status){
   debugger;
		console.log("Data-status: "+ data.status); // It will be ok, error
});
	  
  }
  
  editleaguesInfo(league){
	this.viewinfo = 'edit';
    this.upleaguesObject = league;
	this.editstartdatepicker = new Date(this.upleaguesObject['start_time']);
	
	this.editenddatepicker = new Date(this.upleaguesObject['end_time']);

	if(this.upleaguesObject['end_time'] == 'null' || this.upleaguesObject['end_time'] === null)
	{
		this.editenddatepicker = new Date();
	}
	else{console.log('NOT NNNUULL');}
}

updateleague(upleaguesObject, dtTimeObject){
	debugger;
	console.log("upleaguesObject['name']"+ upleaguesObject['name']);
	console.log("upleaguesObject['name']"+ upleaguesObject['description']);
	
	console.log("upleaguesObject['editstartdatepicker']"+ this.editstartdatepicker);
	console.log("dtTimeObject.editstarthour"+this.dtTimeObject);
	console.log("dtTimeObject.editstarthour"+this.dtTimeObject['editstarthour']);
	console.log("dtTimeObject.editstartmin"+this.dtTimeObject['editstartmin']);
	
	console.log("upleaguesObject['editstartdatepicker']"+ this.editenddatepicker);		
	console.log("dtTimeObject.editendhour"+ this.dtTimeObject['editendhour']);
	console.log("dtTimeObject.editendmin"+ this.dtTimeObject['editendmin']);
	
	  var EditStartDateObj = new Date();
        var editfromdate = GetEditSt(this.editstartdatepicker);
	  function GetEditSt(editstartdatepicker){
           var month = (editstartdatepicker.getMonth() + 1).toString();
           month = month.length > 1 ? month : '0' + month;
           var day = editstartdatepicker.getDate().toString();
           day = day.length > 1 ? day : '0' + day;
		   
		   var hours = editstartdatepicker.getHours().toString();
           hours = hours.length > 1 ? hours : '0' + hours;
		   
		   var minutes = editstartdatepicker.getMinutes().toString();
           minutes = minutes.length > 1 ? minutes : '0' + minutes;
		   
           return editstartdatepicker.getFullYear()  + '-' + month + '-' + day + ' '+ hours +':'+ minutes +':00';
       }
	console.log("editfromdate: "+ editfromdate);
	

	    var EditEndDateObj = new Date();
        var editenddate = GetEditTo(this.editenddatepicker);
	  function GetEditTo(editenddatepicker){
           var month = (editenddatepicker.getMonth() + 1).toString();
           month = month.length > 1 ? month : '0' + month;
           var day = editenddatepicker.getDate().toString();
           day = day.length > 1 ? day : '0' + day;
		   
		    var hours = editenddatepicker.getHours().toString();
           hours = hours.length > 1 ? hours : '0' + hours;
		   
		   var minutes = editenddatepicker.getMinutes().toString();
           minutes = minutes.length > 1 ? minutes : '0' + minutes;
		   
           return editenddatepicker.getFullYear()  + '-' + month + '-' + day + ' '+ hours +':'+ minutes +':00';
       }
	   console.log("editfromdate: "+ editenddate);

var	  edit_start_dt_hh_mm = editfromdate+" "+this.dtTimeObject['editstarthour']+":"+this.dtTimeObject['editstartmin']+":00";
var	  edit_end_dt_hh_mm = editenddate+" "+this.dtTimeObject['editendhour']+":"+this.dtTimeObject['editendmin']+":00";			   

console.log("edit_start_dt_hh_mm"+edit_start_dt_hh_mm);
console.log("edit_end_dt_hh_mm"+edit_end_dt_hh_mm);
}

constructor(private http:HttpClient, private fb: FormBuilder){
	       this.rForm = fb.group({
      'name': [null, Validators.compose([Validators.required, Validators.maxLength(50)])],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
	  'startdatepicker': [null],
	  'editstartdatepicker': [null],
	  'editstarthour': [null],
	  'editstartmin': [null],
	  'editenddatepicker': [null],	  
	  'editendhour': [null],
	  'editendmin': [null],
//         'description': [null, Validators.compose([Validators.required])],
      'validate' : ''
    });
}

 leaguesinfo(value: string, appid, secret_key){

//this.secret_key = '98c9a3070ed241a8b3efd3e0ff10a60d';
//    appid = '10139';
this.http.get('https://sandbox.api.playblazer.com/v1/app/'+ appid +'/leagues/username/u1/' + value +'?secret_key='+secret_key )
.subscribe(
    data => {
    this.leaguesObject = data;
        this.leaguesObjectconfig = data['config'];
      // console.log('this.leaguesObject::'+this.leaguesObject);
      // console.log('this.leaguesObjectconfig::'+this.leaguesObjectconfig);
      
  },
  err => {this.leaguesObject = "Error occoured";}
  );
      
  }
  ngOnInit():void {
	   this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('name').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity();
      }
    );
  } //ngOnInit close
  
addPost(post) {
    this.description = post.description;
    this.name = post.name;
	
  }
  
} // class AdminDashboard1Component close

