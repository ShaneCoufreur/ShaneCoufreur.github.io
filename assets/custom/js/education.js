var EducationViewModel = function(){
	var self = this;
	self.Education = ko.observableArray();
	
	self.Init = function(){
		// $.ajax({
		// 	dataType: "json",
		// 	url: "/assets/custom/php/education.php",
		// 	success: function(data){
			var data = {
				"education": [
					{
						"institute": "SCRUM ALLIANCE",
						"title": "Certified ScrumMaster",
						"description": "",
						"period": "March 2015",
						"type": "certificate"
					},
					{
						"institute": "Microsoft",
						"title": "MCSD Web Applications",
						"description": "",
						"period": "January 2015",
						"type": "certificate"
					},
					{
						"institute": "SITECORE",
						"title": "Sitecore CMS 7.0 Certified Professional Developer",
						"description": "",
						"period": "July 2014",
						"type": "certificate"
					},
					{
						"institute": "MICROSOFT",
						"title": "Programming in HTML5 with JavaScript and CSS3 Specialist",
						"description": "",
						"period": "August 2013",
						"type": "certificate"
					},
					{
						"institute": "MICROSOFT",
						"title": "MCPD Web Developer",
						"description": "",
						"period": "May 2013",
						"type": "certificate"
					},
					{
						"institute": "MICROSOFT",
						"title": ".NET Framework 4, Service Communication Applications",
						"description": "",
						"period": "February 2013",
						"type": "certificate"
					},
					{
						"institute": "MICROSOFT",
						"title": ".NET Framework 4, Web Applications",
						"description": "",
						"period": "December 2012",
						"type": "certificate"
					},
					{
						"institute": "MICROSOFT",
						"title": ".NET Framework 4, Data Access",
						"description": "",
						"period": "March 2012",
						"type": "certificate"
					},
					{
						"institute": "SITECORE",
						"title": "Sitecore CMS 6.5 Certified Professional Developer",
						"description": "",
						"period": "February 2012",
						"type": "certificate"
					},
					{
						"institute": "MICROSOFT",
						"title": ".NET Framework 4, Windows Applications",
						"description": "",
						"period": "January 2012",
						"type": "certificate"
					},
					{
						"institute": "HOGESCHOOL ROTTERDAM",
						"title": "Bachelor of Science (B.Sc.), Simulation & Gaming",
						"description": "",
						"period": "2012",
						"type": "graduation-cap"
					}
				]
			};
				var education = [];
				$.each(data.education, function(index, value){
					education.push(new Education(value.institute, value.title, value.description, value.period, value.type));				
				});
				self.Education(education);
	}
	
	self.Init();
}

var Education = function(institute, title, description, period, type){
	var self = this;
	self.institute = ko.observable(institute);
	self.title = ko.observable(title);
	self.description = ko.observable(description);
	self.period = ko.observable(period);
	self.type = ko.observable("fa-"+type);
}