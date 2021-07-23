/* .js files add interaction to your website */
var displayName = document.getElementById("emailScript");
var button = document.getElementById("seeEmail");

if(button){
  button.addEventListener("click", displayScript);
}

function displayScript(){
  var text = document.getElementById("name").value;
  var state = document.getElementById("state").value;
  var senator = document.getElementById("senator").value;
  displayName.innerHTML = "RE: REQUEST TO SUPPORT A PERMANENT LEGISLATIVE SOLUTION FOR DACA RECIPIENTS AND OTHER IMMIGRANT YOUTH\n Dear Senator " + senator + ":\nHello, my name is "+ text+ ", and I live in "+state+"., I'm writing to you to respectfully urge you to cosponsor and vote for a permanent legislative solution for DACA recipients and other immigrant youth, such as the Dream Act of 2021 (S.264), which would provide a roadmap to citizenship for upwards of 1.7 million Dreamers, or the American Dream and Promise Act of 2021, which would provide a pathway to citizenship for upwards of 3 million Dreamers and Temporary Protected Status (TPS) holders. These bills represents a vital effort to provide relief to our "+state+" Dreamers. Our nation desperately needs legislation that permanently protects Dreamers and establishes a roadmap to citizenship. These individuals—Americans in every sense but on paper—seek to pursue their studies, work in our communities, serve in the military, and contribute to our state and nation.\n Protection for Dreamers during the ongoing COVID-19 pandemic is particularly critical, as 202,500 DACA recipients are currently employed as essential workers keeping our country fed, safe, clean, and healthy on the front lines of a global health crisis.\n An estimated 98,000 undocumented students graduate from high school every year and nationally there are approximately 427,000 undocumented students enrolled in higher education institutions, including 181,000 DACA-eligible individuals.These students are working diligently to advance themselves, notwithstanding their uncertainty regarding whether they will be able to complete their education, much less remain and make a life in the United States.\n There is strong, bipartisan support to protect DACA recipients and other immigrant youth and for Congress to establish a roadmap to citizenship. In a February 2021 Quinnipiac poll, 83 percent of all Americans (and 66 percent of Republicans) favored “allowing undocumented immigrants who were brought to the U.S. as children to remain in the United States and eventually apply for citizenship.” In fact, according to PRRI polling, support for allowing these young individuals to gain legal resident status has steadily increased over the years. \n Your many efforts thus far to support higher education on behalf of our state and its immigrant and international students is appreciated. I sincerely hope you will continue to support those who contribute so much to our campuses, communities, and economy.\n Sincerely, "+text;
}
 
