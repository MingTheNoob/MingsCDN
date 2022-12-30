var clipboard = new ClipboardJS('.btn', {
    container: document.getElementById('copylinkbtn')
});

clipboard.on('success', function (e) {
    document.getElementById('copylinkbtn').innerHTML = 'Copied';
});

clipboard.on('error', function (e) {
    document.getElementById('copylinkbtn').innerHTML = 'Error';
});