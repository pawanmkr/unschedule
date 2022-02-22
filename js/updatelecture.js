

function update_lecture() {

    // ------checking lectures--------------
    var lecture;
    var teacher = document.querySelector('.subject-teacher');
    var subject = document.querySelector('.subject-code');


    if(hours12 == 09 && minutes >= 40) {
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
    else if(hours12 == 12 && minutes < 01) {
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

    else if(hours12 == 01 && (minutes >= 00 && minutes <= 40)) {
        lecture = 5;

        teacher.innerHTML = teachersName[dayCount-1][lecture-1];
        subject.innerHTML = subjectCode[dayCount-1][lecture-1];
    }

    else if(hours12 == 01 && minutes >= 50) {
        lecture = 6;

        teacher.innerHTML = teachersName[dayCount-1][lecture-1];
        subject.innerHTML = subjectCode[dayCount-1][lecture-1];
    }
    else if(hours12 == 02 && minutes <= 30) {
        lecture = 6;

        teacher.innerHTML = teachersName[dayCount-1][lecture-1];
        subject.innerHTML = subjectCode[dayCount-1][lecture-1];
    }

    else if(hours12 == 02 && minutes >= 40) {
        lecture = 7;

        teacher.innerHTML = teachersName[dayCount-1][lecture-1];
        subject.innerHTML = subjectCode[dayCount-1][lecture-1];
    }
    else if(hours12 == 03 && minutes <= 20) {
        lecture = 7;

        teacher.innerHTML = teachersName[dayCount-1][lecture-1];
        subject.innerHTML = subjectCode[dayCount-1][lecture-1];
    }

    else if(hours12 == 03 && minutes >= 30) {
        lecture = 8;

        teacher.innerHTML = teachersName[dayCount-1][lecture-1];
        subject.innerHTML = subjectCode[dayCount-1][lecture-1];
    }
    else if(hours12 == 04 && minutes <= 10) {
        lecture = 8;

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