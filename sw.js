var CACHE_NAME = 'sop-zna-v3';

var ASSETS = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './img/Basislogo_farbig.png',
    './img/Patientenpfade.png',
    './img/ZNA/akute-herzinsuffizienz_diagnostischer_algorithmus.png',
    './img/ZNA/akute-intoxikation_toxidrom.png',
    './sops/abdominelle-schmerzen.js',
    './sops/aecopd.js',
    './sops/akute-alkoholintoxikation.js',
    './sops/akute-divertikulitis.js',
    './sops/akute-gastroenteritis.js',
    './sops/akute-herzinsuffizienz.js',
    './sops/akute-intoxikation.js',
    './sops/akute-mesenterialischaemie.js',
    './sops/akute-nebenniereninsuffizienz.js',
    './sops/akute-nierenschaedigung.js',
    './sops/akute-pankreatitis.js',
    './sops/akuter-gichtanfall.js',
    './sops/akuter-harnverhalt.js',
    './sops/akutes-aortensyndrom.js',
    './sops/anaemie.js',
    './sops/anaphylaxie.js',
    './sops/asthmaexazerbation.js',
    './sops/bakterielle-meningitis.js',
    './sops/bradykarde-hrst.js',
    './sops/cannabinoid-hyperemesis-syndrom.js',
    './sops/delir.js',
    './sops/diabetische-ketoazidose.js',
    './sops/dyspnoe.js',
    './sops/erbrechen.js',
    './sops/erysipel.js',
    './sops/fieber-in-der-neutropenie.js',
    './sops/fremdkoerperingestion.js',
    './sops/harnwegsinfektion.js',
    './sops/heparininduzierte-thrombozytopenie.js',
    './sops/hepatische-enzephalopathie.js',
    './sops/herz-kreislauf-stillstand.js',
    './sops/hitzschlag.js',
    './sops/hyperkaliaemie.js',
    './sops/hyperkalzaemie.js',
    './sops/hypernatriaemie.js',
    './sops/hyperosmolares-hyperglykaemisches-syndrom.js',
    './sops/hypertensiver-notfall.js',
    './sops/hypoglykaemie.js',
    './sops/hypokaliaemie.js',
    './sops/hypokalzaemie.js',
    './sops/hyponatriaemie.js',
    './sops/ikterus.js',
    './sops/kohlenmonoxidintoxikation.js',
    './sops/kopfschmerzen.js',
    './sops/lungenarterienembolie.js',
    './sops/myxoedemkoma.js',
    './sops/nicht-st-hebungsinfarkt.js',
    './sops/nierenkolik.js',
    './sops/obere-gastrointestinale-blutung.js',
    './sops/oesophageale-bolusimpaktion.js',
    './sops/pleuraerguss.js',
    './sops/pneumonie.js',
    './sops/schock.js',
    './sops/sepsis.js',
    './sops/spontan-bakterielle-peritonitis.js',
    './sops/status-epilepticus.js',
    './sops/sterbephase-palliativ.js',
    './sops/st-hebungsinfarkt.js',
    './sops/stromunfall.js',
    './sops/synkope.js',
    './sops/tachykarde-hrst.js',
    './sops/thoraxschmerzen.js',
    './sops/thrombozytopenie.js',
    './sops/tiefe-venenthrombose.js',
    './sops/tonsillitis.js',
    './sops/transiente-globale-amnesie.js',
    './sops/tumorlysesyndrom.js',
    './sops/unklare-vigilanzminderung.js',
    './sops/untere-gastrointestinale-blutung.js',
    './sops/vena-cava-superior-syndrom.js',
    './sops/vorhofflimmern.js',
    './sops/zerebrale-metastasen.js',
    './sops/zerebrale-venen-sinusthrombose.js'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(ASSETS);
        }).then(function() {
            return self.skipWaiting();
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(names) {
            return Promise.all(
                names.filter(function(name) {
                    return name !== CACHE_NAME;
                }).map(function(name) {
                    return caches.delete(name);
                })
            );
        }).then(function() {
            return self.clients.claim();
        })
    );
});

self.addEventListener('fetch', function(event) {
    if (event.request.method !== 'GET') return;
    var url = event.request.url;
    if (url.indexOf('http') !== 0) return;
    event.respondWith(
        caches.match(event.request).then(function(cached) {
            var fetchPromise = fetch(event.request).then(function(response) {
                if (response && response.status === 200 && response.type === 'basic') {
                    var clone = response.clone();
                    caches.open(CACHE_NAME).then(function(cache) {
                        try {
                            cache.put(event.request, clone);
                        } catch(e) {}
                    });
                }
                return response;
            }).catch(function() {
                return cached;
            });
            return cached || fetchPromise;
        })
    );
});

self.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});