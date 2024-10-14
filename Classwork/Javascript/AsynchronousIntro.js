// Function to show a message after a delay using setTimeout
function showMessage() {
    setTimeout(() => {
      document.getElementById('message').innerText = 'Hello, this message is displayed after 2 seconds!';
    }, 2000);
  }
  
  // Function to update the time every second using setInterval
  let intervalId;
  
  function startInterval() {
    intervalId = setInterval(() => {
      const now = new Date();
      document.getElementById('intervalMessage').innerText = now.toLocaleTimeString();
    }, 1000);
  }
  
  function stopInterval() {
    clearInterval(intervalId);
  }
  
  // Function to fetch data from an API and display it
  function fetchData() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric') // Replace with your actual API endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (status ${response.status})`);
        }
        return response.json();
      })
      .then(data => {
        document.getElementById('data').innerText = JSON.stringify(data, null, 2);
      })
      .catch(error => {
        document.getElementById('data').innerText = 'Error fetching data: ' + error.message;
        console.error('Error:', error);
      });
  }
  
  // Arrow function example
  const arrowFunctionExample = () => {
    const result = [1, 2, 3].map(num => num * 2);
    document.getElementById('arrowFunctionOutput').innerText = `Result of arrow function: ${result}`;
  };