export class MediaItemService{
get(){
return this.mediaItems;
}
add(mediaItem){
this.mediaItems.push(mediaItem);
}
delete(mediaItem){
let index = this.mediaItems.indexOf(mediaItem);
if(index >=0){
this.mediaItems.splice(index, 1);
}
}
mediaItems = [
  {
    id: 1,
    name: "Movie 1",
    medium: "Movie",
    category: "Action",
    year: 2016,
    watchedOn: 1294166565384,
    isFavorite: false
  },
  {
    id: 2,
    name: "Movie 2",
    medium: "Movies",
    category: "Comedy",
    year: 2015,
    watchedOn: null,
    isFavorite: true
  }, {
    id: 3,
    name: "Movie 3",
    medium: "Movies",
    category: "Action",
    year: 2016,
    watchedOn: null,
    isFavorite: false
  }, {
    id: 4,
    name: "Movie 4",
    medium: "Movies",
    category: "Drama",
    year: null,
    watchedOn: null,
    isFavorite: true
  }, {
    id: 5,
    name: "Movie 5",
    medium: "Movies",
    category: "Action",
    year: 2015,
    watchedOn: 1457166565384,
    isFavorite: false
  }
];
}
