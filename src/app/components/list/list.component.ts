import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Issue } from '../../issue.model';
import { Show } from "../../show.model"
import { IssueService } from '../../issue.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  issues: Issue[];
  shows: Show[];
  displayedColumns = ['name', 'genre', 'officialSite'
  // , 'status', 'actions'
];

  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
    console.log('Hey there, if List Component mounts')
  }

  searchForShow(show) {
    this.issueService.searchForShow(show)
    // .subscribe(() => {
    //   this.router.navigate(['/list']);
    // });
    .subscribe((data: Show[]) => {
            this.shows = data;
            console.log('Data requested ...');
            console.log(this.shows);
          });
  }

  // fetchIssues() {
  //   this.issueService
  //     .getIssues()
  //     .subscribe((data: Issue[]) => {
  //       this.issues = data;
  //       console.log('Data requested ...');
  //       console.log(this.issues);
  //     });
  // }


  editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id) {
    this.issueService.deleteIssue(id).subscribe(() => {
      this.fetchIssues();
    });
  }

}
