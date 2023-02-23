class Note {
    public title: string;
    public content: string;

    constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    }

    public addNote(): void {
    console.log(`New note added: ${this.title} - ${this.content}`);
    }
 }
 class NoteList {
    private notes: Note[];

    constructor() {
      this.notes = [];
    }
  
    public addNoteToList(note: Note): void {
      this.notes.push(note);
      console.log(`Note added to list: ${note.title} - ${note.content}`);
    }
  }
  const note1 = new Note("First note", "This is the content of the first note.");
const note2 = new Note("Second note", "This is the content of the second note.");
const noteList = new NoteList();

noteList.addNoteToList(note1);
noteList.addNoteToList(note2);
