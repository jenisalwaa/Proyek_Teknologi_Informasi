// Search functionality
document.querySelector('.search-bar input').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
});

// Add hover effect on table rows
const rows = document.querySelectorAll('tbody tr');
rows.forEach(row => {
    row.addEventListener('mouseover', () => {
        row.style.backgroundColor = 'rgba(44, 62, 80, 0.2)';
    });
    row.addEventListener('mouseout', () => {
        row.style.backgroundColor = '';
    });
});

// Dialog Functions
function showAddDialog() {
    document.getElementById('addBeritaAcaraDialog').style.display = 'flex';
}

function closeDialog() {
    document.getElementById('addBeritaAcaraDialog').style.display = 'none';
}

// Add button click handler
document.querySelector('.add-button').addEventListener('click', showAddDialog);

// Form submission handler
document.getElementById('beritaAcaraForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get all form values
    const formData = {
        id: document.getElementById('id').value,
        kodeAlat: document.getElementById('kodeAlat').value,
        namaPeralatan: document.getElementById('namaPeralatan').value,
        unit: document.getElementById('unit').value,
        fasilitas: document.getElementById('fasilitas').value,
        cabang: document.getElementById('cabang').value
    };
    
    // Here you would typically send this data to a server
    console.log('Form submitted with data:', formData);
    
    // Close the dialog
    closeDialog();
    
    // Reset the form
    this.reset();
});

// Close dialog when clicking outside
document.getElementById('addBeritaAcaraDialog').addEventListener('click', function(e) {
    if (e.target === this) {
        closeDialog();
    }
});

