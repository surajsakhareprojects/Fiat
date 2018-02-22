import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class ColourMasterService {
    constructor (private _http: Http){}
public dataObj = {};
public master_colour_name :string;

public saveColourName(yoyo){
     debugger;
     //colour_name = "yellow";
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWRpdG9yX2lkIjoiMSIsImF1ZGl0b3JfbmFtZSI6IlN1cmFqIiwiZmlyc3ROYW1lIjoiU3VyYWoiLCJsYXN0TmFtZSI6IlN1cmFqIiwiaWF0IjoxNTE5MDIyNDc3LCJleHAiOjE1MTkxMDg4Nzd9.gZ2DhaycV5QGpG5ImuyiVooorcgt3AMGnz0J8O-KBLw'
        })
      };
     
    let _url:string = 'http://118.102.250.138:3033/v1/masterColours';
    // let jsonColourData: any = {master_colour_name:colour_name}; 
    // let body = JSON.stringify(jsonColourData);
    return this._http.post(_url, httpOptions, yoyo)
    .map((res:Response) => res.json())
    .catch(this._errorHandler)
}

private _errorHandler(error: Response){
    console.error('Error:: '+ error);
    return Observable.throw(error || 'Some error occured on Server Side');
}

}



