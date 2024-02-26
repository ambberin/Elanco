document.addEventListener('DOMContentLoaded', function() {
    const dropdownType = document.getElementById('Dropdown');
    const serviceDropdown = document.getElementById('serviceDropdown');
    const resourceDropdown = document.getElementById('resourceDropdown');

    // Fetch data for Elanco Applications dropdown
    fetch('https://engineering-task.elancoapps.com/api/applications')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const option = document.createElement('option');
                option.value = item;
                option.textContent = item;
                serviceDropdown.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching Elanco Applications data:', error);
            serviceDropdown.innerHTML = '<option>Error fetching data. Please try again later.</option>';
        });

    // Fetch data for Elanco Resources dropdown
    fetch('https://engineering-task.elancoapps.com/api/resources')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const option = document.createElement('option');
                option.value = item;
                option.textContent = item;
                resourceDropdown.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching Elanco Resources data:', error);
            resourceDropdown.innerHTML = '<option>Error fetching data. Please try again later.</option>';
        });

    // Event listener for dropdown type change
    dropdownType.addEventListener('change', function() {
        const selectedType = this.value;
        if (selectedType === 'applications') {
            resourceDropdown.style.display = 'none';
            serviceDropdown.style.display = 'block';
            serviceDropdown.addEventListener('change', serviceDropdownChangeHandler);
            resourceDropdown.removeEventListener('change', resourceDropdownChangeHandler);
        } else if (selectedType === 'resources') {
            serviceDropdown.style.display = 'none';
            resourceDropdown.style.display = 'block';
            resourceDropdown.addEventListener('change', resourceDropdownChangeHandler);
            serviceDropdown.removeEventListener('change', serviceDropdownChangeHandler);
        }
    });

    // Event listener for Elanco Applications dropdown change
    function serviceDropdownChangeHandler() {
        const selectedService = this.value;
        fetch(`https://engineering-task.elancoapps.com/api/applications/${selectedService}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('apiData').innerText = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                console.error('Error fetching additional data:', error);
                document.getElementById('apiData').innerText = 'Error fetching additional data. Please try again later.';
            });
    }

    // Event listener for Elanco Resources dropdown change
    function resourceDropdownChangeHandler() {
        const selectedResource = this.value;
        fetch(`https://engineering-task.elancoapps.com/api/resources/${selectedResource}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('apiData').innerText = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                console.error('Error fetching additional data:', error);
                document.getElementById('apiData').innerText = 'Error fetching additional data. Please try again later.';
            });
    }
});

