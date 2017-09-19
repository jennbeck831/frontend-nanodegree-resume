
//Biographical info
var bio = { "name": "Jennifer Pearson", 
			"role": "Web Developer",
			"welcomeMessage": "Homeschool Mom in GA re-entering the work force ",
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

var skillIndex;
if (bio.skills.length>0) {
	$("#header").append(HTMLskillsStart);

	for (skillIndex in bio.skills) {

		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skillIndex]);
		$("#header").append(formattedSkills);
	}

}
//$("#header").append(formattedPosition);
//$("#header").append(formattedSchool);


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

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
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
displayWork();

$("#main").append(internationalizeButton);

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return(name[0]+ " " + name[1]);
}

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


//Education objects
var education = 
{ "schools": [ 
	{"name" : "Dickinson College",
	"location" : "Carlisle, PA",
	"degree": "BS",
	"majors" : ["CS"],
	"degree dates": 1994,
	"yearsAttended" : "1990-1994",
	"url": "http://www.dickinson.edu/homepage/57/computer_science"
	},
	{
	"name" : "Asbury Seminary",
	"location" : "Wilmore, KY",
	"degree": "MA",
	"majors" : ["World Missions"],
	"degree dates": 1997,
	"yearsAttended" : "1995-1997",
	"url": "http://asburyseminary.edu/" }
	],
  "online courses" : [
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

$(document).click(function(loc) {
  // your code goes here
  	var x = loc.pageX;
  	var y = loc.pageY;
	logClicks(x, y)});

