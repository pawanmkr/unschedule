//this is the correct way
//import * as Ul from './updatelecture.js';
//import {default as demo} from './stopwatch.js';
//import * as Naam from './ignore.js';



// first of all time

export function getPresentData() {

    var present = new Date();

    var milliseconds = present.getMilliseconds();
    var seconds = present.getSeconds();
    var minutes = present.getMinutes();
    var hours24 = present.getHours();
    
    var hours12 = hours24;
    var ampm = 'am';


    if(hours24 >11) {
        ampm = "pm";
    }

        if(hours24 > 12){

            hours12 = hours24 - 12;
        }

        if(hours12 < 10) {
            hours12 = '0' + hours12;
        }
    
        if(minutes < 10) {
            minutes = '0' + minutes;
        }

        if(seconds < 10) {
            seconds = '0' + seconds;
        }
    
    // day and date
    var date = present.getDate();
    var dayCount = present.getDay();
    var day = present.toLocaleString('default', {weekday: 'long'});
    var month = present.toLocaleString('default', {month: 'short'});
    var year = present.getFullYear();

    // realtime update below

        var fullDate = document.getElementById('date');
        fullDate.innerHTML = date + " " + month.toLowerCase() + " " + year;

        var toDay = document.getElementById('day');
        toDay.innerHTML = day;


        var time = document.getElementById('time');
        time.innerHTML = hours12 + ':' + minutes + ':' + seconds + ' ' + ampm;

    
    
        // next part beigns
        
        var weekday = document.querySelector('.' + day);
        weekday.classList.add("extend");

        //greetings
        var greet = document.querySelector('.greetings');

        if(hours24 < 12 && hours24 > 6) {
            greet.innerHTML = "it's, morning";
        }
        else if(hours24 < 16) {
            greet.innerHTML = "it's, afternoon";
        }
        else if(hours24 < 20) {
            greet.innerHTML = "it's, evening";
        }
        else {
            greet.innerHTML = "it's, night & also dark";
        }

        //sun rotation
        rotateSun();

        function rotateSun() {
            //sun rotation
            var sun = document.querySelector('.sun');
            sun.style.transform = 'rotate(10deg)';
        }


        illDecideLater();
        update_lecture();

        function update_lecture() {

            // ------checking lectures--------------
            var lecture;
            var teacher = document.querySelector('.subject-teacher');
            var subject = document.querySelector('.subject-code');
        
        
            if(hours12 == 9 && minutes >= 40) {
                lecture = 1;
        
                teacher.innerHTML = teachersName[dayCount-1][lecture-1];
                subject.innerHTML = subjectCode[dayCount-1][lecture-1];
            }
            else if(hours12 == 10 && minutes <= 20) {
                lecture = 1;
        
                teacher.innerHTML = teachersName[dayCount-1][lecture-1];
                subject.innerHTML = subjectCode[dayCount-1][lecture-1];
            }
            
            else if(hours12 == 10 && minutes >= 30) {
                lecture = 2;
        
                teacher.innerHTML = teachersName[dayCount-1][lecture-1];
                subject.innerHTML = subjectCode[dayCount-1][lecture-1];
            }
            else if(hours12 == 11 && minutes <= 10) {
                lecture = 2;
        
                teacher.innerHTML = teachersName[dayCount-1][lecture-1];
                subject.innerHTML = subjectCode[dayCount-1][lecture-1];
            }
        
            else if(hours12 == 11 && minutes >= 20) {
                lecture = 3;
        
                teacher.innerHTML = teachersName[dayCount-1][lecture-1];
                subject.innerHTML = subjectCode[dayCount-1][lecture-1];
            }
            else if(hours12 == 12 && minutes < 1) {
                lecture = 3;
        
                teacher.innerHTML = teachersName[dayCount-1][lecture-1];
                subject.innerHTML = subjectCode[dayCount-1][lecture-1];
            }
        
            else if(hours12 == 12 && minutes >= 10) {
                lecture = 4;
        
                teacher.innerHTML = teachersName[dayCount-1][lecture-1];
                subject.innerHTML = subjectCode[dayCount-1][lecture-1];
            }
            else if(hours12 == 12 && minutes <= 50) {
                lecture = 4;
        
                teacher.innerHTML = teachersName[dayCount-1][lecture-1];
                subject.innerHTML = subjectCode[dayCount-1][lecture-1];
            }
        
            else if(hours12 == 1 && (minutes >= 0 && minutes <= 40)) {
                lecture = 5;
        
                teacher.innerHTML = teachersName[dayCount-1][lecture-1];
                subject.innerHTML = subjectCode[dayCount-1][lecture-1];
            }
        
            else if(hours12 == 1 && minutes >= 50) {
                lecture = 6;
        
                teacher.innerHTML = teachersName[dayCount-1][lecture-1];
                subject.innerHTML = subjectCode[dayCount-1][lecture-1];
            }
            else if(hours12 == 2 && minutes <= 30) {
                lecture = 6;
        
                teacher.innerHTML = teachersName[dayCount-1][lecture-1];
                subject.innerHTML = subjectCode[dayCount-1][lecture-1];
            }
        
            else if(hours12 == 2 && minutes >= 40) {
                lecture = 7;
        
                teacher.innerHTML = teachersName[dayCount-1][lecture-1];
                subject.innerHTML = subjectCode[dayCount-1][lecture-1];
            }
            else if(hours12 == 3 && minutes <= 20) {
                lecture = 7;
        
                teacher.innerHTML = teachersName[dayCount-1][lecture-1];
                subject.innerHTML = subjectCode[dayCount-1][lecture-1];
            }
        
            else if(hours12 == 3 && minutes >= 30) {
                lecture = 8;
        
                teacher.innerHTML = teachersName[dayCount-1][lecture-1];
                subject.innerHTML = subjectCode[dayCount-1][lecture-1];
            }
            else if(hours12 == 4 && minutes <= 10) {
                lecture = 8;
        
                teacher.innerHTML = teachersName[dayCount-1][lecture-1];
                subject.innerHTML = subjectCode[dayCount-1][lecture-1];
            }

            //-------testing
            else if(hours12 == 8 && minutes >= 10) {
                lecture = 2;
        
                teacher.innerHTML = teachersName[dayCount-1][lecture-1];
                subject.innerHTML = subjectCode[dayCount-1][lecture-1];
            }
        
            var classCount = 'lecture' + dayCount + "" + lecture;
            var fetchClass = document.querySelector('.' + classCount);
            fetchClass.classList.add("ongoing");
        
        
            nextClass();
            
            function nextClass() {
        
                if(lecture == 8) {
                    var temp = dayCount + 1;
                    var temp2 = 1;
        
                    var nextLecture = 'lecture' + temp + "" + temp2;
                }
                else {
                    var nextLecture = 'lecture' + dayCount + "" + (lecture + 1);
                }            
        
                var nextClass = document.querySelector('.' + nextLecture);
                nextClass.classList.add("next");
        
            }
        
        }

        function illDecideLater() {

            // next-lecture-count
            var nlc = document.querySelector('.next-lecture-time');
        
            //calculate for seconds also when only 1minute is left
        
            if(hours12 == 9 && minutes >= 40) {
                
                // total minutes left fot the next lecture calcutlation
                var leftMinutes = (60 - minutes) + 30;
                nlc.innerHTML = "next in " + leftMinutes + " m" ;
            }
            else if(hours12 == 10 && minutes <= 29) {
                
                // total minutes left fot the next lecture calcutlation
                var leftMinutes = 30 - minutes;
                nlc.innerHTML = "next in " + leftMinutes + " m" ;
            }
            
            else if(hours12 == 10 && minutes >= 30) {
                
                // total minutes left fot the next lecture calcutlation
                var leftMinutes = (60 - minutes) + 20;
                nlc.innerHTML = "next in " + leftMinutes + " m" ;
            }
            else if(hours12 == 11 && minutes <= 19) {
                
                // total minutes left fot the next lecture calcutlation
                var leftMinutes = 20 - minutes;
                nlc.innerHTML = "next in " + leftMinutes + " m" ;
            }
        
            else if(hours12 == 11 && minutes >= 20) {
                
                // total minutes left fot the next lecture calcutlation
                var leftMinutes = (60 - minutes) + 10;
                nlc.innerHTML = "next in " + leftMinutes + " m" ;
            }
            else if(hours12 == 12 && minutes < 9) {
                
                // total minutes left fot the next lecture calcutlation
                var leftMinutes = 10 - minutes;
                nlc.innerHTML = "next in " + leftMinutes + " m" ;
            }
        
            else if(hours12 == 12 && (minutes >= 10 && minutes <= 60)) {
                
                // total minutes left fot the next lecture calcutlation
                var leftMinutes = 60 - minutes;
                nlc.innerHTML = "next in " + leftMinutes + " m" ;
            }
        
            else if(hours12 == 1 && (minutes >= 0 && minutes <= 49)) {
                
                // total minutes left fot the next lecture calcutlation
                var leftMinutes = 50 - minutes;
                nlc.innerHTML = "next in " + leftMinutes + " m" ;
            }
        
            else if(hours12 == 1 && minutes >= 50) {
                
                // total minutes left fot the next lecture calcutlation
                var leftMinutes = (60 - minutes) + 40;
                nlc.innerHTML = "next in " + leftMinutes + " m" ;
            }
        
            else if(hours12 == 2 && minutes <= 39) {
                
                // total minutes left fot the next lecture calcutlation
                var leftMinutes = 40 - minutes;
                nlc.innerHTML = "next in " + leftMinutes + " m" ;
            }
        
            else if(hours12 == 2 && minutes >= 40) {
                
                // total minutes left fot the next lecture calcutlation
                var leftMinutes = (60 - minutes) + 30;
                nlc.innerHTML = "next in " + leftMinutes + " m" ;
            }
        
            else {
                nlc.innerHTML = "that's all for today";
            }
        
        }

}

