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