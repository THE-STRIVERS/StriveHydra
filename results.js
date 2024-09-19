// results.js

document.addEventListener('DOMContentLoaded', () => {
    const result = JSON.parse(localStorage.getItem('simulationResult'));
  
    const pressureTrace = {
      x: result.time,
      y: result.pressure,
      type: 'scatter',
      mode: 'lines',
      name: 'Pressure',
    };
  
    const velocityTrace = {
      x: result.time,
      y: result.velocity,
      type: 'scatter',
      mode: 'lines',
      name: 'Velocity',
    };
  
    const pressureLayout = {
      title: 'Pressure vs Time',
      xaxis: { title: 'Time (s)' },
      yaxis: { title: 'Pressure (Pa)' },
    };
  
    const velocityLayout = {
      title: 'Velocity vs Time',
      xaxis: { title: 'Time (s)' },
      yaxis: { title: 'Velocity (m/s)' },
    };
  
    Plotly.newPlot('pressure-plot', [pressureTrace], pressureLayout);
    Plotly.newPlot('velocity-plot', [velocityTrace], velocityLayout);
  });
  