import { Ifile } from './../../file/files';
import { caseService } from './../../file/file.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})

export class FirstComponentComponent implements OnInit {
    tableData:Ifile[];
    constructor(private caseServ : caseService){}
    ngOnInit(){
        this.caseServ.getCases().subscribe(data=>{this.tableData=data});
    }
}