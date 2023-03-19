function generateTodoList() {
    // Create an empty array to store the list items
    let items = [];
  
    // Get the HTML element where the todo list will be displayed
    const todoList = document.getElementById('todoList');
  
    // Create a form element for adding new items
    const form = document.createElement('form');
    form.addEventListener('submit', (event) => {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Get the input field value
      const newItem = input.value.trim();
  
      // If the input field is not empty, add the new item to the list
      if (newItem !== '') {
        // Create a new list item element
        const item = document.createElement('li');
        item.textContent = newItem;
  
        // Add a button to mark the item as complete
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
          item.classList.toggle('completed');
        });
        item.appendChild(completeButton);
  
        // Add a button to remove the item from the list
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
          items.splice(items.indexOf(item), 1);
          item.remove();
        });
        item.appendChild(removeButton);
  
        // Add the new item to the list and the array
        items.push(item);
        todoList.appendChild(item);
  
        // Clear the input field
        input.value = '';
      }
    });
  
    // Create an input field for adding new items
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Add new item...';
    form.appendChild(input);
  
    // Add the form to the HTML element where the todo list will be displayed
    todoList.appendChild(form);
  
    // Create a button to remove all completed items from the list
    const removeAllButton = document.createElement('button');
    removeAllButton.textContent = 'Remove all completed items';
    removeAllButton.addEventListener('click', () => {
      items.forEach((item) => {
        if (item.classList.contains('completed')) {
          items.splice(items.indexOf(item), 1);
          item.remove();
        }
      });
    });
    todoList.appendChild(removeAllButton);
  }