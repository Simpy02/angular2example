import {Component} from '@angular/core';

@Component({
selector:'app',
templateUrl: 'app/app.component.html',
styleUrls: ['app/app.component.css']

})
export class AppComponent{
onMediaItemDelete(){}


firstMediaItem = {
    id: 1,
    name: "Movie 1",
    medium: "Movie",
    category: "Action",
    year: 2016,
    watchedOn: 12052017,
    isFavorite: false
  };
}
