// Function to fetch and display highest costs
function fetchHighestCosts() {
    // Make AJAX request to fetch highest costs from backend API endpoint
    fetch('http://localhost:8000/highest-costs') // Update URL with correct endpoint
        .then(response => response.json())
        .then(highestCosts => {
            // Update the HTML content with the highest costs
            const highestCostsDiv = document.getElementById('highestCost');
            highestCostsDiv.innerHTML = `<h2>Highest Costs</h2>`;
            highestCosts.forEach(cost => {
                highestCostsDiv.innerHTML += `<p>${cost}</p>`;
            });
        })
        .catch(error => {
            console.error('Error fetching highest costs:', error);
        });
}

// Add click event listener to the Common Trends button
document.getElementById('button').addEventListener('click', fetchHighestCosts);
