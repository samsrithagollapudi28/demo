var i=0
		var arr=new Array();
		arr[0]=new Image();
		arr[0].src="desktop.jpeg";
		arr[1]=new Image();
		arr[1].src="image.webp";
	
	function slide()
	{
	document.getElementById("image1").src=arr[i].src;
	i++;
	if(i==arr.length)
	{
	i=0;
	}
	setTimeout("slide()",2000);
	}