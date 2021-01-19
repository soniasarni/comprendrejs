const btn = document.getElementById('btn'); 
const img = document.getElementById('img1');


btn.addEventListener('click',()=>{
	console.log('yes!');
	img1.classList.toggle('show')
})
//S add et remove c'est pour ajouter et enlever et pour faire les deux au meme temps on fait toggle 


//IIIIIIlllllllllllllllllllllllllllllllllllll
const mouseEvent = document.getElementById('mouseEvent');
const horizontale = document.getElementById('horizontale');
const verticale = document.getElementById('verticale');

mouseEvent.addEventListener('mousemove', (e) =>{
  horizontale.innerHTML = e.x;
  verticale.innerHTML = e.y;
 mouseEvent.style.left = e.x / window.innerWidth * 100 +"%";
  if (e.x>500) {
	document.body.style.filter ="blur(2px)";
} else{
	document.body.style.filter = "none";
}
})

/*serie de style =blur2px
body.style.flter devient flou
style.left =e.x /window.innerWidth * 100 +"%";
*/

//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH {}
// recuperer ce que l'utilisateur a tapé
const input = document.getElementById('input');
addEventListener('input', (e)=>{
	console.log(e.target.value);
})
//PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
//afficher ce que l'utilisateur a saisi sur notre dome ex sur notre verticale

document.getElementById('input');
addEventListener('input', (e)=>{
	verticale.innerHTML = e.target.value
})
//KED?OK?OK?I?I?OI?OIJ??IOJ?IOOIIOJ?JIJJIJJPIIP
const theme = document.querySelectorAll(".theme");
const dark = document.querySelector(".dark");
const salmon = document.querySelector(".salmon");
const yellow = document.querySelector(".yellow");
theme.forEach((item) => {
	item.addEventListener("click", (e) =>{
		console.log(e.target.id);
		document.body.classList.remove("darktheme","salmontheme","yellowtheme");
		switch(e.target.id){
		  case"dark":
			document.body.classList.add("darktheme");
			break;
		  case"salmon":
			document.body.classList.add("salmontheme");
			break;
		  case"yellow":
			document.body.classList.add("yellowtheme");
			break;
		  default:
		    null;
		}
	})
})
//JBKUBKUBKUYGVKUVFKTYFYTYFYCJFCYCKYC
const array =['paris', 'lyon', 'montreal', 'marseille']
//console.log(array);
for (i= 0; i <array.length; i++){
	console.log(array[i]);
}
//console.log(typeof array[i]);pour savoir la nature des elements du tableau 
