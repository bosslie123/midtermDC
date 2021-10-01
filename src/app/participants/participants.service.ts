import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  getParticipants(){
      return [
          {name: "Hello Kitty", age:42 + " years old", gender: "Female"},
          {name: "Mickey Mouse", age:28 + " years old", gender: "Female"},
          {name: "Iron Man", age:20 + " years old", gender: "Male"},
          {name: "Super Man", age:33 + " years old", gender: "Male"},
          {name: "Aqua Man", age:41 + " years old", gender: "Male"},
          {name: "Wonder Woman", age:11 + " years old", gender: "Female"},
          {name: "Black Widow", age:23 + " years old", gender: "Female"},
          {name: "Scarlet Heart", age:14 + " years old", gender: "Female"},
          {name: "Spider Man", age:15 + " years old", gender: "Male"},
          {name: "Dr.Strange", age:18 + " years old", gender: "Male"},
          {name: "Gagamboy", age:22 + " years old", gender: "Male"},
      ];
  }
}
