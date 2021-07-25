class Media{
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title(){
      return this._title;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    get ratings(){
      return this._ratings;
    }
  
    set isCheckedOut (newIsCheckedOut){
      this._isCheckedOut = newIsCheckedOut;
    }
  
  
  toggleCheckOutStatus(){
    if(this._isCheckedOut === false) {
     this._isCheckedOut = true
     } 
     else this._isCheckedOut = false
  }
   
  
  
   getAverageRating(){
     let sum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0)
     return sum / this._ratings.length;
   }
  
    addRating(args){
  this._ratings.push(args)
    }
  }
  
  class Book extends Media{
  constructor(author,title,pages){
    super(title);
    this._author = author;
    this._pages = pages; 
  }
  get author(){
    return this._author
  }
  
  get pages(){
    return this._pages
  }
  }
  
  class Movie extends Media{
    constructor(director, title, runTime, movieCast){
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = movieCast;
    }
    get movieCast(){
      return this._movieCast; 
    }
  }
  
  class CD extends Media{
    constructor(title){
     super(title);
     this._songs = ['This girl is on fire','sfhbhskdlsjdgjk','gdvfldhsfldjfggf'];
    }
    get songs(){
       return this._songs; 
    }
    shuffle() {
       console.log (this._songs[Math.floor(Math.random () * this._songs.length )])
    }
  }
  
  const historyOfEverything = new Book ('Bill Bryson', 'A Short History of Nearly Everything', 544)
  
  historyOfEverything.toggleCheckOutStatus()
  console.log(historyOfEverything.isCheckedOut)
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(5)
  historyOfEverything.addRating(5)
  console.log(historyOfEverything.getAverageRating())
  
  const speed = new Movie('Jan de Bont','Speed', 116)
  speed.toggleCheckOutStatus()
  speed.addRating(1)
  speed.addRating(1)
  speed.addRating(5)
  console.log(speed.getAverageRating())
  
  const sing = new CD ('This girl is on fire')
  sing.shuffle()