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
			document.getElementById('tjefferson-back').innerHTML = 				"";
			document.getElementById('jmadison-back').innerHTML +=			"";
			document.getElementById('jmonroe-back').innerHTML += 				"";
			document.getElementById('jqadams-back').innerHTML += 			"";
			document.getElementById('ajackson-back').innerHTML +=			"Against the national bank, in favor of states' rights and the forceful relocation of Native Americans.";
			document.getElementById('mvanburen-back').innerHTML += 			"";
			document.getElementById('wharrison-back').innerHTML += 			"";
			document.getElementById('jtyler-back').innerHTML += 					"";
			document.getElementById('jpolk-back').innerHTML += 					"";
			document.getElementById('ztaylor-back').innerHTML += 				"";
			document.getElementById('mfillmore-back').innerHTML += 			"";
			document.getElementById('fpierce-back').innerHTML += 				"";
			document.getElementById('jbuchanan-back').innerHTML += 			"";
			document.getElementById('alincoln-back').innerHTML += 				"";
			document.getElementById('ajohnson-back').innerHTML += 			"";
			document.getElementById('ugrant-back').innerHTML += 				"";
			document.getElementById('rhayes-back').innerHTML += 				"";
			document.getElementById('jgarfield-back').innerHTML += 				"";
			document.getElementById('carthur-back').innerHTML += 				"";
			document.getElementById('gcleveland-back').innerHTML += 			"";
			document.getElementById('bharrison-back').innerHTML +=			"The first president to <a href='https://www.youtube.com/watch?v=u1ykiZk4fE8'>have his voice recorded</a>.";
			document.getElementById('wmckinley-back').innerHTML += 			"";
			document.getElementById('troosevelt-back').innerHTML += 			"";
			document.getElementById('wtaft-back').innerHTML += 					"";
			document.getElementById('wwilson-back').innerHTML += 				"";
			document.getElementById('wharding-back').innerHTML += 			"";
			document.getElementById('ccoolidge-back').innerHTML += 			"";
			document.getElementById('hhoover-back').innerHTML += 				"";
			document.getElementById('froosevelt-back').innerHTML += 			"";
			document.getElementById('htruman-back').innerHTML += 			"";
			document.getElementById('deisenhower-back').innerHTML += 		"";
			document.getElementById('jkennedy-back').innerHTML += 			"";
			document.getElementById('ljohnson-back').innerHTML += 			"";
			document.getElementById('rnixon-back').innerHTML += 				"";
			document.getElementById('gford-back').innerHTML += 					"";
			document.getElementById('jcarter-back').innerHTML += 				"";
			document.getElementById('rreagan-back').innerHTML += 				"";
			document.getElementById('ghwbush-back').innerHTML += 			"";
			document.getElementById('wclinton-back').innerHTML += 			"";
			document.getElementById('gwbush-back').innerHTML += 				"";
			document.getElementById('bobama-back').innerHTML += 				"";
		}
		
		if (category == 'dem')	{
		document.getElementById('gwashington-back').innerHTML +=			"";
			document.getElementById('jadams-back').innerHTML += 				"";
			document.getElementById('tjefferson-back').innerHTML = 				"";
			document.getElementById('jmadison-back').innerHTML +=			"";
			document.getElementById('jmonroe-back').innerHTML += 				"";
			document.getElementById('jqadams-back').innerHTML += 			"";
			document.getElementById('ajackson-back').innerHTML +=			"";
			document.getElementById('mvanburen-back').innerHTML += 			"";
			document.getElementById('wharrison-back').innerHTML += 			"";
			document.getElementById('jtyler-back').innerHTML += 					"";
			document.getElementById('jpolk-back').innerHTML += 					"";
			document.getElementById('ztaylor-back').innerHTML += 				"";
			document.getElementById('mfillmore-back').innerHTML += 			"";
			document.getElementById('fpierce-back').innerHTML += 				"";
			document.getElementById('jbuchanan-back').innerHTML += 			"";
			document.getElementById('alincoln-back').innerHTML += 				"";
			document.getElementById('ajohnson-back').innerHTML += 			"";
			document.getElementById('ugrant-back').innerHTML += 				"";
			document.getElementById('rhayes-back').innerHTML += 				"";
			document.getElementById('jgarfield-back').innerHTML += 				"";
			document.getElementById('carthur-back').innerHTML += 				"";
			document.getElementById('gcleveland-back').innerHTML += 			"";
			document.getElementById('bharrison-back').innerHTML +=			"";
			document.getElementById('wmckinley-back').innerHTML += 			"";
			document.getElementById('troosevelt-back').innerHTML += 			"";
			document.getElementById('wtaft-back').innerHTML += 					"";
			document.getElementById('wwilson-back').innerHTML += 				"";
			document.getElementById('wharding-back').innerHTML += 			"";
			document.getElementById('ccoolidge-back').innerHTML += 			"";
			document.getElementById('hhoover-back').innerHTML += 				"";
			document.getElementById('froosevelt-back').innerHTML += 			"";
			document.getElementById('htruman-back').innerHTML += 			"";
			document.getElementById('deisenhower-back').innerHTML += 		"";
			document.getElementById('jkennedy-back').innerHTML += 			"";
			document.getElementById('ljohnson-back').innerHTML += 			"";
			document.getElementById('rnixon-back').innerHTML += 				"";
			document.getElementById('gford-back').innerHTML += 					"";
			document.getElementById('jcarter-back').innerHTML += 				"";
			document.getElementById('rreagan-back').innerHTML += 				"";
			document.getElementById('ghwbush-back').innerHTML += 			"";
			document.getElementById('wclinton-back').innerHTML += 			"";
			document.getElementById('gwbush-back').innerHTML += 				"";
			document.getElementById('bobama-back').innerHTML += 				"";
		
		}
		
		if (category == 'rep')	{
		
		
		}
		
		if (category == 'other')	{
		
		
		}
		
		if (category == 'shot')	{
			document.getElementById('ajackson-back').innerHTML += "Shot multiple times prior to being elected, and almost shot in a failed assassination attempt.";
		}
		
		if (category == 'war')	{
			document.getElementById('jadams-back').innerHTML += "Quasi-War";
		
		}
		
		if (category == 'related')	{
			document.getElementById('jadams-back').innerHTML += "Father of the seventh president, John Q. Adams. (insert TJ quote here)";
			document.getElementById('jqadams-back').innerHTML += "Son of the second president, John Adams. Had better teeth.";
			document.getElementById('wharrison-back').innerHTML += "Grandfather of Benjamin Harrison, who was in office for considerably longer.";
			document.getElementById('bharrison-back').innerHTML += "Grandson of William H. Harrison, the shortest-serving president.";
			document.getElementById('ghwbush-back').innerHTML += "Father of the 43rd president, George W. Bush, who was also a military pilot.";
			document.getElementById('gwbush-back').innerHTML += "Son of the 41st president, George H.W. Bush.";
		
		}
		
		
	}

