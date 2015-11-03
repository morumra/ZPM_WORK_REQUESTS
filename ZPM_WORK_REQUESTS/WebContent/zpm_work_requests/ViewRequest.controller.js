sap.ui.controller("zpm_work_requests.ViewRequest", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zpm_work_requests.ViewRequest
*/
	onInit: function() {
		
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this.handleNavigation, this);
		
	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zpm_work_requests.ViewRequest
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zpm_work_requests.ViewRequest
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zpm_work_requests.ViewRequest
*/
//	onExit: function() {
//
//	}
handleNavigation: function(){
	var requestModel = sap.ui.getCore().getModel("requestModel");
	//console.log(ctx.oModel.oData);
	this.getView().setModel(requestModel,"request");		
},
backToRequests: function(evt){
	window.history.go(-1);
}
	
});