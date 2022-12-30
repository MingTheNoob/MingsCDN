var $shareLink = $('#sharelink'),
    $downloadLink = $('#downloadlink'),
    $copyButton = $('#copylinkbtn');

$shareLink.on('keyup paste', function () {
    var link = $shareLink.val(),
        l = link.replace(/\/file\/d\/(.+)\/(.+)/, "/uc?export=download&id=$1");
    if (l !== link) {
        $downloadLink.val(l);
        $copyButton.removeAttr('disabled');
    } else {
        $downloadLink.val('');
        $copyButton.attr('disabled', 'disabled');
    }
});

$downloadLink.on('click', function () {
    $downloadLink.select();
});

var clipboard = new ClipboardJS('.btn', {
    container: document.getElementById('copylinkbtn')
});

clipboard.on('success', function (e) {
    document.getElementById('copylinkbtn').innerHTML = 'Copied';
});

clipboard.on('error', function (e) {
    document.getElementById('copylinkbtn').innerHTML = 'Error';
});