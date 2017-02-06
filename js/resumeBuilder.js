
//creating the bio object
var bio = 
{
	"name" : "Amit Bansal",
	"role" : "Technologist",
	"contacts" : 
				{
 					"mobile" : "469-630-1126",
 					"email" : "amitb1126@gmail.com",
 					"github" : "https://github.com/qAn1nja",
 					"linkedIn" : "",
 					"location" : "McKinney"
 				},
	"welcomeMessage" : " lorem ipsum dolor sit amet etc etc etc.",
	"skills" : ["Technical - JavaScript,Jasmine,Selenium WebDriver,Protractor,CodedUI,Java,Page Object Model Frameworks ", "Leadership - Conflict Management, Test Case Reviews, Testing Strategy", "Testing - SDLC,Exploratory,Integration,E2E,Regression"],
	"bioPic" : "images/FullSizeRender.jpeg",
	displaySkills : function(){
		for (var i=0;i<bio.skills.length;i++){
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]+'<br>');
			$("#skills").append(formattedSkill);
		}
	}
};
// creating the education object
var education = { 
	schools: [ 
				{"schoolName" : "Priyadarshini College of Engineering & Architecture",
				   "location" : "Nagpur, India",
				   "major" : "Industrial Engineering",
				   "degree" : "Bachelors",
				   "schoolDates" : "1997-2001"
				},
				{"schoolName" : "Texas Tech University",
				   "location" : "Lubbock,Texas",
				   "major" : "Industrial Engineering",
				   "degree" : "Masters",
				   "schoolDates" : "2003-05"
				}
			],

			// Display the education history
			displaySchools : function(){
			$("#education").append(HTMLschoolStart);
			var i=0;
			for (schoolDtls in education.schools)
			{
				//append all of your schools in the Education section
				var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[i].schoolName);
				var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[i].major);
				var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[i].schoolDates);
				var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
				$(".education-entry:last").append(formattedSchoolName);
				$(".education-entry:last").append(formattedSchoolDates);
				$(".education-entry:last").append(formattedSchoolMajor);
				$(".education-entry:last").append(formattedSchoolDegree);
				$(".education-entry:last").append(formattedSchoolLocation);
				++i;		
			}
		}
	} // end of education object
// creating the work object
var a = [{},{},{}];
var work = {
	jobs :
			[
					{
					"title" : "Lead QA",
					"employer" : "American Airlines",
					"dates" : 'April 2016 - Present',
					"location" : "Plano,Texas",
					"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
					},
					{
					"title" : "JavaScript Tester",
					"employer" : "BlackHawk Network",
					"dates" : 'Mar 2016 - April 2016',
					"location" : "Frisco,Texas",
					"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
					},
					{
					"title" : "Sr. QA Engineer",
					"employer" : "CA Technologies",
					"dates" :  'Dec 2014 - Feb 2016',
					"location" : "Plano,Texas",
					"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
					},
					{
					"title" : "Sr. QA Engineer",
					"employer" : "Phytel",
					"dates" : ' July 2013 - Nov 2014',
					"location" : "Irving,Texas",
					"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
					}
			],

			//function to display work
	displayWork : function(){
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
};
var projects = {
		project: [
		{
			"title" 	: "Online Resume using HTML,CSS & JavaScript",
			"dates"   	: " 2016",
			"desc"		: "Used Google Service to add location for all the places where I have lived and worked at. created an online resume with separate sections for work, projects, education, and google maps (used google API). Created resumebuilder.js (all the objects reside in this). Edited helper.js  " 
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
		}],

		// Display the projects 
		display : function(){
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

} 	// ------------- end of projects object --------------------------

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

education.displaySchools();
// display the projects
projects.display();

// display the skills
$("#header").append(HTMLskillsStart);
bio.displaySkills();

//display work history
work.displayWork();


$("#main").append(internationalizeButton);  //adding the inernationalize button at the bottom of the page

// here's a map of where I've lived and worked
$("#mapDiv").append(googleMap);


































































































