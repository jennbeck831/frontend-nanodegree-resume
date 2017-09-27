
//Biographical info
var bio = { "name": "Jennifer Pearson", 
			"role": "Web Developer",
			"welcomeMessage": "Homeschool Mom developing websites in GA",
			"contacts": { 
				"email": "jenn@pearson.org",
				"mobile": "770-424-7951", 
				"github": "jennbeck831",
				"location": "Atlanta" },
			"biopic": "images/jenn.jpg",
			"skills": [" HTML5", " CSS3", " Responsive Web Design", " Bootstrap", 
						" JavaScript", " JQuery", " Ubuntu",
						" Git", " GitHub"]
		}
//format it appropriately

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

//var formattedPosition = HTMLworkTitle.replace("%data%", bio.work["position"] )
//var formattedSchool = HTMLschoolName.replace("%data", bio.education.schoolName)
//display in the html file

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedEmail);
$("#header").append(formattedMobile);
$("#header").append(formattedgithub);
$("#header").append(formattedLocation);

$("#header").append(formattedPic);
$("#header").append(formattedWelcome);

//format and display skills
bio.displaySkills = function() {
	var skillIndex;
	if (bio.skills.length>0) {
		$("#header").append(HTMLskillsStart);
		for (skillIndex in bio.skills) {
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[skillIndex]);
			$("#skills").append(formattedSkills);
		}
	}
}
bio.displaySkills();

//Converts bio.name to international format
function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return(name[0]+ " " + name[1]);
}



//Work Experience

var work = { "jobs" : [
	{ "employer" : "Pearson Academy",
	"title" : "Homeschool Teacher",
	"dates" : "2000-present",
	"location" : "Kennesaw, GA",
	"description": "Design and implement individualized education plans for 5 students of varying ages"},
	{ "employer" : "Web Publishers",
	"title" : "Account Specialist",
	"dates" : "1996-1997",
	"location" : "Wilmore, KY",
	"description": "Process accounts receivable, maintain customer relations with clients" },
	{ "employer" : "Asbury Seminary",
	"title" : "Librarian",
	"dates" : "1995-1996",
	"location" : "Wilmore, KY",
	"description": "Check out books to students, process check-ins, shelve books, assist with research" },
	{ "employer" : "Dickinson College",
	"title" : "Computer Room Supervisor",
	"dates" : "1990-1994",
	"location" : "Carlisle, PA",
	"description": "Diagnose and fix software and hardware issues in the school's computer lab"}]}

//Display work experience details
work.display = function() {
	$("#workExperience").append(HTMLworkStart);
	for (job in work.jobs) {
		var formattedEmployer =HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer+formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);	
	}
}
work.display();


function locationizer(work_obj) {
    var jobArray = [];
    for (jobIndex = 0; jobIndex<work.jobs.length; jobIndex++) {
        jobArray.push(work.jobs[jobIndex].location);
    }
    return jobArray;
}
//console.log(locationizer(work));

//Projects completed
var projects = 
[ {"title": "Portfolio",
	"dates": "2017",
	"description":"",
	"images":["images/webDesign.jpg"] },
	{"title": "Responsive Images Blog",
	"dates": "2017",
	"description":"",
	"images":["images/stillLife.jpg"] },
	{"title": "Homeschool Web Pages",
	"dates": "2000-2004",
	"description":"Information about our homeschool experience, links to resources for parents, preschoolers, and elementary aged children",
	"images":[] },
	{"title": "Pregnancy & Baby Web Sites",
	"dates": "1998-2000",
	"description":"Pregnancy and baby blog",
	"images":["images/pregnancy.jpg"] },
	{"title": "Wedding Page",
	"dates": "1995-1996",
	"description":"Blog documenting preparations for my wedding",
	"images":["images/wedding.jpg"] },
	{"title": "Read Through the Bible",
	"dates": "1994-1995",
	"description":"Reading plan for reading through the Bible in a year",
	"images":["images/bible.jpg"] },
	{"title": "Reaching the Online Community",
	"dates": "1996-1997",
	"description":"Digitized seminary paper detailing ways to implement church growth strategies online",
	"images":["images/church.jpg"] },
	{"title": "Internet & Missions",
	"dates": "1996-1997",
	"description":"Digitized seminary paper discussing ways the Internet can be utilized for missions",
	"images":["images/missions.jpg"] }
]

projects.display = function() {
		$("#projects").append(HTMLprojectStart);
	for (project=0; project<projects.length; project++) {
		var formattedTitle =HTMLprojectTitle.replace("%data%", projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		var formattedImages = HTMLprojectImage.replace("%data%", projects[project].images);
		$(".project-entry:last").append(formattedImages);	
	}

}
projects.display();

//Education objects
var education = 
{ "schools": [ 
	{"name" : "Dickinson College",
	"location" : "Carlisle, PA",
	"degree": "BS",
	"majors" : ["CS"],
	"dates": 1994,
	"yearsAttended" : "1990-1994",
	"url": "http://www.dickinson.edu/homepage/57/computer_science"
	},
	{
	"name" : "Asbury Seminary",
	"location" : "Wilmore, KY",
	"degree": "MA",
	"majors" : ["World Missions"],
	"dates": 1997,
	"yearsAttended" : "1995-1997",
	"url": "http://asburyseminary.edu/" }
	],
  "onlineCourses" : [
	{"title" : "JavaScript Basics",
	 "school": "Udacity",
	 "dates" : 2017,
	 "url" : "http://www.udacity.com/course/javascript-basics--ud804"},
	{"title" : "How to Use Git and GitHub",
	 "school": "Udacity",
	 "dates" : 2017,
	 "url" : "http://www.udacity.com/course/how-to-use-git-and-github--ud775"},
	{"title" : "Version Control with Git",
	 "school": "Udacity",
	 "dates" : 2017,
	 "url" : "http://www.udacity.com/course/version-control-with-git--ud123"},
	{"title" : "Linux Command Line Basics",
	 "school": "Udacity",
	 "dates" : 2017,
	 "url" : "http://www.udacity.com/course/linux-command-line-basics--ud595"},
	{"title" : "Responsive Images",
	 "school": "Udacity",
	 "dates" : 2017,
	 "url" : ""},
	{"title" : "Responsive Web Design Fundamentals",
	 "school": "Udacity",
	 "dates" : 2017,
	 "url" : "http://www.udacity.com/course/responsive-web-design-fundamentals--ud893"},
	 {"title" : "Intro to HTML and CSS",
	 "school": "Udacity",
	 "dates" : 2017,
	 "url" : "http://www.udacity.com/course/intro-to-html-and-css--ud304"}
	]
}

education.schoolDisplay = function() {
	$("#education").append(HTMLschoolStart);
	for (school=0; school<education.schools.length; school++) {
		var formattedName =HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);
		var formattedLocation =HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedDegree =HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);
		var formattedMajors =HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajors);
		var formattedDates =HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);
	}
}
education.schoolDisplay();

education.onlineCourseDisplay = function() {
	$(".education-entry").append(HTMLonlineClasses);
	for (course=0; course<education.onlineCourses.length; course++) {
		var formattedTitle =HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedTitle);
		var formattedSchool =HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedSchool);
		var formattedDates =HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDates);
		var formattedURL =HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedURL);
	}
}
education.onlineCourseDisplay();


$(document).click(function(loc) {
  // your code goes here
  	var x = loc.pageX;
  	var y = loc.pageY;
	logClicks(x, y)});

//Add button to internationalize name
$("#main").append(internationalizeButton);


//add a map
$("#mapDiv").append(googleMap);