

function commons (type) {
    const get = document.getElementById (type) ;
    const getva = get.value;
    const convet = parseFloat (getva) ;
    return convet ; 
}


document.getElementById ("add-btn").addEventListener ("click", function () {

   var numnber1 = commons ('first-inp') ;

    var number2 = commons ("secondd-inp") ;

    var total = numnber1 + number2 ;

    
// modaal part here //

    if ( numnber1 < 0 ) {

        var modal = document.getElementById ("modal");
        modal.style.display = 'block' 

        var span = document.getElementsByClassName ("close")[0];
        span.onclick = function () {
                modal.style.display = 'none';
            }

            
    
    }
        // modal part end here // 

    else {
        const htext = document.getElementById("show");
    const getin = htext.innerText;
    const convetNum = parseFloat (getin) ;

    htext.innerText = total ;

     }

    




})



// if (numnber1 < 0) {


//     var modal = document.getElementById("modal");
   
//    var modalbtn =document.getElementById("add-btn");
   
//    var span =document.getElementsByClassName("close")[0];
   
   
//    modalbtn.onclick = function  () {
//        modal.style.display= 'block';
//    }
   
//    span.onclick = function () {
//        modal.style.display = 'none';
//    }
   
   
//     }