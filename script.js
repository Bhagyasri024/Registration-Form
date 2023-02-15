// Table element
const table = document.getElementById('user-table');

// Retrieving existing user data from local storage
let users = JSON.parse(localStorage.getItem('users')) || [];

// Displaying existing user data in table
for (const user of users) {
  const { name, email, password, dob, terms } = user;
  const row = table.insertRow();
  row.insertCell().textContent = name;
  row.insertCell().textContent = email;
  row.insertCell().textContent = password;
  row.insertCell().textContent = dob;
  row.insertCell().textContent = terms ? 'YES' : 'NO';
}

// Handle form submit event
const form = document.getElementById('registration_form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Getting the form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const terms = document.getElementById('terms').checked;

  // Validating date of birth
  const dobDate = new Date(dob);
  const now = new Date();
  const minDate = new Date(now.getFullYear() - 55, now.getMonth(), now.getDate());
  const maxDate = new Date(now.getFullYear() - 18, now.getMonth(), now.getDate());
  if (dobDate < minDate || dobDate > maxDate) {
    alert('Please enter valid DOB between 18 and 55 years ago.');
    return;
  }

  // Adding user to table and saving the data to local storage
  const user = { name, email, password, dob, terms };
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  const row = table.insertRow();
  row.insertCell().textContent = name;
  row.insertCell().textContent = email;
  row.insertCell().textContent = password;
  row.insertCell().textContent = dob;
  row.insertCell().textContent = terms ? 'YES' : 'NO';

  // Reset form
  form.reset();
});