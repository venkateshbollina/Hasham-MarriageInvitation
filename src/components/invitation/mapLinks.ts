/** Marriage venue — Shiva Parvati Kalyan Mantap, Hole-Alur */
export const MARRIAGE_LAT = 17.173693;
export const MARRIAGE_LNG = 75.948518;

export const marriageMapViewUrl = `https://www.google.com/maps?q=${MARRIAGE_LAT},${MARRIAGE_LNG}&z=17`;
export const marriageDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${MARRIAGE_LAT},${MARRIAGE_LNG}`;

const receptionPlace = "Amar Function Hall Shaikh Colony Indi";

export const receptionSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(receptionPlace)}`;
export const receptionDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(receptionPlace)}`;
