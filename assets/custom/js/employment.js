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
						"title": "SITECORE & .NET ENGINEER",
						"employer": "WoningNet",
						"description": "",
						"period": "October 2012 - Present"
					},
					{
						"title": ".NET WEB ENGINEER (CONTRACTOR)",
						"employer": "BlueDesk",
						"description": "",
						"period": "August 2012 - October 2012"
					},
					{
						"title": "SITECORE & .NET ENGINEER (CONTRACTOR)",
						"employer": "Colours",
						"description": "",
						"period": "July 2012 - August 2012"
					},
					{
						"title": ".NET ENGINEER (CONTRACTOR)",
						"employer": "Blackware",
						"description": "",
						"period": "April 2012 - June 2012"
					},
					{
						"title": "SITECORE & .NET ENGINEER",
						"employer": "NCIM Groep",
						"description": "",
						"period": "January 2012 - Present"
					},
					{
						"title": "SOFTWARE ENGINEER",
						"employer": "Gateway Software",
						"description": "",
						"period": "November 2010 - December 2011"
					}
				]
			};
				var employment = [];
				$.each(data.employment, function(index, value){
					employment.push(new Employer(value.title, value.employer, value.description, value.period));				
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

var Employer = function(title, employer, description, period){
	var self = this;
	self.title = ko.observable(title);
	self.employer = ko.observable(employer);
	self.description = ko.observable(description);
	self.period = ko.observable(period);
}