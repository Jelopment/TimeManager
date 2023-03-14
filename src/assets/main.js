let twentyFiveMinutes = 25 * 60;
let fiveMinutes = 5 * 60;
let interval;
let firstAlarmEnabled = true;
let secondAlarmEnabled = true;
let alarm = new Audio('./assets/alarm.mp3');

function start() {
	interval = setInterval(() => {
		if (twentyFiveMinutes == 0 && fiveMinutes == 0) {
			if (secondAlarmEnabled) {
				alarm.play();
				secondAlarmEnabled = false;
			}
			twentyFiveMinutes = 25 * 60;
			fiveMinutes = 5 * 60;
		}

		if (twentyFiveMinutes != 0 && fiveMinutes != 0) {
			if (!firstAlarmEnabled && !secondAlarmEnabled) {
				firstAlarmEnabled = true;
				secondAlarmEnabled = true;
			}

			twentyFiveMinutes -= 1;
			document.getElementById('time').innerHTML = `<p>${parseInt(twentyFiveMinutes / 60)}:${twentyFiveMinutes % 60}</p>`;
		} else if (twentyFiveMinutes == 0 && fiveMinutes != 0) {
			if (firstAlarmEnabled) {
				alarm.play();
				firstAlarmEnabled = false;
			}
			fiveMinutes -= 1;
			document.getElementById('time').innerHTML = `<p>${parseInt(fiveMinutes / 60)}:${fiveMinutes % 60}</p>`;
		}
	}, 1000); 
}

function stop() {
	clearInterval(interval);
}

function reset() {
	clearInterval(interval);
	twentyFiveMinutes = 25 * 60;
	fiveMinutes = 5 * 60;
	document.getElementById('time').innerHTML = `<p>25:00</p>`;
}
