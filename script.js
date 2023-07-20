function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
  }
  
  function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
  }
  
  function calculate() {
    var display = document.getElementById('display');
    var expression = display.value;
  
    try {
      var result = eval(expression);
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }
  

  document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
  
    // Set focus to #display input field when the app loads
    display.focus();
  
    // Event listener to re-focus on #display whenever it loses focus
    display.addEventListener('blur', () => {
      display.focus();
    });
  
    // Event listener to re-focus on #display when clicking outside the calculator area
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.calculator')) {
        display.focus();
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
  
    // Set focus to #display input field when the app loads
    display.focus();
  
    // Event listener to re-focus on #display whenever it loses focus
    display.addEventListener('blur', () => {
      display.focus();
    });
  
    // Event listener to handle keydown events and filter the input
    display.addEventListener('keydown', (event) => {
      const allowedKeys = /[0-9+\-/*]/;
      if (!allowedKeys.test(event.key) && event.key !== 'Backspace' && event.key !== 'Delete' && event.key !== 'Enter') {
        event.preventDefault();
      }
    });
  
    // Event listener to handle Enter keypress and trigger the calculation
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        calculate();
      }
    });
  });
  
  function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;
  
    try {
      const result = eval(expression);
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }
  