function isPrime(int) {
	var isPrime = true;

	if (int < 2) return false;

	for (i=2; i<Math.floor(Math.abs(int)/2); i++) {
		if (int%i == 0) {
			isPrime = false;
			break;
		}
	}

	return isPrime;
}

function maxDiff(arr) {
	arr.sort();
	return arr[arr.length-1]-arr[0];
}

function whatCentury(year) {
	var centuryNum = (parseInt(year.toString().slice(0, 2))+1).toString();
	var centuryLastNum = centuryNum.slice(1, 2);
	if (centuryNum.startsWith("1")) return centuryNum+"th";
	if (centuryLastNum == "1") return centuryNum+"st";
	if (centuryLastNum == "2") return centuryNum+"nd";
	if (centuryLastNum == "3") return centuryNum+"rd";
	return centuryNum+"th";
}

function greetCurring(name, gender, age) {
	if (age > 24) gender == "female" ? msmr = "Ms" : msmr = "Mr";
	return `Hello ${msmr}. ${name}`;
}

function searchArray(arr, text) {
	return arr.filter(x => x.match(text));
}

function humanReadable(timeInSeconds) {
	var t = new Date(1970, 0, 1);
	t.setSeconds(timeInSeconds);
	return ((parseInt(t.toString().match(/\d{2}/).toString())-1)*24+parseInt(t.toString().match(/\d{2}:\d{2}:\d{2}/).toString().match(/\d{2}/).toString())) + t.toString().match(/\d{2}:\d{2}:\d{2}/).toString().slice(2, t.toString().match(/\d{2}:\d{2}:\d{2}/).toString().length);
}

function humanReadable(s) {
	m = Math.floor(s/60);
	h = Math.floor(m/60);
	s %= 60;
	m %= 60;
	var vars = [h, m, s];
	if (!h.toString().match(/../)) h = "0"+h;
	if (!m.toString().match(/../)) m = "0"+m;
	if (!s.toString().match(/../)) s = "0"+s;
	console.log(`${h}:${m}:${s}`);
}

function convertHexStringToRgb(hex) {
	if (hex.match(/^[\da-f]{6}$/i)) var i = 0;
	else if (hex.match(/^#[\da-f]{6}$/i)) var i = 1;
	else return;
	var r = parseInt(`0x${hex.slice(i, i += 2)}`);
	var g = parseInt(`0x${hex.slice(i, i += 2)}`);
	var b = parseInt(`0x${hex.slice(i, i += 2)}`);
	return {
		"r": r,
		"g": g,
		"b": b
	};
}

function convertHexStringToRgb(hex) {
	var rgb = /([\da-f]{2})([\da-f]{2})([\da-f]{2})/i.exec(hex);
	return {
		"r": parseInt(`0x${rgb[1]}`),
		"g": parseInt(`0x${rgb[2]}`),
		"b": parseInt(`0x${rgb[3]}`)
	};
}

function removeConsecutiveCharacters(arr) {
	return arr.map(str => {
		return str.split("").filter((item, pos, arr) => {
			return !pos || item !== arr[pos-1];
		}).join("");
	});
}