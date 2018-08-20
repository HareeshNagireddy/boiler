import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {
SearchMovie : any[];
  constructor() { 
    this.SearchMovie = ['Drama','Fiction','Comedy','Action'];
    }
  ngOnInit() {

  }
  saveWorker(workerForm)
{
  console.log(workerForm);
}

}