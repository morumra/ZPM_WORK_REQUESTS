sap.ui.jsview("zpm_work_requests.Dashboard", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zpm_work_requests.Dashboard
	*/ 
	getControllerName : function() {
		return "zpm_work_requests.Dashboard";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zpm_work_requests.Dashboard
	*/ 
	createContent : function(oController) {
				
       var tabFilterBar = new sap.m.IconTabBar(this.createId("oIconTB"), {
    	    expandable: true,    
            selectedKey: "MyRequests",
            items: [
                new sap.m.IconTabFilter({
                    key: "MyRequests",
                    count: "27",
                    icon: "sap-icon://activity-individual",
                    iconColor : sap.ui.core.IconColor.Critical,
                    text: 'My Requests',
                    design: sap.m.IconTabFilterDesign.Horizontal
                }),
                new sap.m.IconTabFilter({
                    key: "MyTeamRequests",
                    count: "146",
                    icon: "sap-icon://activity-items",
                    iconColor : sap.ui.core.IconColor.Critical,
                    text: 'My Team Requests',
                    design: sap.m.IconTabFilterDesign.Horizontal
                })
            ],
            //select: [oController.handleTabSelect, oController],
        });
       var requestsTable = new sap.m.Table({
    	   id: 'requestTable',
    	  // headerText:'Work Requests',
    	  // mode: sap.m.ListMode.SingleSelect,
		   columns: [
				      new sap.m.Column({header : new sap.m.Text({text:'Request#'})} ),
				      new sap.m.Column({header : new sap.m.Text({text:'Description'})} ),
				      new sap.m.Column({header : new sap.m.Text({text:'Location'})} ),
				      new sap.m.Column({header : new sap.m.Text({text:'Created Date'})} ),
				      new sap.m.Column({header : new sap.m.Text({text:'Status'})} ),
				      new sap.m.Column({header : new sap.m.Text({text:'Requested By'})} ),
		   ] 
       });
		var template = sap.m.ColumnListItem({
			type: sap.m.ListType.Active,
			cells: [
			       new sap.m.Text({
			    	   text: '{listModel>notifNo}',
			       }),
			       new sap.m.Text({
			    	   text: '{listModel>description}',
			       }),
			       new sap.m.Text({
			    	   text: '{listModel>location}',
			       }),
			       new sap.m.Text({
			    	   text: '{listModel>createdDate}',
			       }),
			       new sap.m.Text({
			    	   text: '{listModel>status}',
			       }),
			       new sap.m.Text({
			    	   text: '{listModel>requestedBy}',
			       }),
			]
		});
		template.attachPress(function(evt){
			oController.viewRequest(evt);
		});
		
		requestsTable.bindAggregation("items","listModel>/requests",template);
		
 		return new sap.m.Page({
			title: "Work Requests",
			content: [	
			            tabFilterBar,			            
			          	requestsTable 			          	
			]
		});
	}

});