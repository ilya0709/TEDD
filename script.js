$(function() {
    let sigma;
    let er;
    let fr;
    let currRes;
    let top;
    let bottom;
    let ek;
    
    let k;
    let z;
    let b;
    let s;
 
    function getProp() {
        sigma = Number($("#sigma").val());
        er = Number($("#er").val());
        fr = Number($("#fr").val());
    };

    function getProp1() {
        sigma = Number($("#sigma1").val());
        er = Number($("#er1").val());
        fr = Number($("#fr1").val());
    };

    function getProp2() {
        sigma = Number($("#sigma2").val());
        er = Number($("#er2").val());
        fr = Number($("#fr2").val());
    };

    function getProp3() {
        sigma = Number($("#sigma3").val());
        er = Number($("#er3").val());
        fr = Number($("#fr3").val());
    };

    $("#getProp").on("click", getProp);

    function habitat() {
        top = sigma;
        bottom = (2 * Math.PI * fr * er * 8.8542e-12);
        currRes =  top / bottom;
        if(sigma == '' || er == '' || fr == '') {
            $('.result ').html("<p> Введи правильные значения </p>");
        } else {
            $('.result ').html("<p>" + 'Result:' + ' ' +  currRes + "</p>");
        }
        return currRes;
    };

    $("#getProp1").on("click", getProp1);
    $(".habitat-start").on("click", habitat);

    function resistance() {
        ek = er * 8.8542e-12;
        k = Math.sqrt( (( 2 * Math.PI * fr ) * ( 2 * Math.PI * fr )) * ek * 1.26e-6 );
        z = (2 * Math.PI * fr * 1.26e-6) / k;
        if(er == '' || fr == '' || sigma !== 0) {
            $('.result1').html("<p> Введи правильные значения </p>");
        } else {
            $('.result1').html("<p>" + 'Result:' + ' ' +  z + "</p>");
        }
    }
    $(".resistance-start").on("click", resistance);


    $("#getProp").on("click", getProp);
    function speed() {
        b = 2 * Math.PI * fr * Math.sqrt(8.8542e-12 * er * 1.26e-6) * Math.sqrt( 1/2 + 1/2 * (Math.sqrt( 1 + ( ( (sigma) / ((2 * Math.PI * fr * er * 8.8542e-12) )) * (( (sigma) / ((2* Math.PI * fr * er * 8.8542e-12))) )) )));
        s = (2 * Math.PI * fr) / b;
        if(sigma == '' || er == '' || fr == '') {
            $('.result2 ').html("<p> Введи правильные значения </p>");
        } else {
            $('.result2 ').html("<p>" + 'Result:' + ' ' +  s + "</p>");
        }
       
    }
    $("#getProp2").on("click", getProp2);
    $(".speed-start").on("click", speed);



    $("#getProp").on("click", getProp);
    function deep() {
        top = sigma;
        bottom = (2 * Math.PI * fr * er * 8.8542e-12);
        currRes =  top / bottom;
    }
    $("#getProp3").on("click", getProp3);
    $(".deep-start").on("click", deep);
})