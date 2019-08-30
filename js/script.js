
$('input').on(
    'keyup',
    function(){
        var iniInput = $('input').val();
        $('p').text(iniInput);
    }
)

document.querySelector('h1')