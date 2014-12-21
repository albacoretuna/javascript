// var sMessage = "Hello World!";
// function sayHelloWorld(){
// 	console.log(sMessage);
// 	}

// 	sayHelloWorld();


var iBaseNum = 10;

function addNumbers(iNum1,iNum2){
	function doAddition(){
		return iNum1 + iNum2 + iBaseNum;
	}
	return doAddition();
}