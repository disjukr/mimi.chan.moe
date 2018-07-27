const crawlButton = document.getElementById('crawl');

crawlButton.addEventListener('click', async () => {
    const response = await sendMessage('wow');
    document.body.textContent = JSON.stringify(response);
});

async function sendMessage(type, ...args) {
    const response = await chrome.runtime.sendMessage({ type, args },);
    return response.value;
}
