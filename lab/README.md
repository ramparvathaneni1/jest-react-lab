# To-Do List Testing

## Description

While TDD is the ideal scenario, you're not always going to write tests for code that hasn't been written yet.  Sometimes it's the other way around, and you'll be writing tests for code that either wasn't previously accounted for or has been added hastily without having tests written for it initially.

This lab is basically a copy of your previously written To-Do app.  It's your job to go in and retroactively write tests for the code to ensure it remains stable in the future.  Write tests for the following conditions:

- The H1 tag should have the text "Things I should stop procrastinating:"
- The user enters the text "Eat more ice cream" into the text input and clicks the "Add it!" button.  The last item in the list should now have the text "Eat more ice cream"
- The user clicks the "Finished the list!" button.  The list should now be empty