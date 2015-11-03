sap.ui.jsview("zpm_work_requests.ViewRequest", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zpm_work_requests.ViewRequest
	*/ 
	getControllerName : function() {
		
		return "zpm_work_requests.ViewRequest";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zpm_work_requests.ViewRequest
	*/ 
	createContent : function(oController) {

		var form = new sap.ui.layout.form.SimpleForm({
			maxContainerCols : 2, 
			width : "100%", 
			editable : false, 

			content : [
				  		new sap.m.Label({text:'Description'}),					
						new sap.m.Text({text:'{request>/description}'}),
						new sap.m.Label({text:'Details'}),
						new sap.m.TextArea({editable:false,cols:400,
							rows:10,value:'{request>/longText}'}),
						new sap.m.Label({text:'Location'}),			
						new sap.m.Text({text:'{request>/location}, {request>/superLoc}'}),
						new sap.m.Label({text:'Status'}),	
						new sap.m.Text({text:'{request>/status}'}),
						new sap.m.Label({text:'Created Date'}),					
						new sap.m.Text({text:'{request>/createdDate}'}),
						new sap.m.Label({text:'Requested By'}),	
						new sap.m.Text({text:'{request>/requestedBy}'}),  
			           ], 
		})		
		
		
 		return new sap.m.Page({
			title: 'Work Request# {request>/notifNo}',
			showNavButton : true,
			navButtonPress : function(){
				oController.backToRequests();
			},			
			content: [      
			          	form
			]
		});
 		
 		
	}

});