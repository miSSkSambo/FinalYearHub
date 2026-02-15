<script>

/* SUBTITLE TYPING EFFECT */
const subtitleText="Ultimate AI Intelligence System";
let si=0;

function typeSubtitle(){
if(si<subtitleText.length){
document.getElementById("typingSubtitle").innerHTML+=subtitleText.charAt(si);
si++;
setTimeout(typeSubtitle,50);
}
}
window.addEventListener("load",typeSubtitle);

/* DARK MODE */
function toggleMode(){
document.body.classList.toggle("dark");
}

/* CANVAS */
const canvas=document.getElementById("neuralCanvas");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];
for(let i=0;i<60;i++){
particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,dx:(Math.random()-0.5),dy:(Math.random()-0.5)});
}
function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
particles.forEach(p=>{
p.x+=p.dx;p.y+=p.dy;
if(p.x<0||p.x>canvas.width)p.dx*=-1;
if(p.y<0||p.y>canvas.height)p.dy*=-1;
ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);
ctx.fillStyle="white";
ctx.fill();
});
requestAnimationFrame(animate);
}
animate();

/* PROJECTS  */
const projects = [

/* ================= CYBERSECURITY ================= */

{
title:"University Network Intrusion Detection System",
category:"Cybersecurity",
difficulty:"Advanced",
description:"Monitor simulated campus traffic and detect suspicious activity.",
tech:["Python","Wireshark","Snort","MySQL","Flask"],
problem:"University networks are vulnerable to cyber attacks and unauthorized access.",
solution:"Detects and alerts administrators about suspicious traffic patterns in real-time."
},

{
title:"Phishing Email Detection Tool",
category:"AI",
difficulty:"Intermediate",
description:"Classify emails as phishing or safe using NLP and ML.",
tech:["Python","Scikit-learn","NLTK","Flask"],
problem:"Users fall victim to phishing emails causing financial and data loss.",
solution:"Automatically classifies emails and warns users of potential phishing threats."
},

{
title:"Secure Online Examination Platform",
category:"Web",
difficulty:"Advanced",
description:"Online exam system with anti-cheating monitoring.",
tech:["Node.js","React","MongoDB","WebRTC"],
problem:"Online exams are prone to cheating and identity fraud.",
solution:"Provides secure authentication and monitoring to prevent exam malpractice."
},

{
title:"Password Manager with Encryption",
category:"Cybersecurity",
difficulty:"Intermediate",
description:"Secure vault using AES encryption.",
tech:["Java","AES Encryption","SQLite"],
problem:"Users reuse weak passwords across platforms.",
solution:"Stores and encrypts passwords securely in one protected vault."
},

{
title:"Digital Certificate Verification System",
category:"Blockchain",
difficulty:"Advanced",
description:"QR-based certificate validation system.",
tech:["Solidity","Ethereum","React","Node.js"],
problem:"Fake academic certificates are increasing.",
solution:"Uses blockchain to verify authenticity of digital certificates."
},

{
title:"Secure File Sharing with Expiry Links",
category:"Cybersecurity",
difficulty:"Intermediate",
description:"Encrypted file sharing with time-based access.",
tech:["Python","Flask","AES Encryption","AWS"],
problem:"Sensitive files are shared insecurely via email.",
solution:"Encrypts files and automatically expires access after a time limit."
},

{
title:"Role-Based Access Control System",
category:"Cybersecurity",
difficulty:"Beginner",
description:"Manage user permissions for SMEs.",
tech:["PHP","MySQL","Bootstrap"],
problem:"Small companies lack structured access control systems.",
solution:"Restricts system access based on assigned user roles."
},

{
title:"Web Application Vulnerability Scanner",
category:"Cybersecurity",
difficulty:"Advanced",
description:"Detect SQL injection and XSS vulnerabilities.",
tech:["Python","OWASP ZAP","Django"],
problem:"Web apps often contain hidden security flaws.",
solution:"Scans and reports vulnerabilities for developers to fix."
},

{
title:"Two-Factor Authentication System",
category:"Cybersecurity",
difficulty:"Beginner",
description:"OTP-based authentication system.",
tech:["JavaScript","Firebase","Twilio API"],
problem:"Single-password authentication is insecure.",
solution:"Adds OTP verification layer for enhanced security."
},

{
title:"Fraud Detection for E-Wallet Transactions",
category:"AI",
difficulty:"Advanced",
description:"Detect abnormal financial behavior.",
tech:["Python","TensorFlow","Pandas","Flask"],
problem:"Digital wallet fraud causes financial losses.",
solution:"Detects unusual transaction patterns in real-time."
},

/* ================= AI ================= */

{
title:"Student Performance Prediction System",
category:"AI",
difficulty:"Intermediate",
description:"Predict pass/fail probability using ML.",
tech:["Python","Scikit-learn","Pandas","Flask"],
problem:"Institutions struggle to identify at-risk students early.",
solution:"Predicts academic performance for early intervention."
},

{
title:"AI Resume Screening Tool",
category:"AI",
difficulty:"Intermediate",
description:"Match resumes to job descriptions.",
tech:["Python","NLP","Flask","React"],
problem:"Manual resume screening is time-consuming.",
solution:"Automatically ranks candidates based on job requirements."
},

{
title:"Fake News Detection Platform",
category:"AI",
difficulty:"Intermediate",
description:"NLP-based news classification.",
tech:["Python","TensorFlow","NLTK"],
problem:"Fake news spreads misinformation rapidly.",
solution:"Classifies news articles as real or fake."
},

{
title:"Customer Churn Prediction System",
category:"AI",
difficulty:"Intermediate",
description:"Predict customer retention.",
tech:["Python","Scikit-learn","Power BI"],
problem:"Companies lose customers without warning.",
solution:"Predicts customers likely to leave and enables retention strategies."
},

{
title:"Loan Approval Prediction System",
category:"AI",
difficulty:"Beginner",
description:"Predict loan eligibility.",
tech:["Python","Logistic Regression","Flask"],
problem:"Loan approval decisions are inconsistent.",
solution:"Provides data-driven approval predictions."
},

{
title:"AI Chatbot for University Helpdesk",
category:"AI",
difficulty:"Beginner",
description:"Automate FAQs.",
tech:["Python","Dialogflow","Flask"],
problem:"Helpdesks are overloaded with repetitive queries.",
solution:"Automates student inquiries using chatbot responses."
},

{
title:"Mental Health Risk Detection Tool",
category:"AI",
difficulty:"Intermediate",
description:"Predict stress levels.",
tech:["Python","NLP","Scikit-learn"],
problem:"Mental health risks go undetected among students.",
solution:"Analyzes text responses to detect stress indicators."
},

{
title:"Product Recommendation System",
category:"AI",
difficulty:"Intermediate",
description:"Collaborative filtering system.",
tech:["Python","TensorFlow","React"],
problem:"Users struggle to find relevant products.",
solution:"Recommends personalized products based on user behavior."
},

/* ================= DATA ================= */

{
title:"Stock Market Trend Prediction Dashboard",
category:"Data",
difficulty:"Advanced",
description:"Time-series stock analysis.",
tech:["Python","LSTM","Plotly"],
problem:"Investors lack predictive market insights.",
solution:"Forecasts stock trends using historical data."
},

{
title:"Crime Trend Prediction Dashboard",
category:"Data",
difficulty:"Advanced",
description:"Forecast crime hotspots.",
tech:["Python","Power BI","Pandas"],
problem:"Law enforcement reacts instead of preventing crime.",
solution:"Identifies high-risk areas through data analysis."
},

{
title:"Retail Sales Analytics Dashboard",
category:"Data",
difficulty:"Intermediate",
description:"Visualize retail sales.",
tech:["Power BI","SQL","Python"],
problem:"Retailers lack visibility into sales patterns.",
solution:"Provides visual sales insights and trends."
},

{
title:"University Admission Data Analysis",
category:"Data",
difficulty:"Intermediate",
description:"Analyze admission trends.",
tech:["Python","Excel","Power BI"],
problem:"Admission planning lacks data insights.",
solution:"Analyzes trends for better planning."
},

{
title:"Social Media Sentiment Analysis",
category:"Data",
difficulty:"Advanced",
description:"Analyze trending opinions.",
tech:["Python","NLP","Twitter API"],
problem:"Companies cannot track public sentiment effectively.",
solution:"Analyzes social media opinions in real-time."
},

{
title:"Supply Chain Tracking Dashboard",
category:"Data",
difficulty:"Advanced",
description:"Track goods movement.",
tech:["Power BI","SQL","Python"],
problem:"Supply chains lack transparency.",
solution:"Provides real-time shipment tracking insights."
},

{
title:"Energy Consumption Prediction Dashboard",
category:"Data",
difficulty:"Advanced",
description:"Predict monthly energy usage.",
tech:["Python","LSTM","Power BI"],
problem:"Energy providers cannot forecast demand accurately.",
solution:"Predicts future energy consumption trends."
},

/* ================= WEB ================= */

{
title:"Final Year Project Management Portal",
category:"Web",
difficulty:"Advanced",
description:"Backend-powered project tracking system.",
tech:["Node.js","React","MongoDB"],
problem:"Students struggle to manage project milestones.",
solution:"Tracks tasks, deadlines, and supervisor feedback."
},

{
title:"Internship Management System",
category:"Web",
difficulty:"Intermediate",
description:"Track internship applications.",
tech:["PHP","MySQL","Bootstrap"],
problem:"Manual internship tracking is inefficient.",
solution:"Centralizes internship applications digitally."
},

{
title:"Hospital Appointment Booking System",
category:"Web",
difficulty:"Intermediate",
description:"Real-time booking platform.",
tech:["Django","SQLite","Bootstrap"],
problem:"Patients wait long hours for appointments.",
solution:"Allows online booking and scheduling."
},

{
title:"Clinic Queue Management Dashboard",
category:"Web",
difficulty:"Beginner",
description:"Display estimated waiting times.",
tech:["PHP","MySQL"],
problem:"Patients are unaware of waiting times.",
solution:"Displays live queue status."
},

{
title:"Smart Complaint Management System",
category:"Web",
difficulty:"Intermediate",
description:"Municipality complaint tracking.",
tech:["Laravel","MySQL"],
problem:"Public complaints are poorly tracked.",
solution:"Provides transparent complaint tracking."
},

{
title:"School Timetable Auto-Generation System",
category:"Web",
difficulty:"Advanced",
description:"Generate conflict-free schedules.",
tech:["Python","Genetic Algorithm","Django"],
problem:"Manual timetabling causes conflicts.",
solution:"Automatically generates optimized schedules."
},

{
title:"Small Business Inventory System",
category:"Web",
difficulty:"Beginner",
description:"Real-time stock management.",
tech:["PHP","MySQL"],
problem:"Small businesses lack stock tracking systems.",
solution:"Tracks stock levels and sales."
},

{
title:"Online Rental Property Platform",
category:"Web",
difficulty:"Intermediate",
description:"Property listing platform.",
tech:["Node.js","React","MongoDB"],
problem:"Property listings lack centralized access.",
solution:"Connects tenants and landlords digitally."
},

{
title:"Digital Library System",
category:"Web",
difficulty:"Beginner",
description:"Book borrowing tracker.",
tech:["PHP","MySQL"],
problem:"Libraries manually track book loans.",
solution:"Digitizes borrowing and return records."
},

{
title:"Freelancer Marketplace Platform",
category:"Web",
difficulty:"Advanced",
description:"Connect freelancers with clients.",
tech:["React","Node.js","Stripe API"],
problem:"Freelancers struggle to find clients.",
solution:"Provides secure freelance job marketplace."
},

/* ================= MOBILE ================= */

{
title:"Campus Navigation Mobile App",
category:"Mobile",
difficulty:"Intermediate",
description:"GPS-based navigation app.",
tech:["Flutter","Google Maps API"],
problem:"New students struggle to find campus locations.",
solution:"Provides interactive campus navigation."
},

{
title:"Budget & Expense Tracker App",
category:"Mobile",
difficulty:"Beginner",
description:"Track spending habits.",
tech:["Flutter","Firebase"],
problem:"Students overspend due to poor tracking.",
solution:"Tracks and categorizes expenses."
},

{
title:"Local Delivery Tracking App",
category:"Mobile",
difficulty:"Intermediate",
description:"Track deliveries in real-time.",
tech:["React Native","Firebase"],
problem:"Customers cannot track local deliveries.",
solution:"Provides live tracking updates."
},

{
title:"Emergency Alert App",
category:"Mobile",
difficulty:"Intermediate",
description:"Send SOS notifications.",
tech:["Flutter","Firebase","GPS API"],
problem:"People cannot alert contacts during emergencies.",
solution:"Sends instant SOS with location."
},

{
title:"Bus Route Tracking App",
category:"Mobile",
difficulty:"Advanced",
description:"Simulated bus tracking.",
tech:["React Native","Google Maps API"],
problem:"Passengers lack real-time bus tracking.",
solution:"Displays live bus locations."
},

{
title:"Health Reminder App",
category:"Mobile",
difficulty:"Beginner",
description:"Medication reminders.",
tech:["Flutter","SQLite"],
problem:"Patients forget medication schedules.",
solution:"Sends timely medication reminders."
},

{
title:"Campus Food Ordering App",
category:"Mobile",
difficulty:"Intermediate",
description:"Order food via app.",
tech:["Flutter","Firebase"],
problem:"Long queues at campus cafeterias.",
solution:"Allows students to pre-order meals."
},

{
title:"Community Lost & Found App",
category:"Mobile",
difficulty:"Beginner",
description:"Report lost items.",
tech:["Flutter","Firebase"],
problem:"Lost items are difficult to recover.",
solution:"Connects finders and owners digitally."
},

{
title:"Event Management Mobile App",
category:"Mobile",
difficulty:"Intermediate",
description:"QR event ticket system.",
tech:["React Native","Firebase","QR API"],
problem:"Event entry is slow and insecure.",
solution:"Uses QR codes for ticket validation."
},

{
title:"Peer Skill Sharing App",
category:"Mobile",
difficulty:"Advanced",
description:"Students offer tutoring.",
tech:["Flutter","Node.js","MongoDB"],
problem:"Students struggle to find peer tutors.",
solution:"Connects students for skill exchange."
},

/* ================= IoT ================= */

{
title:"Smart Energy Monitoring System",
category:"IoT",
difficulty:"Advanced",
description:"Track electricity consumption.",
tech:["Arduino","Python","IoT Sensors"],
problem:"Households cannot monitor energy usage.",
solution:"Tracks and visualizes real-time power usage."
},

{
title:"Smart Irrigation System",
category:"IoT",
difficulty:"Intermediate",
description:"Automated irrigation.",
tech:["Arduino","Soil Sensors","Python"],
problem:"Water wastage in farming.",
solution:"Automatically waters crops based on soil moisture."
},

{
title:"Smart Parking System",
category:"IoT",
difficulty:"Advanced",
description:"Sensor-based parking detection.",
tech:["Raspberry Pi","Ultrasonic Sensors"],
problem:"Drivers waste time finding parking.",
solution:"Detects and displays available parking spots."
},

{
title:"Air Quality Monitoring System",
category:"IoT",
difficulty:"Intermediate",
description:"Monitor pollution levels.",
tech:["Arduino","Gas Sensors","Python"],
problem:"Communities lack air pollution monitoring.",
solution:"Tracks and reports air quality levels."
},

{
title:"RFID Smart Attendance System",
category:"IoT",
difficulty:"Intermediate",
description:"Automated attendance tracking.",
tech:["RFID Module","Arduino","MySQL"],
problem:"Manual attendance marking is inefficient.",
solution:"Automates attendance using RFID cards."
}

];

/* DISPLAY */
function displayProjects(){
let container=document.getElementById("projectContainer");
container.innerHTML="";
projects.forEach(p=>{
container.innerHTML+=`
<div class="card">
<span class="tag">${p.category}</span>
<h3>${p.title}</h3>
<p>${p.description}</p>
<button class="ai-btn" onclick="openProject('${p.title}')">View</button>
</div>`;
});
}
displayProjects();

/* OPEN */
function openProject(title){
let p=projects.find(x=>x.title===title);
document.getElementById("aiModal").style.display="flex";
document.getElementById("aiContent").innerHTML=`
<h2>${p.title}</h2>
<p><b>Description:</b><br>${p.description}</p>
<p><b>Problem:</b><br>${p.problem}</p>
<p><b>Solution:</b><br>${p.solution}</p>
<br><button onclick="closeModal()">Close</button>`;
}

function closeModal(){
document.getElementById("aiModal").style.display="none";
}

/* SMART AI */
function startAIQuiz(){
let pick=projects[Math.floor(Math.random()*projects.length)];
openProject(pick.title);
}

</script>
