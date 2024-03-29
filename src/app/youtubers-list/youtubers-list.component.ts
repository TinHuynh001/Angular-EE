import { Component } from '@angular/core';

import { youtubers } from '../data';

@Component({
  selector: 'app-youtubers-list',
  templateUrl: './youtubers-list.component.html',
  styleUrls: ['./youtubers-list.component.css']
})
export class YoutuberListComponent {
  items = youtubers;

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/