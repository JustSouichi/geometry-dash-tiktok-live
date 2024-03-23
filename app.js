const { WebcastPushConnection } = require('tiktok-live-connector');

let tiktokUsername = "magodomin";
let tiktokLiveConnection = new WebcastPushConnection(tiktokUsername);

tiktokLiveConnection.connect().then(state => {
    console.info(`Connected to roomId ${state.roomId}`);
    tiktokLiveConnection.on('gift', (gift) => {
        if (gift.giftId === 5655) { 
            console.log('rose received');
        }
    });
}).catch(err => {
    console.error('Failed to connect', err);
});