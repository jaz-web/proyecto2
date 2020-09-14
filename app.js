// Registering Service Worker
/*if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/proyecto2/sw.js');
};*/

//****************

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/proyecto2/sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
