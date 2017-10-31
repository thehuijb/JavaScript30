setDate = () => {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	const mins = now.getMinutes();
	const minsDegrees = ((mins / 60) * 360) + 90;
	const hours = now.getHours();
	const hoursDegrees = ((hours / 12) * 360) + 90;

	postMessage({hoursDegrees, minsDegrees, secondsDegrees});
}
intervalID = 0;
onmessage = ({data:arg} = 'start') => {
	if (arg === 'start') {
		self.intervalID = setInterval(setDate, 1000);
	} else {
		clearInterval(self.intervalID);
		postMessage(0);
	}
}
