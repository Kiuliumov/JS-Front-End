document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const metricsDict = {
        'km' : 1000,
        'm' : 1,
        'cm' : 0.01,
        'mm' : 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254
    }


    document.getElementById('convert').addEventListener('click', (e) => {
            e.preventDefault();
            const inputDistance = Number(document.getElementById('inputDistance').value);
            const from = document.getElementById('inputUnits').value;
            const fromInMeters = metricsDict[from] * inputDistance;
            const to = document.getElementById('outputUnits').value;
            const outputDistance = document.getElementById('outputDistance');
            const output = fromInMeters / metricsDict[to];
            outputDistance.value = output.toFixed(2);
  
    })
}