
import { storageService } from './storageService';

export const dineService = {
getHighlights
}

const KEY = 'highlights'

var gHighlights = [
    {
        id: 1,
        title: 'Seared Salmon Fillet',
        desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
        // imgUrl: './assets/img/menu-items/menu-item1.jpg'
        imgUrl: 'https://res.cloudinary.com/drak3llqt/image/upload/v1616408322/menu-item1_x1poc9.jpg'
    },
    {
        id: 2,
        title: 'Rosemary Filet Mignon',
        desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
        imgUrl: 'https://res.cloudinary.com/drak3llqt/image/upload/v1616408323/menu-item2_jztryc.jpg'
        // imgUrl: 'https://res.cloudinary.com/drak3llqt/image/upload/v1616408323/menu-item2_jztryc.jpg'
    },
    {
        id: 3,
        title: 'Summer Fruit Chocolate Mousse',
        desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
        imgUrl: 'https://res.cloudinary.com/drak3llqt/image/upload/v1616408322/menu-item3_tuabhy.jpg'
        // imgUrl: 'https://res.cloudinary.com/drak3llqt/image/upload/v1616408322/menu-item3_tuabhy.jpg'
    },

]

function getHighlights() {
    var highlights = storageService.loadFromStorage(KEY)
    if (!highlights || !highlights.length) highlights = gHighlights
    gHighlights = highlights
    return Promise.resolve(highlights)
}