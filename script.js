$('.button').on('click', function(){
    let content = $(this).html();
    $('#display').append(content);
}