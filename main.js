let startTime;
let timerInterval;
let record = 0; // Inicializamos el récord con 0 segundos

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 10);
}

function updateTimer() {
    const elapsedTime = (Date.now() - startTime) / 1000;
    document.getElementById('timer').textContent = elapsedTime.toFixed(2);
}

function stopTimer() {
    clearInterval(timerInterval);
    const elapsedTime = (Date.now() - startTime) / 1000;
    const difference = Math.abs(elapsedTime - 10); // Calculamos la diferencia con respecto a 10 segundos
    if (difference < Math.abs(record - 10)) {
        record = elapsedTime; // Actualizamos el récord si es necesario
        document.getElementById('recordValue').textContent = record.toFixed(2);
    }
}

document.getElementById('startButton').addEventListener('click', function() {
    startTimer();
    document.getElementById('startButton').disabled = true;
    document.getElementById('stopButton').disabled = false;
});

document.getElementById('stopButton').addEventListener('click', function() {
    stopTimer();
    document.getElementById('startButton').disabled = false;
    document.getElementById('stopButton').disabled = true;
    document.getElementById('timer').textContent = '0.00'; // Reiniciamos la visualización del tiempo transcurrido
});
