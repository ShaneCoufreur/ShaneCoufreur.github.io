var EmploymentViewModel = function(){
	var self = this;
	self.Employment = ko.observableArray();
	
	self.Init = function(){
		// $.ajax({
		// 	dataType: "json",
		// 	url: "/assets/custom/php/employment.php",
		// 	success: function(data){
			var data = {
				"employment": [
					{
						"title": "PRINCIPAL CONSULTANT & MENTOR",
						"employer": "NCIM Groep",
						"description": "",
						"period": "February 2016 - Present",
						"via_link_id": "#ncim",
						"via_link_text": "NCIM Groep",
						"id": "ncimprincipalconsultant"
					},
					{
						"title": "SCRUM MASTER & AGILE COACH (CONTRACTOR)",
						"employer": "WoningNet",
						"description": "",
						"period": "October 2015 - Present",
						"via_link_id": "#ncim",
						"via_link_text": "NCIM Groep",
						"id": "woningnetscrum"
					},
					{
						"title": "SITECORE & .NET ENGINEER (CONTRACTOR)",
						"employer": "WoningNet",
						"description": "",
						"period": "October 2012 - Present",
						"via_link_id": "#ncim",
						"via_link_text": "NCIM Groep",
						"id": "woningnet"
					},
					{
						"title": ".NET WEB ENGINEER (CONTRACTOR)",
						"employer": "BlueDesk",
						"description": "",
						"period": "August 2012 - October 2012",
						"via_link_id": "#ncim",
						"via_link_text": "NCIM Groep",
						"id": "bluedesk"
					},
					{
						"title": "SITECORE & .NET ENGINEER (CONTRACTOR)",
						"employer": "Colours",
						"description": "",
						"period": "July 2012 - August 2012",
						"via_link_id": "#ncim",
						"via_link_text": "NCIM Groep",
						"id": "colours"
					},
					{
						"title": ".NET ENGINEER (CONTRACTOR)",
						"employer": "Blackware",
						"description": "",
						"period": "April 2012 - June 2012",
						"via_link_id": "#ncim",
						"via_link_text": "NCIM Groep",
						"id": "blackware"
					},
					{
						"title": "SITECORE & .NET ENGINEER",
						"employer": "NCIM Groep",
						"description": "",
						"period": "January 2012 - Present",
						"via_link_id": "",
						"via_link_text": "",
						"id": "ncim"
					},
					{
						"title": "SOFTWARE ENGINEER",
						"employer": "Gateway Software",
						"description": "",
						"period": "November 2010 - December 2011",
						"via_link_id": "",
						"via_link_text": "",
						"id": "gateway"
					}
				]
			};
				var employment = [];
				$.each(data.employment, function(index, value){
					employment.push(new Employer(value.title, value.employer, value.description, value.period, value.id, value.via_link_id, value.via_link_text));				
				});
				self.Employment(employment);
		// 	},
		// 	error: function(jqXHR, textStatus, errorThrown ){
		// 	  console.log(errorThrown);
		// 	}
		// });
	}
	
	self.Init();
}

var Employer = function(title, employer, description, period, id, via_link_id, via_link_text){
	var self = this;
	self.title = ko.observable(title);
	self.employer = ko.observable(employer);
	self.description = ko.observable(description);
	self.period = ko.observable(period);
	self.id = ko.observable(id);
	self.via_link_id = ko.observable(via_link_id);
	self.via_link_text = ko.observable(via_link_text);
}