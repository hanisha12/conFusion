import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];
  selectedLeader: Leader;

  constructor(private leaderServce: LeaderService) { }

  ngOnInit(): void {
    this.leaderServce.getLeaders()
      .then(leaders =>  this.leaders = leaders);
  }
  onSelect(leader: Leader){
    this.selectedLeader = leader;
  }

}
