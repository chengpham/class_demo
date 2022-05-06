$(document).ready(()=>{

    $('.shape').on('mouseenter', e=>$(e.currentTarget).addClass('highlight'))
    $('.shape').on('mouseleave', e=>$(e.currentTarget).removeClass('highlight'))
    $('.shape.small').on('click', e=>$(e.currentTarget).hide())
    $('.shape.medium').on('click', e=>$(e.currentTarget).removeClass('medium').addClass('small'))
    $('.shape.large').on('click', e=>$(e.currentTarget).removeClass('large').addClass('medium'))
    
    $('tbody').prepend('<tr><td>0</td><td>-</td></tr>')

    // $('#form-1').submit(function(e){
    //     e.preventDefault();
    //     $('#form-message').append($(this).find('input[type=text]').val());
    // });

    // $('#form-1 input[type=submit]').on('click', e=>{e.preventDefault(); $('#form-message').html($('input[type=text]').val())})
    $('#button-1').on('click', e=>$('#green-container').toggleClass('container') )
    $('#button-2').on('click', e=>$('#button-message').fadeOut())
    $('#button-3').on('click', e=>$('#button-message').fadeIn())
    $('#button-4').on('click', e=>$('#green-container').slideUp())

    // $('#form-1 input[type=text]').on('keyup', function(e){ 
    //     if ($(this).val().length >= 0) $('#form-message').html(`${14 - $(this).val().length} characters remaining.`) 
    // })

    $(this).keypress(e=>{
        if (e.key=='g') $('.shape.grey').toggle()
        if (e.keyCode==32) $('#green-container').append('<div class="small blue circle"></div>')
    })

    $('#form-1').submit(function(e){
        e.preventDefault();
        if($(`.shape.${$(this).find('input[type=text]').val()}`).length>0){
            $('.shape').removeClass($(this).find('input[type=text]').val())
        } else alert("Entered color is not a valid option!")
        $(this).find('input[type=text]').val('')
    });

    $('#form-1 input[type=text]').on('keyup', function(e){ 
        const reverseString = str => (str === '')?'':reverseString(str.substr(1)) + str.charAt(0)
        $('#form-message').text(reverseString($(this).val())) 
    })
    
    $('#orange-container').on('click', e=>$('#orange-container > .shape').removeClass('red'))
});

