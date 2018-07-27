class MessageHandler {
    async wow() {
        const tab = await createTab({
            url: 'https://p.eagate.573.jp/game/popn/usaneko/p/playdata/mu_top.html?page=0&version=0',
            active: false,
        });
        return 'ho';
    }
}

const handler = new MessageHandler();

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const { type, args } = message;
    const method = handler[type];
    method(...args).then(value => {
        const response = {
            type: 'return',
            value,
        };
        console.log('---');
        console.log('message:', message);
        console.log('sender:', sender);
        console.log('response:', response);
        // sendResponse(response);
    });
    sendResponse({
        type: 'return',
        value: 'aaaaa',
    });
});

function createTab({ url, active }) {
    return new Promise(resolve => chrome.tabs.create(
        { url, active },
        tab => resolve(tab),
    ));
}
