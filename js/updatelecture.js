import * as base from './main.js';

export function update_lecture() {

    // ------checking lectures--------------
    var lecture;
    var teacher = document.querySelector('.subject-teacher');
    var subject = document.querySelector('.subject-code');


    if(base.hours12 == 9 && base.minutes >= 40) {
        lecture = 1;

        teacher.innerHTML = teachersName[dayCount-1][lecture-1];
        subject.innerHTML = subjectCode[dayCount-1][lecture-1];
    }
    else if(base.hours12 == 10 && base.minutes <= 20) {
        lecture = 1;

        teacher.innerHTML = teachersName[dayCount-1][lecture-1];
        subject.innerHTML = subjectCode[dayCount-1][lecture-1];
    }
    
    else if(base.hours12 == 10 && base.minutes >= 30) {
        lecture = 2;

        teacher.innerHTML = teachersName[dayCount-1][lecture-1];
        subject.innerHTML = subjectCode[dayCount-1][lecture-1];
    }
    else if(base.hours12 == 11 && base.minutes <= 10) {
        lecture = 2;

        teacher.innerHTML = teachersName[dayCount-1][lecture-1];
        subject.innerHTML = subjectCode[dayCount-1][lecture-1];
    }

    else if(base.hours12 == 11 && base.minutes >= 20) {
        lecture = 3;

        teacher.innerHTML = teachersName[dayCount-1][lecture-1];
        subject.innerHTML = subjectCode[dayCount-1][lecture-1];
    }
    else if(base.hours12 == 12 && base.minutes < 1) {
        lecture = 3;

        teacher.innerHTML = teachersName[dayCount-1][lecture-1];
        subject.innerHTML = subjectCode[dayCount-1][lecture-1];
    }

    else if(base.hours12 == 12 && base.minutes >= 10) {
        lecture = 4;

        teacher.innerHTML = teachersName[dayCount-1][lecture-1];
        subject.innerHTML = subjectCode[dayCount-1][lecture-1];
    }
    else if(base.hours12 == 12 && base.minutes <= 50) {
        lecture = 4;

        teacher.innerHTML = teachersName[dayCount-1][lecture-1];
        subject.innerHTML = subjectCode[dayCount-1][lecture-1];
    }

    else if(base.hours12 == 1 && (base.minutes >= 0 && base.minutes <= 40)) {
        lecture = 5;

        teacher.innerHTML = teachersName[dayCount-1][lecture-1];
        subject.innerHTML = subjectCode[dayCount-1][lecture-1];
    }

    else if(base.hours12 == 1 && base.minutes >= 50) {
        lecture = 6;

        teacher.innerHTML = teachersName[dayCount-1][lecture-1];
        subject.innerHTML = subjectCode[dayCount-1][lecture-1];
    }
    else if(base.hours12 == 2 && base.minutes <= 30) {
        lecture = 6;

        teacher.innerHTML = teachersName[dayCount-1][lecture-1];
        subject.innerHTML = subjectCode[dayCount-1][lecture-1];
    }

    else if(base.hours12 == 2 && base.minutes >= 40) {
        lecture = 7;

        teacher.innerHTML = teachersName[dayCount-1][lecture-1];
        subject.innerHTML = subjectCode[dayCount-1][lecture-1];
    }
    else if(base.hours12 == 3 && base.minutes <= 20) {
        lecture = 7;

        teacher.innerHTML = teachersName[dayCount-1][lecture-1];
        subject.innerHTML = subjectCode[dayCount-1][lecture-1];
    }

    else if(base.hours12 == 3 && base.minutes >= 30) {
        lecture = 8;

        teacher.innerHTML = teachersName[dayCount-1][lecture-1];
        subject.innerHTML = subjectCode[dayCount-1][lecture-1];
    }
    else if(base.hours12 == 4 && base.minutes <= 10) {
        lecture = 8;

        teacher.innerHTML = teachersName[dayCount-1][lecture-1];
        subject.innerHTML = subjectCode[dayCount-1][lecture-1];
    }
    //-------testing
    else if(base.hours24 > 10) {
        lecture = 2;
        console.log("done");

        teacher.innerHTML = teachersName[base.dayCount-1][lecture-1];
        subject.innerHTML = subjectCode[base.dayCount-1][lecture-1];
    }

    var classCount = 'lecture' + base.dayCount + "" + lecture;
    var fetchClass = document.querySelector('.' + classCount);
    fetchClass.classList.add("ongoing");


    // nextClass();
    
    // function nextClass() {

    //     if(lecture == 8) {
    //         var temp = dayCount + 1;
    //         var temp2 = 1;

    //         var nextLecture = 'lecture' + temp + "" + temp2;
    //     }
    //     else {
    //         var nextLecture = 'lecture' + dayCount + "" + (lecture + 1);
    //     }            

    //     var nextClass = document.querySelector('.' + nextLecture);
    //     nextClass.classList.add("next");

    //}

}