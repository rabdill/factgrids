 function changeCssClass(objDivID)
	{
		/*	Because the classes being altered are full of unpredictable tags, we
			have to replace individual words. Switching "unflipped" to "flipped" is trivial,
			but detecting whether or not something is already flipped is annoyingly
			complicated. Instead, the final states to settle in are "unflipped" and
			"flipped2," so that the script can tell if the element was flipped with the
			most recent click ("flipped1," which we shouldn't unflip) or with a previous
			one ("flipped2," which means this click should unflip it).
		*/
	var oldClass = document.getElementById(objDivID).className
		document.getElementById(objDivID).className = oldClass.replace("unflipped", "flipped1")
	var oldClass = document.getElementById(objDivID).className
		document.getElementById(objDivID).className = oldClass.replace("flipped2", "unflipped")
	var oldClass = document.getElementById(objDivID).className
		document.getElementById(objDivID).className = oldClass.replace("flipped1", "flipped2")

	}
		
function contentMorph(category)
	{
		fillBackNames();
		
		if(category == 'all')	{
			document.getElementById('gwashington-back').innerHTML +=		"The only president to be elected by a unanimous vote of the electoral college.";
			document.getElementById('jadams-back').innerHTML += 				"The first president to live in what is now known as the White House.";
			document.getElementById('bharrison-back').innerHTML +=			"The first president to <a href='https://www.youtube.com/watch?v=u1ykiZk4fE8'>have his voice recorded</a>."
		}
		
		if (category == 'dem')	{
			document.getElementById('gwashington-back').innerHTML = "He was shot by a horsie named Mel.";
		}
		
		if (category == 'rep')	{
			document.getElementById('gwashington-back').innerHTML = "He was shot by a horsie named Mel.";
		
		}
		
		if (category == 'other')	{
			document.getElementById('gwashington-back').innerHTML = "He was shot by a horsie named Mel.";
		
		}
		
		if (category == 'shot')	{
			document.getElementById('gwashington-back').innerHTML += "He was shot by a horsie named Mel.";
		
		}
		
		if (category == 'war')	{
			document.getElementById('jadams-back').innerHTML = "Quasi-War";
		
		}
		
	}

function fillBackNames()
	{
		document.getElementById('gwashington-back').innerHTML = "<p class='name'>George Washington</p>";
		document.getElementById('jadams-back').innerHTML = "<p class='name'>John Adams</p>";

	}