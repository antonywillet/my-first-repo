enyo.kind({
	name:"saibutton",
	components: [
		{kind:"Button",name:"sai", content : "saibaba",ontap : "callfunc",disabled:false,ondesabledchanged:"hello"}
		],
		callfunc: function() {
		alert("button clicked");
		},
		//this function is not called since it is present inside protected
		hello : function()
		{
		alert("inside disabled");
		
		}
		});