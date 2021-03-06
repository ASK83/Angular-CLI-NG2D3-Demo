import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  colorScheme = {
    domain: ['#F44336', '#3F51B5', '#8BC34A', '#2196F3', '#009688', '#FF5722', '#CDDC39', '#00BCD4', '#FFC107', '#795548', '#607D8B']
  };

  data = [
    {
      "name": "Germany",
      "value": 46268
    },
    {
      "name": "USA",
      "value": 53041
    },
    {
      "name": "France",
      "value": 42503
    },
    {
      "name": "United Kingdom",
      "value": 41787
    },
    {
      "name": "Spain",
      "value": 29863
    },
    {
      "name": "Italy",
      "value": 35925
    }
  ];

}
