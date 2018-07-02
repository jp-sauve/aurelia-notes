import { Note } from './note';
export class App {
  constructor() {
    this.heading = 'Groknotes';
    this.notes = [];
    this.noteText = '';
  }

  addNote() {
    if (this.noteText) {
      this.notes = [...this.notes, (new Note(this.noteText))];
      this.noteText = '';
    }
  }
  removeNote(note) {
    let index = this.notes.indexOf(note);
    if (index !== -1) {
      this.notes.splice(index, 1, {text: 'removed'});
    }
  }
  clearAll() {
    this.notes = [];
  }
}

