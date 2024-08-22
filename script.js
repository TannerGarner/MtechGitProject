$('.button').on('click', function(){
    let content = $(this).html();
    $('#display').append(content);
})

$('.clear').on('click', function(){
    $('#display').empty()
})

$('.equals').on('click', function(){
    let compute = $('#display').text()
    compute = eval(compute)
    $('#display').text(compute)
})