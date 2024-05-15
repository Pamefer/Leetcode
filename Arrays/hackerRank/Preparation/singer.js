/** 
A new singer is looking for songs to perform. To be able to perform a song all the notes in the song must be within the singer's range, which is given by the lowest and highest notes the singer is able to sing.

A note is represented by:
- A letter for its pitch, ordered (lowest) C D E F G A B (highest)
- A number for its octave, ordered (lowest) 0 1 2 3 4 5 6 7 (highest)

For example, C5 is a note with pitch C and octave 5.

A note with a larger octave number is always higher than a note with a smaller octave number. If the octave number is the same, then a note with a later pitch letter is higher.

For example, here are some notes in order from lower to higher:
... G3 A3 B3 C4 D4 E4 F4 G4 A4 B4 C5 D5 …

A3 is higher than G3 because A comes after G in the ordering above
C4 is higher than B3 because its octave number is larger

The lowest possible note is C0 and the highest possible note is B7.

You will be given as input a list of notes in a song, the lowest note the singer can sing, and the highest note the singer can sing. Write a function that returns whether the singer can sing the song.

Examples:
song1 = ["F4", "B4", "C5"]
singable(song1, "F4", "C5") => True
  Every note in the song is between F4 and C5, so the singer can sing this song.
  Note that B4 is higher than F4, since notes are ordered C D E F G A B

singable(song1, "A4", "C5") => False
  F4 is lower than A4, so the singer cannot sing this song

song2 = ["C3", "E3", "G3", "C4", "E4", "G4", "C5"]
singable(song2, "B2", "C5") => True
singable(song2, "C3", "B4") => False
  B2 is lower than C3. A note with a smaller octave number is always lower than a note with a larger octave number. Similarly, B4 is lower than C5

Additional input data:
song3 = [ "B4", "F5", "B5" ]

song4 = ["B4", "E4", "G4", "G4", "A4", "B4", "E4", 
          "B4", "E4", "G4", "G4", "A4", "C5", "B4", 
          "E5", "G4", "G4", "A4", "B4", "C5", "D5", 
          "C5", "B4", "C5", "E5", "D5", "C5", "C5", 
          "B4", "B4", "E5", "E4", "G4", "G4", "A4", 
          "B4", "B4", "B4", "C5", "E5", "A5", "E5", 
          "C5", "A4", "E5", "D5", "C5", "B4"]

song5 = [ "F4" ]

All test cases:
singable(song1, "F4", "C5") => True
singable(song1, "A4", "C5") => False
singable(song2, "B2", "C5") => True
singable(song2, "C3", "B4") => False
singable(song3, "B4", "B5") => True
singable(song3, "B4", "C5") => False
singable(song4, "D4", "A5") => True
singable(song4, "D4", "G5") => False
singable(song4, "D4", "C6") => True
singable(song4, "F4", "C6") => False
singable(song5, "D4", "E4") => False

Complexity Variables: 
N = length of the song
**/
//C0.C1..C2..D0..D1 D2.
// C0 DO C1 D1

"use strict";
const song1 = ['F4', 'B4', 'C5'];
const song2 = ['C3', 'E3', 'G3', 'C4', 'E4', 'G4', 'C5'];
const song3 = ['B4', 'F5', 'B5' ];
const song4 = ['B4', 'E4', 'G4', 'G4', 'A4', 'B4', 'E4', 
               'B4', 'E4', 'G4', 'G4', 'A4', 'C5', 'B4', 
               'E5', 'G4', 'G4', 'A4', 'B4', 'C5', 'D5', 
               'C5', 'B4', 'C5', 'E5', 'D5', 'C5', 'C5', 
               'B4', 'B4', 'E5', 'E4', 'G4', 'G4', 'A4', 
               'B4', 'B4', 'B4', 'C5', 'E5', 'A5', 'E5', 
               'C5', 'A4', 'E5', 'D5', 'C5', 'B4'];
const song5 = ['F4'];


const istheSongForYou =(song1, lowerNote, higherNote)=>{
  const letters=['C', 'D', 'E', 'F','G','A','B'];
  const numbers=['0', '1','2','3', '4', '5', '6', '7'];
  
  let notes=[];
  for(let i=0; i<numbers.length;i++){
    for(let j=0; j<letters.length;j++){
          notes.push(letters[j]+numbers[i])
    }
  }
   //console.log(notes);
   
   const lowerIndex=notes.indexOf(lowerNote);
   const higherIndex=notes.indexOf(higherNote);
   const acceptedNotes=notes.slice(lowerIndex,higherIndex+1);
   //console.log(acceptedNotes);
   for(let i=0; i<song1.length;i++){
    // console.log("song1",song1[i])
     if(acceptedNotes.includes(song1[i])){
       continue;
     }else{
       return false;
     }
   } 
     return true;
}
const result = istheSongForYou(song1, "F4", "C5");
//console.log(result)
// istheSongForYou(song1, "A4", "C5") => False
// istheSongForYou(song2, "B2", "C5") => True
// istheSongForYou(song2, "C3", "B4") => False
// istheSongForYou(song3, "B4", "B5") => True
// istheSongForYou(song3, "B4", "C5") => False
// istheSongForYou(song4, "D4", "A5") => True
// istheSongForYou(song4, "D4", "G5") => False
// istheSongForYou(song4, "D4", "C6") => True
// istheSongForYou(song4, "F4", "C6") => False
// istheSongForYou(song5, "D4", "E4") => False

console.log(istheSongForYou(song1, "A4", "C5"))
console.log(istheSongForYou(song2, "B2", "C5") )
console.log(istheSongForYou(song2, "C3", "B4"))
console.log(istheSongForYou(song3, "B4", "B5") )
console.log(istheSongForYou(song3, "B4", "C5") )
console.log(istheSongForYou(song4, "D4", "A5") )
console.log(istheSongForYou(song4, "D4", "G5"))
console.log(istheSongForYou(song4, "D4", "C6") )
console.log(istheSongForYou(song4, "F4", "C6"))
console.log(istheSongForYou(song5, "D4", "E4"))

