function firstChar(text) {
  // your code here
	let tempStr=text.trim();
	if(tempStr.length===0)return '';
	return tempStr[0];
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));