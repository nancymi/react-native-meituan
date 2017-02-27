/**
 * Created by ncyang on 26/02/2017.
 */
import XMLParser from 'react-xml-parser';

function getMoviesFromApiAsync() {
    return fetch('http://www.meituan.com/api/v1/divisions')
        .then((response) => {
            console.log(response);
            return new XMLParser().parse(response).toString();
        })
        .catch((error) => {
            console.error(error);
        });
}

export {getMoviesFromApiAsync}