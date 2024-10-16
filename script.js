<script>
const form = document.getElementById('registrationForm');
const entriesTable = document.getElementById('entriesTable').getElementsByTagName('tbody')[0];

// Load saved entries from local storage
let savedEntries = JSON.parse(localStorage.getItem('formEntries')) || [];
savedEntries.forEach(entry => addEntryToTable(entry));

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const acceptedTerms = document.getElementById('acceptTerms').checked;

    // Validate age (18-55)
    const birthDate = new Date(dob);
    const age = (new Date()).getFullYear() - birthDate.getFullYear();
    if (age < 18 || age > 55) {
        alert('You must be between 18 and 55 years old to register.');
        return;
    }

    const entry = { name, email, password, dob, acceptedTerms };
    savedEntries.push(entry);
    localStorage.setItem('formEntries', JSON.stringify(savedEntries));

    addEntryToTable(entry);
    form.reset();
});

function addEntryToTable(entry) {
    const row = entriesTable.insertRow();
    row.insertCell(0).textContent = entry.name;
    row.insertCell(1).textContent = entry.email;
    row.insertCell(2).textContent = entry.password;
    row.insertCell(3).textContent = entry.dob;
    row.insertCell(4).textContent = entry.acceptedTerms.toString();
}
</script>
</body>
</html>