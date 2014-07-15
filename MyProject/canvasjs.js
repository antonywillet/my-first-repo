enyo.kind({
	name: "canvasobj",
	style:"padding:20px;",
	components: [
		{kind: "enyo.Canvas",name:"CAN", style:"border:2px solid #0000ff",attributes:{ width:"250",height:"250"}, onmousedown: "Mymousedown" ,onmouseup: "Mymouseup",onmouseover: "Mymouseover",
		onmouseout:"Mymouseout",onmousemove: "Mymousemove",onmousewheel:"Mymousewheel",onclick:"Myclick",ondblclick:"Mydblclick", 
		components: [
			{kind: "enyo.canvas.Text", bounds:{t:120, l:5, h:30, w:20}, text:"Perform the mouse Events inside canvas",  color:"green",font:"12pt Times New Roman" },
		]},
		{tag: "br"},
		//{kind: "Button" , content: "Reset", ontap: "update"},
		{tag: "br"},
	    {kind: "enyo.Input", name: "myInput", placeholder: "Press any key for KEY EVENTS ", style : "width:250px ;height:35px ", defaultFocus: "true", onchange: "inputChange", onkeydown:"Mykeydown",onkeyup:"Mykeyup",
		onkeypress:"Mykeypress",oninput:"Myinput",},
		 {kind: "enyo.TextArea", name: "keytext", placeholder: "key events.", style : "width:150px ;height:310px ; position: fixed; top : 30px; left:350px"},
 		 {kind: "enyo.TextArea", name: "keymouse", placeholder: "Mouse events.", style : "width:150px ;height:310px ; position: fixed; top : 30px; left:550px"},
	],
	Mymousedown: function()
	{
	var c;
	var str;
			//alert("Mymousedown");
			//document.write("mousedown");

			c= this.$.keymouse.getValue();
			str = new String(c);
			if(str.length ==0)
			{
			//console.log("len Zero inside"); 
			this.$.keymouse.setValue("Mousedown"+ "          ");
			}
			else
			{
			this.$.keymouse.setValue(c+"        " + "Mousedown"+ "          ");
			}

	},
	Mymouseup: function()
	{
				//alert("Mymouseup");
		//this.$.myInput.value();
		var c;
			//alert("Mymousedown");
			//document.write("mousedown");
			var str;
			//alert("Mymousedown");
			//document.write("mousedown");

			c= this.$.keymouse.getValue();
			str = new String(c);
			if(str.length ==0)
			{
			//console.log("len Zero inside"); 
			this.$.keymouse.setValue("Mouseup"+ "          ");
			}
			else
			{
			this.$.keymouse.setValue(c+"        " + "Mouseup"+ "          ");
			}


		//this.$.keytext.setValue("Mouseup");
				//this.$.CAN.applyStyle("border", "30px solid #ff0ff0");


	},
		/*Mymouseover: function()
	{
			//alert("Mymousedown");
			

			this.$.myInput.setValue("mouseover");

	},*/
	/*Mymouseout: function()
	{
			//alert("Mymousedown");
		
		this.$.myInput.setValue("mouseout");

	},*/
	/*Mymousemove: function()
	{


	this.$.myInput.setValue("mouseMOVE");
	},*/
	Mymousewheel: function()
	{ 
	
	
	var str;
			//alert("Mymousedown");
			//document.write("mousedown");

			c= this.$.keymouse.getValue();
			str = new String(c);
			if(str.length ==0)
			{
			//console.log("len Zero inside"); 
			this.$.keymouse.setValue("MouseWheel"+ "          ");
			}
			else
			{
			this.$.keymouse.setValue(c+"        " + "MouseWheel"+ "          ");
			}

		},
	Myclick: function()
	{ var c;
	
	var str;
			//alert("Mymousedown");
			//document.write("mousedown");

			c= this.$.keymouse.getValue();
			str = new String(c);
			if(str.length ==0)
			{
			//console.log("len Zero inside"); 
			this.$.keymouse.setValue("MouseClick"+ "          ");
			}
			else
			{
			this.$.keymouse.setValue(c+"        " + "MouseClick"+ "          ");
			}

	
	
	},
	Mydblclick: function()
	{
	var c;
	
	
	
	var str;
			//alert("Mymousedown");
			//document.write("mousedown");

			c= this.$.keymouse.getValue();
			str = new String(c);
			if(str.length ==0)
			{
			//console.log("len Zero inside"); 
			this.$.keymouse.setValue("Mouse DB click"+ "          ");
			}
			else
			{
			this.$.keymouse.setValue(c+"        " + "Mouse DB click"+ "          ");
			}

	},
	Mykeydown:function()
	{
	var str;
			//alert("Mymousedown");
			//document.write("mousedown");

			c= this.$.keytext.getValue();
			str = new String(c);
			if(str.length ==0)
			{
			//console.log("len Zero inside"); 
			this.$.keytext.setValue("Keydown"+ "          ");
			}
			else
			{
			this.$.keytext.setValue(c+"        " + "Keydown"+ "          ");
			}


	
	
//this.$.myInput.setValue("Keydown");
				//alert("Keydown");
	},
	Mykeyup:function()
	{
	
	var c;
	
	
	
	
	var str;
			//alert("Mymousedown");
			//document.write("mousedown");

			c= this.$.keytext.getValue();
			str = new String(c);
			if(str.length ==0)
			{
			//console.log("len Zero inside"); 
			this.$.keytext.setValue("Key up"+ "          ");
			}
			else
			{
			this.$.keytext.setValue(c+"        " + "Key up"+ "          ");
			}


	},
		Mykeypress:function()
	{
	var c;
var str;
			//alert("Mymousedown");
			//document.write("mousedown");

			c= this.$.keytext.getValue();
			str = new String(c);
			if(str.length ==0)
			{
			//console.log("len Zero inside"); 
			this.$.keytext.setValue("Key Press"+ "          ");
			}
			else
			{
			this.$.keytext.setValue(c+"        " + "Key Press"+ "          ");
			}

	
	},
		/*Myinput:function()
	{
				this.$.myInput.setValue("input");
				//alert("Keydown");
	},*/
	/*Myreset: function()
	{
		this.$.CAN.update();//alert("dG");
	},*/
	
	
	
	
});