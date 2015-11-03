jQuery.sap.declare('org.metro.pm.request.Component');

sap.ui.core.UIComponent.extend('org.metro.pm.request.Component',{
	metadata: {
		
		routing: {
			config: {
				viewType: sap.ui.core.mvc.ViewType.JS,
				viewPath: 'zpm_work_requests',
				targetControl: 'splitAppId',
				clearTarget: false,
				transition: 'slide'												
			},
			routes: [
			         {
			        	 pattern:"viewRequest",
			        	 view:"ViewRequest",
			        	 name:"viewRequest",			        	 
			        	 targetAggregation: "detailPages",			        	 
			         }, {
			        	 pattern:"",
			        	 name:"default",
			        	 view:"Dashboard",
			        	 targetAggregation: "detailPages"
			         }
			]			
		}
	},
	init: function(){
		jQuery.sap.require('sap.m.routing.RouteMatchedHandler');
		jQuery.sap.require('sap.ui.core.routing.HashChanger');
		
		sap.ui.core.UIComponent.prototype.init.apply(this,arguments);
		
		this.router  = this.getRouter();
		this.routeHandler = new sap.m.routing.RouteMatchedHandler(this.router);
		this.router.initialize();
				
	},
	createContent: function(){
				
		var listModel = new sap.ui.model.json.JSONModel('model/Requests.json');
		sap.ui.getCore().setModel(listModel,"listModel");
				
		var app = new sap.m.SplitApp("splitAppId",{
			id : "splitAppId",
			mode : sap.m.SplitAppMode.HideMode
		});		
		return app;	
	}
	
})