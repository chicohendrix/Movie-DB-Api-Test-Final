$(document).ready(function(){
    console.log("Ready!");
    makeRequest();
})

function makeRequest(){
    $.ajax({
        method:'GET',
        url:'/movie',
        success: (data) => {
            console.log(data);
        }
    })

}