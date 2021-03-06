$( document ).ready(function() {

var rightAnswer = 0;
var wrongAnswer = 0;
var arrayCounter = 0;
var number = 120;
//Objects of Questions
var questionOb = [

	{
	  	question: "A 60-year old female presents to the emergency room with a history of falling on her right elbow. She cannot raise her right arm. Physical exam reveals loss of sensation over the upper lateral side of the right arm and shoulder. Radiology reveals fracture of surgical neck of the humerus. Which of the following muscles is supplied by the nerve that is most likely damaged?",
	 	choice1: " Infraspinatus",
	 	choice2: "Supraspinatus",
	 	choiceCorrect: "Teres minor"
	},

	{
		question: "The medical condition, Herpes Zoster is commonly known as what?",
		choiceCorrect: "Shingles",
		choice1: "Chicken Pox",
		choice2: "Cold Sores"
	},

	{
		question: "A 17-year-old boy presents to the emergency room with severe bleeding from his right hand. He was involved in a gang fight an hour ago where he received a penetrating stab wound by a sharp knife in the region of the 'anatomical snuff box'. Damage to which artery is most likely responsible for this excessive bleeding?",
		choice1: "Ulnar artery",
		choiceCorrect: "Radial Artery",
		choice2: "Anterior carpal arch"
		
	},

	{
		question: "Pyrosis is the technical term for which common complaint?",
		choice1: "Back Pain",
		choice2: "Stomach ",
		choiceCorrect: "Heartburn"
	},

	{
		question: "A 25-year-old male comes to his physician for a follow-up visit with weakness of his right hand. Two months ago, he suffered a motor vehicle accident in which his right hand was injured. On examination, he is unable to flex the metacarpophalangeal joints of the ring and index finger and is unable to adduct these fingers. Which of the following muscles are most likely paralyzed?",
		choiceCorrect: "Palmar interossei muscles",
		choice1: "Dorsal interossei muscles",
		choice2: "Extensor digitorum"
		
	},

	{
		question: "Transmissible spongiform encephalopathy is a form of what disease?",
		choice1: "Viral",
		choice2: "Bacterial",
		choiceCorrect: "Prion"
	},

	{
		question: "A 38-year-old female had an enlarged thyroid gland compressing the trachea. A partial thyroidectomy was suggested. During surgery, the young surgeon ligated the inferior thyroid arteries as close to the poles as possible to prevent intraoperative hemorrhage. After 14 days, the patient presents with persistent hoarseness of voice. The most likely cause could be:",
		choice1: "External laryngeal nerve damage",
		choiceCorrect: "Recurrent laryngeal nerve damage",
		choice2: "Phrenic nerve damage"
		
	},

	{
		question: "A 39-year-old male presents with painless swelling of the right testes and sensation of heaviness. Physical exam reveals an intra-testicular solid mass that cannot be felt separately from the testis. After evaluation, he was diagnosed with testicular seminoma. Which of the following group of lymph nodes are most likely to be involved?",
		choiceCorrect: "Para-aortic lymph nodes",
		choice1: "Para-rectal lymph nodes",
		choice2: "Deep inguinal lymph nodes"
		
	},

	{
		question: "A 41-year-old female presents with back pain that radiates along the right leg posteriorly. This pain started suddenly after lifting a heavy box, 2 days back. Physical examination reveals straight leg raise (SLR) test restricted up to 30o, unable to walk on her toes, decreased sensation along the lateral border of right foot, and diminished ankle jerk. Which of the following nerve roots is most probably compressed?",
		choice1: "3rd sacral nerve root",
		choice2: "14th lumbar nerve root",
		choiceCorrect: "1st sacral nerve root"
	},
];

//Shows Questions when Start
function showQuestion() {
	$('.question').html(questionOb[arrayCounter].question);
	$('.choices').html("<input type='radio' name='optradio'>" + "<p>" + 
		questionOb[arrayCounter].choice1 + "</p>" + "<input type='radio' name='optradio'>" + "<p>" + 
		questionOb[arrayCounter].choice2 + "</p>" + "<input type='radio' name='optradio' value='correct'>"  + "<p>" + 
		questionOb[arrayCounter].choiceCorrect + "</p>");
}

//Results
function showResults() {
	var percent = rightAnswer / questionOb.length * 100;
	var percentage = percent.toFixed(0);
	$('.question').hide();
	$('.choices').hide();
	$('.results').html("<p>Correct: " + rightAnswer + "</p><br>" + "<p>Incorrect: " + wrongAnswer + 
		"</p><br>" + "<p> Correct: " + percentage + "%</p>")
}

// Start Timer Counter
function run(){
      counter = setInterval(increment, 1000);
    }


function increment(){
      number--
      document.getElementById('timer').innerHTML = ( number )
      if (number === 0){
   		stop();
   		$('#timer').hide();
   		showResults();
      }
    }

function stop(){
      clearInterval(counter);
    }

//Start Button
$('.start').click(function() {
	alert("You have 2 Minutes to Complete");
	run();
	showQuestion();
	$('.start').hide();
});


//Score Counter
$('.choices').on('change', function() {
   if($('input[name=optradio]:checked', '.choices').val() == 'correct') {
   	rightAnswer ++;
   } else {
   	wrongAnswer ++;
   }; 
   arrayCounter ++;

   if(arrayCounter == questionOb.length) {
   		stop();
   		$('#timer').hide();
   		showResults();
   } 
   else {
   showQuestion();
	}
});




});