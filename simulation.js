// simulation.js

document.getElementById('simulation-form').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const systemType = document.getElementById('systemType').value;
    const pipeLength = document.getElementById('pipeLength').value;
    const pipeDiameter = document.getElementById('pipeDiameter').value;
    const valveClosureTime = document.getElementById('valveClosureTime').value;
    const initialFlowRate = document.getElementById('initialFlowRate').value;
  
    // Basic validation
    if (!systemType || !pipeLength || !pipeDiameter || !valveClosureTime || !initialFlowRate) {
      document.getElementById('message').textContent = 'Please fill out all fields';
      return;
    }
  
    // Simulated result
    const result = {
      time: [0, 1, 2, 3, 4, 5],
      pressure: [0, 50, 100, 150, 120, 80],
      velocity: [2, 4, 8, 12, 10, 5],
    };
  
    localStorage.setItem('simulationResult', JSON.stringify(result));
  
    window.location.href = 'results.html';
  });
  