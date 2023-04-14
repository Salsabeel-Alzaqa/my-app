# Convert HTML/Javascript webpage into React - Task

two files, HTML & Javascript, if combined together, it will give interactive web page, we need to change them to interactive React app,

## Html file
[index.html](https://drive.google.com/file/d/14dRWcrgHdvwbMfMxcfhZlhr3BiuIYFmz/view?usp=drive_web&authuser=0) file .

Html file:

```html
<form id="form">
  <h2>City quiz</h2>
  <p>What city is located on two continents?</p>
  <textarea id="textarea"></textarea>
  <br />
  <button id="button" disabled>Submit</button>
  <p id="loading" style="display: none">Loading...</p>
  <p id="error" style="display: none; color: red"></p>
</form>
<h1 id="success" style="display: none">That's right!</h1>

<style>
  * {
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    margin: 20px;
    padding: 0;
  }
</style>
```

## JavaScript file
[index.js](https://drive.google.com/file/d/1Z7oXZcKDZeaYqOuaVPhAsYiZrjIuZD3P/view?usp=drive_web&authuser=0) file .

JavaScript file :

```javascript
/**
 * Empty: Form has a disabled “Submit” button.
Typing: Form has an enabled “Submit” button.
Submitting: Form is completely disabled. Spinner is shown.
Success: “Thank you” message is shown instead of a form.
Error: Same as Typing state, but with an extra error message.
 */

async function handleFormSubmit(e) {
  e.preventDefault();
  disable(textarea);
  disable(button);
  show(loadingMessage);
  hide(errorMessage);
  try {
    await submitForm(textarea.value);
    show(successMessage);
    hide(form);
  } catch (err) {
    show(errorMessage);
    errorMessage.textContent = err.message;
  } finally {
    hide(loadingMessage);
    enable(textarea);
    enable(button);
  }
}

function handleTextareaChange() {
  if (textarea.value.length === 0) {
    disable(button);
  } else {
    enable(button);
  }
}

function hide(el) {
  el.style.display = "none";
}

function show(el) {
  el.style.display = "";
}

function enable(el) {
  el.disabled = false;
}

function disable(el) {
  el.disabled = true;
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() == "istanbul") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 1500);
  });
}

let form = document.getElementById("form");
let textarea = document.getElementById("textarea");
let button = document.getElementById("button");
let loadingMessage = document.getElementById("loading");
let errorMessage = document.getElementById("error");
let successMessage = document.getElementById("success");
form.onsubmit = handleFormSubmit;
textarea.oninput = handleTextareaChange;
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
