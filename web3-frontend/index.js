const connectButton = document.getElementById('connectButton');
connectButton.addEventListener('click', () => {
    connect();
});


async function connect() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log('Connected to MetaMask');
        } catch (error) {
            console.error(error);
        }
    } else {
        console.error('MetaMask not found');
    }
    connectButton.innerHTML = 'CONNECTED';
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    console.log(accounts);
}