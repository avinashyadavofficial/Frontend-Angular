import { Component, Output,EventEmitter,signal} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel=new EventEmitter<void>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');
  @Output() addTask = new EventEmitter<{
    title: string;
    summary: string;
    dueDate: string;
  }>();

  onCancel(){
   this.cancel.emit();
 }
}
 