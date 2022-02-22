

function illDecideLater() {

    // next-lecture-count
    var nlc = document.querySelector('.next-lecture-time');

    //calculate for seconds also when only 1minute is left

    if(hours12 == 09 && minutes >= 40) {
        
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

    else if(hours12 == 01 && (minutes >= 00 && minutes <= 49)) {
        
        // total minutes left fot the next lecture calcutlation
        var leftMinutes = 50 - minutes;
        nlc.innerHTML = "next in " + leftMinutes + " m" ;
    }

    else if(hours12 == 01 && minutes >= 50) {
        
        // total minutes left fot the next lecture calcutlation
        var leftMinutes = (60 - minutes) + 40;
        nlc.innerHTML = "next in " + leftMinutes + " m" ;
    }

    else if(hours12 == 02 && minutes <= 39) {
        
        // total minutes left fot the next lecture calcutlation
        var leftMinutes = 40 - minutes;
        nlc.innerHTML = "next in " + leftMinutes + " m" ;
    }

    else if(hours12 == 02 && minutes >= 40) {
        
        // total minutes left fot the next lecture calcutlation
        var leftMinutes = (60 - minutes) + 30;
        nlc.innerHTML = "next in " + leftMinutes + " m" ;
    }

    else {
        nlc.innerHTML = "that's all for today";
    }

}