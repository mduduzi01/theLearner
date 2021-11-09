const Learners = ["Mduduzi","Kagisho","Lucky","Sophie","Precious","Selina","Happy","Andisiwe","Khumbulani","Mmapaseka","Sithembiso","Ntombela","Wandile","Vusimuzi","Nkosiphendule"];

const auto = document.getElementById("auto");

for(let a = 0; a <Learners.length; a++){

        auto.innerHTML += "<hr>" + Learners [a] + "</hr>";

}

var student = ["Mduduzi","Kagisho","Lucky","Sophie","Precious","Selina","Happy","Andisiwe","Khumbulani","Mmapaseka","Sithembiso","Ntombela","Wandile","Vusimuzi","Nkosiphendule"];

var text = document.getElementById("text");

for(let a = 0; a <Learners.length; a++){

        text.innerHTML += "<li>" + student [a] + "</li>";

}