function fillBackNames()
	{
		document.getElementById('gwashington-back').innerHTML = "<p class='name'>George Washington</p>";
		document.getElementById('jadams-back').innerHTML = "<p class='name'>John Adams</p>";
		document.getElementById('tjefferson-back').innerHTML = "<p class='name'>Thomas Jefferson</p>";
		document.getElementById('jmadison-back').innerHTML = "<p class='name'>James Madison</p>";
		document.getElementById('jmonroe-back').innerHTML = "<p class='name'>James Monroe</p>";
		document.getElementById('jqadams-back').innerHTML = "<p class='name'>John Quincy Adams</p>";
		document.getElementById('ajackson-back').innerHTML = "<p class='name'>Andrew Jackson</p>";
		document.getElementById('mvanburen-back').innerHTML = "<p class='name'>Martin Van Buren</p>";
		document.getElementById('wharrison-back').innerHTML = "<p class='name'>William Henry Harrison</p>";
		document.getElementById('jtyler-back').innerHTML = "<p class='name'>John Tyler</p>";
		document.getElementById('jpolk-back').innerHTML = "<p class='name'>James K. Polk</p>";
		document.getElementById('ztaylor-back').innerHTML = "<p class='name'>Zachary Taylor</p>";
		document.getElementById('mfillmore-back').innerHTML = "<p class='name'>Millard Fillmore</p>";
		document.getElementById('fpierce-back').innerHTML = "<p class='name'>Franklin Pierce</p>";
		document.getElementById('jbuchanan-back').innerHTML = "<p class='name'>James Buchanan</p>";
		document.getElementById('alincoln-back').innerHTML = "<p class='name'>Abraham Lincoln</p>";
		document.getElementById('ajohnson-back').innerHTML = "<p class='name'>Andrew Johnson</p>";
		document.getElementById('ugrant-back').innerHTML = "<p class='name'>Ulysses S. Grant</p>";
		document.getElementById('rhayes-back').innerHTML = "<p class='name'>Rutherford B. Hayes</p>";
		document.getElementById('jgarfield-back').innerHTML = "<p class='name'>James A. Garfield</p>";
		document.getElementById('carthur-back').innerHTML = "<p class='name'>Chester A. Arthur</p>";
		document.getElementById('gcleveland-back').innerHTML = "<p class='name'>Grover Cleveland</p>";
		document.getElementById('bharrison-back').innerHTML = "<p class='name'>Benjamin Harrison</p>";
		document.getElementById('wmckinley-back').innerHTML = "<p class='name'>William McKinley</p>";
		document.getElementById('troosevelt-back').innerHTML = "<p class='name'>Theodore Roosevelt</p>";
		document.getElementById('wtaft-back').innerHTML = "<p class='name'>William Howard Taft</p>";
		document.getElementById('wwilson-back').innerHTML = "<p class='name'>Woodrow Wilson</p>";
		document.getElementById('wharding-back').innerHTML = "<p class='name'>Warren G. Harding</p>";
		document.getElementById('ccoolidge-back').innerHTML = "<p class='name'>Calvin Coolidge</p>";
		document.getElementById('hhoover-back').innerHTML = "<p class='name'>Herbert Hoover</p>";
		document.getElementById('froosevelt-back').innerHTML = "<p class='name'>Franklin D. Roosevelt</p>";
		document.getElementById('htruman-back').innerHTML = "<p class='name'>Harry S. Truman</p>";
		document.getElementById('deisenhower-back').innerHTML = "<p class='name'>Dwight D. Eisenhower</p>";
		document.getElementById('jkennedy-back').innerHTML = "<p class='name'>John F. Kennedy</p>";
		document.getElementById('ljohnson-back').innerHTML = "<p class='name'>Lyndon B. Johnson</p>";
		document.getElementById('rnixon-back').innerHTML = "<p class='name'>Richard Nixon</p>";
		document.getElementById('gford-back').innerHTML = "<p class='name'>Gerald Ford</p>";
		document.getElementById('jcarter-back').innerHTML = "<p class='name'>Jimmy Carter</p>";
		document.getElementById('rreagan-back').innerHTML = "<p class='name'>Ronald Reagan</p>";
		document.getElementById('ghwbush-back').innerHTML = "<p class='name'>George H.W. Bush</p>";
		document.getElementById('wclinton-back').innerHTML = "<p class='name'>Bill Clinton</p>";
		document.getElementById('gwbush-back').innerHTML = "<p class='name'>George W. Bush</p>";
		document.getElementById('bobama-back').innerHTML = "<p class='name'>Barack Obama</p>";

	}