setInterval(getPresentData, 1000);


// make a function to reload the page when lecture ends


// function for stopwatch
var zero =0;
var button = document.querySelector('.stopwatch-button');
// here in switcher 1 = running and 0 = paused
var switcher = 1;

button.addEventListener('click' || 'keydown', function startButton() {

    var buttonText = document.querySelector('.stopwatch-btn-text');
    buttonText.innerHTML = 'stop';

    button.classList.add('toggleRed');

    var showcount = document.querySelector('.realtime-count');

    //this line is removing event listener from button to prevent adding up count
    button.removeEventListener('click', startButton)
    // button.addEventListener('click', function stop() {
    //     clearInterval(repeat);
    //     showcount.innerHTML = "00:00:00s";

    //     button.removeEventListener('click', stop);
    //     button.addEventListener('click', startButton);
    //     button.classList.remove('toggleRed');

    //     buttonText.innerHTML = 'start time count';
    // })

    var count = zero;
    var minute = 0;

    function increase() {
        count += 1;

        var counthours

        //single to double character
        if(count < 10) {
            pushCount = '0' + count;
        }else {
            pushCount = count;
        }

        //60 ---> 1 hr/mn

        if(pushCount == 60) {
            count = 0;
            minute += 1;
        }

        if(minute < 10) {
            pushMinutes = '0' + minute;
        }

        showcount.innerHTML = "00:" + pushMinutes + ":" + pushCount + 's';
    }

    var repeat = setInterval(increase, 1000);

    document.addEventListener('keydown', function pause(event) {
        
        if(event.which === 32 ) {

            clearInterval(repeat);
            button.addEventListener('click', startButton);
            zero = count;

            buttonText.innerHTML = 'paused'
            switcher = 0;
        }
        else if(event.which === 32) {
            startButton();
        }
        
    })

})


