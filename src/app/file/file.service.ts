import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Ifile } from '../file/files';
import 'rxjs/add/operator/map';

@Injectable()
 export class caseService {
     tableData:Ifile[];
constructor(private http:Http){}

getCases():Observable<Ifile[]>{
    return this.http.get('../assets/boiler.json')
    .map((result:Response)=>result.json())
    }
    }

