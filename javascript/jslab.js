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
	if (centuryLastNum == "1") return centuryNum+"st";
	if (centuryLastNum == "2") return centuryNum+"nd";
	if (centuryLastNum == "3") return centuryNum+"rd";
	return centuryNum+"th";
}