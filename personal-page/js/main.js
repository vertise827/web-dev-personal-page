//show pictures
//get id
var pics=document.getElementById("pic_rotation");
var n=0;
var imgNames=["boxed-cakes","strawberry-mousse","cheesecake","MontBlanc","SeaSaltOreo","MilkMousse","Supi"];
//set setInterval
setInterval(function(){
	//alert(n)
	//n++
	if (n>=imgNames.length) n=0
	pics.innerHTML="<img src='img/"+imgNames[n]+".jpg'/>";
	n++
},1000)


//like my page
var numOfLikes = 0;
function likeThePage(){
	numOfLikes++;
	var likes=document.getElementById("likePage")
	//add likes 
	likes.innerHTML="<strong>Liked "+numOfLikes+"</strong>"
}

