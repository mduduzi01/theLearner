const Learners = ["Mduduzi","Kagisho","Lucky","Sophie","Precious","Selina","Happy","Andisiwe","Khumbulani","Mmapaseka","Sithembiso","Ntombela","Wandile","Vusimuzi","Nkosiphendule"];

const auto = document.getElementById("auto");

for(let a = 0; a <Learners.length; a++){

        auto.innerHTML += "<p>" + Learners [a] + "</p>";

}