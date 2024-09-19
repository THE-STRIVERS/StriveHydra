// app.js

document.addEventListener('DOMContentLoaded', () => {
    // Load past simulations (this can be fetched from backend or local storage)
    const pastSimulations = [
      { id: 1, name: 'Simulation 1' },
      { id: 2, name: 'Simulation 2' },
    ];
  
    const pastSimulationsContainer = document.getElementById('past-simulations');
    pastSimulations.forEach((sim) => {
      const simElement = document.createElement('div');
      simElement.innerHTML = `<a href="results.html?id=${sim.id}">${sim.name}</a>`;
      pastSimulationsContainer.appendChild(simElement);
    });
  });
  