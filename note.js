var Note = /** @class */ (function () {
    function Note(title, content) {
        this.title = title;
        this.content = content;
    }
    Note.prototype.addNote = function () {
        console.log("New note added: ".concat(this.title, " - ").concat(this.content));
    };
    return Note;
}());
var NoteList = /** @class */ (function () {
    function NoteList() {
        this.notes = [];
    }
    NoteList.prototype.addNoteToList = function (note) {
        this.notes.push(note);
        console.log("Note added to list: ".concat(note.title, " - ").concat(note.content));
    };
    return NoteList;
}());
var note1 = new Note("First note", "This is the content of the first note.");
var note2 = new Note("Second note", "This is the content of the second note.");
var noteList = new NoteList();
noteList.addNoteToList(note1);
noteList.addNoteToList(note2);
