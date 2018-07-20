/*
 * Copyright 2015-2017 Hewlett Packard Enterprise Development Company, L.P.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 */

define([
    'js-whatever/js/substitution'
], function(substitution) {
    'use strict';

    return substitution({
        'search.error.noIndexes': 'Lista dei databases IDOL non ancora pronta',
        'search.indexes': 'Databases',
        'search.indexes.all': 'Tutti',
        'search.indexes.empty': 'Nessun Database trovato',
        'search.indexes.invalidIndex': 'Il Database non esiste',
        'search.document.index': 'Database'
    });
});
