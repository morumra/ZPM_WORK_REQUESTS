sap.ui.controller("zpm_work_requests.Dashboard", {

	onAfterRendering: function() {
		
		
		var requestsTable = sap.ui.getCore().byId('requestTable');
		var requestsModel = sap.ui.getCore().getModel('listModel');		
		requestsTable.setModel(requestsModel,'listModel');	
		
		
	},	
	viewRequest: function(evt){
		
		var router = sap.ui.core.UIComponent.getRouterFor(this);		
		var context = evt.getSource().getBindingContext('listModel');		
		var path = context.sPath;		 // collection/0
		var startPoint = path.lastIndexOf('/')+1;
		var index = path.substring(startPoint, path.length);		
				
		var requestsModel = sap.ui.getCore().getModel('listModel');
		var requests = requestsModel.getData().requests;
		var selectedRow = requests[index];
		var requestData = {
				notifNo: selectedRow.notifNo,
				description: selectedRow.description,       
				location: selectedRow.location,
				createdDate: selectedRow.createdDate,
				status: selectedRow.status,
				requestedBy: selectedRow.requestedBy,	
				longText: selectedRow.longText,
				superLoc: selectedRow.superLoc
		};
		
		var requestModel = new sap.ui.model.json.JSONModel(requestData);
		sap.ui.getCore().setModel(requestModel,'requestModel');
		
		router.navTo('viewRequest');
	},

});