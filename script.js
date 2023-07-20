function highlight() {
    //Write your code here
	const strongElements = document.querySelectorAll('strong');
  strongElements.forEach((element) => {
    element.style.color = 'green';
  });


}


function return_normal() {
    //Write your code here
	const strongElements = document.querySelectorAll('strong');
  strongElements.forEach((element) => {
    element.style.color = 'black';
  });

    
}
