﻿// Files to cache
var cacheName = 'proyecto2-v1';
var appShellFiles = [
  '/proyecto2/',
  '/proyecto2/favicon2.ico',
  '/proyecto2/logo.png',
  '/proyecto2/launcher-icon-1x.png',
  '/proyecto2/launcher-icon-2x.png',
  '/proyecto2/launcher-icon-3x.png'
];


// Installing Service Worker
self.addEventListener('install', function(e) {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(contentToCache);
    })
  );
});

// Fetching content using Service Worker
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then(function(response) {
        return caches.open(cacheName).then(function(cache) {
          console.log('[Service Worker] Caching new resource: ' + e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});