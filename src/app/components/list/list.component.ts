import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IssueService } from '../../issue.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // Initializing variable result
  result: object; 

  ngOnInit() {
    console.log('Init')
  }
  

  constructor(private issueService: IssueService, private router: Router) { }


  searchForShow(show) {
    this.issueService.searchForShow(show)
    .subscribe((data) => {
            this.result = data;
            console.log('Data requested ...');
            console.log(this.result);
          });
  }

  


  
}
