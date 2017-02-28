/**
 * Created by ncyang on 26/02/2017.
 */

import X2JS from 'x2js';

function getMoviesFromApiAsync(callback) {
    return fetch('http://www.meituan.com/api/v1/divisions')
        .then((response) => {
            var parseString = require('react-native-xml2js').parseString;
            parseString(response, function (err, result) {
                callback(result)
            });
        })
        .catch((error) => {
            console.error(error);
        });
}

export {getMoviesFromApiAsync}