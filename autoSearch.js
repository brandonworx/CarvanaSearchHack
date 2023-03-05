//CarvanaSearchHack by BrandonWorx
//03-05-2023
/*HOW TO USE: Copy / paste the function below into your browser console WHILE VIEWING THE FIRST PAGE OF YOUR CAR SEARCH LISTINGS
Then press ENTER and in the same console window, type "autoSearch();" - Then sit back and let the script do it's job. You can
even visit other tabs, play a game, or step away from the PC if you want to */
//NOTES: THIS ONLY WORKS BY LOOKING FOR THE PHRASE "CASH DOWN" SO BE SURE TO SET YOUR CASH DOWN LIMIT USING CARVANA'S TOOLS BEFORE USING
function autoSearch(){
	setTimeout(function(){
		if ( window.find("cash down") !== true ){
			window.find("next")
			window.getSelection().anchorNode.parentNode.click()
			setTimeout(autoSearch, 3000);
		}
		else{
			while(window.find("cash down")){
				console.log(window.getSelection().anchorNode.parentNode.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.getElementsByClassName("year-make")[0].innerHTML + " | " + window.getSelection().anchorNode.parentNode.parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.getElementsByClassName("trim-mileage")[0].getElementsByTagName("span")[1].innerHTML + " | " + window.getSelection().anchorNode.parentNode.parentNode.parentNode.parentNode.previousElementSibling.childNodes[0].childNodes[0].innerHTML + " | " + window.getSelection().anchorNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.href);
			}
			window.find("next")
			window.getSelection().anchorNode.parentNode.click()
			setTimeout(autoSearch, 3000);
	}}, 2000);
}
