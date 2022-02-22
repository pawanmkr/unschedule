

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