//array where teacher's name is stored

var teachersName = [
    //monday
    ["kanwalpreet kaur", "sukhmanpreet singh", "neha", null, "saroj kumar", "saroj kumar", "monika" ],
    //tuesday
    ["er. jyoti", "er. sakshi", "er. jyoti", "er. jyoti", null, "dr. abhilasha sharma", "ms. gurinder kaur", null],
    //wednesday
    ["kanwaldeep kaur", "priya rana", "priya rana", "gurinder kaur", null, "palvi sharma", "gurinder kaur", null],
    //thursday
    ["neha", "monika", "kanwaldeep kaur", null, "gurinder kaur", "neha", "neha", null],
    //friday
    ["neha", "saroj kumar", "saroj kumar", "suhmanpreet singh", null, "gurinder kaur", "palvi sharma", null],
    //saturday
    [null, "neha", null, null, "moocs", null, null, null]
];

console.log(teachersName[0][0]);

//subject code

var subjectCode = [
    //monday
    ['computer network', 'microprocessor and interfacing', "software engineering" ,null, "programming in python lab", "programming in python lab", "life skills and mentoring", null],
    //tuesday
    ["microprocessor & interfacing", "computer network", "microprocessor & interfacing lab", "microprocessor & interfacing lab", null, "principles of artificial intelligence", "probability & statistics", null],
    //wednesday
    ["computer networks", "microprocessor & interfacing lab", "microprocessor & interfacing lab", "probability & statistics", null, "principles of artificial intelligence", "probability & statistics", null],
    //friday
    ["software engineering", "project -1", "computer networks", null, "probability & statistics", "software engineering lab", "software engineering lab", null],
    //friday
    ["software engineering", "programmming in python lab", "programming in python lab", "microprocessor & interfacing lab", null, "probability & statistics", "principles of artificial intelligence", null],
    //saturday
    [null, "creativity & critical thinking", null, null, "moocs", null, null, null]
];