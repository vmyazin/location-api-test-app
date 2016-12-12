import { Component } from '@angular/core';
import { ApiService } from './app.api';

@Component({
  selector: 'location-filter',
  templateUrl: './templates/app.component.locationFilter.html',
  styleUrls: ['./app.component.scss']
})

export class LocationFilter {
	api = new ApiService();
	loadedData = this.api.getData();
	searchObject = { name: '' };

 	title = 'it kinda works!';
}


