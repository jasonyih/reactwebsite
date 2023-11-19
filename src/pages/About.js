import React from "react";

function About() {
    return (
    <div className="aboutpage">
        <h2 className="intro" id="about">About me</h2>

<p className="hobbiestxt">I like working out, playing badminton, running, and playing video games. I also like listening to <a href="music.html">music</a> and watching shows and movies.</p>
<p className="hobbiestxt">I also like coding and learning new things. My resume is <a href="#" id="openResumeLink">here.</a></p>

<div id="resumeOverlay">
    <div id="resumeContainer">
        <object data="/Users/jason/AppDev/HTML/MyWebsite/Jason_Yih_Resume_25.pdf" type="application/pdf" width="100%" height="650">
            PDF unable to be opened. <a href="/Users/jason/AppDev/HTML/MyWebsite/Jason_Yih_Resume_25.pdf">Download PDF</a> instead.
        </object>
        <button id="closeResumeButton">Close</button>
    </div>
</div>

<p className="hobbiestxt">Here is my LinkedIn page as well.</p>
<button id="linkedin">
    <a href="https://www.linkedin.com/in/jason-yih">My LinkedIn Page</a>
 </button>
    </div>
        
    );
}

export default About;