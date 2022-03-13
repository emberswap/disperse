import { initializeProvider } from '@metamask/providers';

// Create a stream to a remote provider:
const metamaskStream = new LocalMessageDuplexStream({
    name: 'inpage',
    target: 'contentscript',
});

// this will initialize the provider and set it as window.ethereum
initializeProvider({
    connectionStream: metamaskStream,
});

const { ethereum } = window;
var web3;
    window.userWalletAddress = null
const loginButton = document.getElementById('loginButton')


    function toggleButton() {
              if (!window.ethereum) {
        loginButton.classList.add('cursor-not-allowed')
                  return false // HER KAN OVERFØRES TIL REF INSTALLER SMARTMASK
              }

    loginButton.addEventListener('click', loginWithMetaMask)
          }

async function loginWithMetaMask() {
    {
        await window.web3.currentProvider.enable();
        web3 = new web3(window.web3.currentProvider);
    }
              const tokenAddress = '0x225FCa2A940cd5B18DFb168cD9B7f921C63d7B6E';
    const tokenSymbol = 'FIRE';
    const tokenDecimals = 18;
    const tokenImage = 'https://incinerate.cash/img/logo.png';

    try {
                  // wasAdded is a boolean. Like any RPC method, an error may be thrown.
                  const wasAdded = await ethereum.request({
        method: 'wallet_watchAsset',
    params: {
        type: 'ERC20', // Initially only supports ERC20, but eventually more!
    options: {
        address: tokenAddress, // The address that the token is at.
    symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
    decimals: tokenDecimals, // The number of decimals in the token
    image: tokenImage, // A string url of the token logo
                          },
                      },
                  });

    if (wasAdded) {
        console.log('Thanks for your interest!');
                  } else {
        console.log('Your loss!');
                  }
              } catch (error) {
        console.log(error);
              }
          }

          window.addEventListener('DOMContentLoaded', () => {
        toggleButton()
    });
