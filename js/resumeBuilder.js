
//creating the bio object
var bio = 
{
	"name" : "Amit Bansal",
	"role" : "Technologist",
	"contacts" : 
				{
 					"mobile" : "4696301126",
 					"email" : "amitb1126@gmail.com",
 					"github" : "https://github.com/qAn1nja",
 					"linkedIn" : ""
 				},
	"welcomeMessage" : " lorem ipsum dolor sit amet etc etc etc.",
	"skills" : ["JS,","Selenium,","Automation,","Jasmine,","JUnit,","Protractor,","CodedUI,","Java,","Exploratory Testing,","Integration Testing,","E2E Testing,","SDLC,","Regression Testing,","Automation Frameworks,","Page Object Model Frameworks,","","","","","","","Leading Teams"],
	"bioPic" : "images/FullSizeRender.jpeg"
};
// creating the education object
var education = 
[ 
	{"school" : "Priyadarshini College of Engineering & Architecture",
				   "schoolCity" : "Nagpur, India",
				   "major" : "Industrial Engineering",
				   "degree" : "Bachelor's",
				   "gradYear" : 2001
	},
	{"school" : "Texas Tech University",
				   "schoolCity" : "Lubbock, Texas",
				   "major" : "Industrial Engineering",
				   "degree" : "Master's",
				   "gradYear" : 2005
	}
];
// creating the work object
var a = [{},{},{}];
var work = {
	jobs :
			[
					{
					"title" : "Lead QA",
					"employer" : "American Airlines",
					"dates" : 'April 2016 - Present',
					"location" : "Plano, Texas",
					"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
					},
					{
					"title" : "JavaScript Tester",
					"employer" : "BlackHawk Network",
					"dates" : 'Mar 2016 - April 2016',
					"location" : "Frisco, Texas",
					"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
					},
					{
					"title" : "Sr. QA Engineer",
					"employer" : "CA Technologies",
					"dates" :  'Dec 2014 - Feb 2016',
					"location" : "Plano, Texas",
					"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
					},
					{
					"title" : "Sr. QA Engineer",
					"employer" : "Phytel",
					"dates" : ' July 2013 - Nov 2014',
					"location" : "Irving, Texas",
					"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
					}
			]
};
var projects = {
		project: [
		{
			"title" 	: "Online Resume using HTML,CSS & JavaScript",
			"dates"   	: " 2016",
			"desc"		: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 
		},
		{
			"title"	: "Learnng GitHub",
			"dates"  	: " 2015",	
			"desc"		: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		},
		{
			"title" 	: "Learning Selenium WebDriver",
			"dates"   	: " 2013",
			"desc"		: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		}]

} 	// ------------- end of projects object --------------------------

// Display the projects 
projects.display = function(){
	$("#projects").append(HTMLprojectStart);
	var proj = {};var i=0;
	for (proj in projects.project)
	{
		//append all of your projects info to the Projects section
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.project[i].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.project[i].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.project[i].desc);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		++i;		
	}
}
projects.display();

//add name and picture to the resume
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPic);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(formattedGithub);		

// display the skills
$("#header").append(HTMLskillsStart);
function displaySkills(){
	for (var i=0;i<bio.skills.length;i++){
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}
displaySkills();

// displaying the employers and title in a formatted way	
function displayWork(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",(work.jobs[job]).employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",(work.jobs[job]).title);
		var formattedWorkString = formattedEmployer+" "+formattedTitle 
		$(".work-entry:last").append(formattedWorkString);
		var formattedworkdates = HTMLworkDates.replace('%data%',(work.jobs[job]).dates);
		var formattedworkDesc = HTMLworkDescription.replace("%data%",(work.jobs[job]).description);
		$(".work-entry:last").append(formattedworkdates);
		$(".work-entry:last").append(formattedworkDesc);
	}
}	
displayWork();


$("#main").append(internationalizeButton);  //adding the inernationalize button at the bottom of the page

// here's a map of where I've lived and worked
$("#mapDiv").append(googleMap);


































































































