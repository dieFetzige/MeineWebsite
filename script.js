function redirectTo(packageName) {
    const urls = {
        quickfix: 'fragebogen_quickfix.html',
        reawakened: 'fragebogen_reawakened.html',
        newsoul: 'fragebogen_newsoul.html'
    };
    const url = urls[packageName];
    if (url) {
        window.open(url, '_blank');
    } else {
        alert('Fragebogen nicht gefunden.');
    }
}
