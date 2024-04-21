document.addEventListener('DOMContentLoaded', function () {
  fetch('tree.json')
    .then(response => response.json())
    .then(data => {
      const dataDisplay = document.getElementById('dataDisplay')
      console.log(data)

      // Create HTML elements to display the JSON data
      const nameElement = document.createElement('code')
      nameElement.textContent = 'Output: ' + JSON.stringify(data)

      // Append the elements to the "dataDisplay" div
      dataDisplay.appendChild(nameElement)
    })
    .catch(error => console.error('Error fetching JSON data:', error))
})
