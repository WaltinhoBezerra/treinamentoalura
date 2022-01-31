const notes = [10,8,5.5,4.5];
var sumNotes = 0
for(i=0; i<notes.length; i++){
    sumNotes = sumNotes + notes[i];
}

var media = sumNotes/notes.length

console.log(media);


var sumNotesred = 0;
for(i=0; i<notes.length; i = i + 1){
    sumNotesred += notes[i];
}

var mediaRed = sumNotesred/notes.length;
console.log(mediaRed);
