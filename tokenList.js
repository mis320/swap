const chains = {
    1:'ETH',
    56: 'BNB',
    1818:'CUBE',
    3:'Ropsten',
    513100:'ETHWf',
    10001:'ETHW'
}
function isExitNetWork() {
    isE = false
    for (const key in chains) {
        if (key == parseInt(chain)) {
            isE = true
        }
    }
    
    if (!isE) {
        return
    }


}

function isExitToken(token) {
    let tokenListAll =  getCurrentTokenList()
    let t = []
    for (const key in tokenListAll) {
        if (tokenListAll[key].token.toLocaleLowerCase().indexOf(token.toLocaleLowerCase()) != -1) {
            t.push(tokenListAll[key])
            return t
        }
    }
    return t
}

function isExitTokenName(token) {
    let tokenListAll =  getCurrentTokenList()
    let t = []
    for (const key in tokenListAll) {
        if (tokenListAll[key].name.toLocaleLowerCase().indexOf(token.toLocaleLowerCase()) != -1) {
            t.push(tokenListAll[key])
        }
    }
    return t
}
const tokenList = 
    {
        1:[
            {
                token: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
                name: 'ETH',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/ETH.png'
            },
            {
                token: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
                name: 'WETH',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/ETH.png'
            },{
                token: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
                name: 'USDT',
                decimals: '6',
                url: 'https://mis320.github.io/swap/img/USDT.png'
            },
            {
                token: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
                name: 'DAI',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/USDT.png'
            },
            {
                token: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
                name: 'USDC',
                decimals: '6',
                url: 'https://mis320.github.io/swap/img/USDC.png'
            }
        ],

        3:[
            {
                token: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
                name: 'ETH',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/ETH.png'
            },
            {
                token: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
                name: 'WETH',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/ETH.png'
            },
            {
                token: '0xaD6D458402F60fD3Bd25163575031ACDce07538D',
                name: 'DAI',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/USDT.png'
            },
        ],
        56:[
            {
                token: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
                name: 'BNB',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/BNB.png'
            },
            {
                token: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
                name: 'WBNB',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/BNB.png'
            },
            {
                token: '0x55d398326f99059fF775485246999027B3197955',
                name: 'USDT',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/USDT.png'
            },
            {
                token: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
                name: 'BUSDT',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/BUSDT.png'
            },
            {
                token: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
                name: 'USDC',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/USDC.png'
            }
        ],
        1818:[
            {
                token: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
                name: 'CUBE',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/CUBE.png'
            },
            {
                token: '0x9d3f61338d6eb394e378d28c1fd17d5909ac6591',
                name: 'WCUBE',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/CUBE.png'
            },
            {
                token: '0x79F1520268A20c879EF44d169A4E3812D223C6de',
                name: 'USDT',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/USDT.png'
            },
            {
                token: '0x57EeA49Ec1087695274A9c4f341e414eb64328c2',
                name: 'ETH',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/ETH.png'
            },
            {
                token: '0x00f0D8595797943c12605cD59bc0D9f63D750cCf',
                name: 'USDC',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/USDC.png'
            }
        ],
        513100:[
            {
                token: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
                name: 'ETH',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/ETH.png'
            },
            {
                token: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
                name: 'WETH',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/ETH.png'
            },{
                token: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
                name: 'USDT',
                decimals: '6',
                url: 'https://mis320.github.io/swap/img/USDT.png'
            },
            {
                token: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
                name: 'DAI',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/USDT.png'
            },
            {
                token: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
                name: 'USDC',
                decimals: '6',
                url: 'https://mis320.github.io/swap/img/USDC.png'
            }
        ],
        10001:[
            {
                token: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
                name: 'ETH',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/ETH.png'
            },
            {
                token: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
                name: 'WETH',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/ETH.png'
            },{
                token: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
                name: 'USDT',
                decimals: '6',
                url: 'https://mis320.github.io/swap/img/USDT.png'
            },
            {
                token: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
                name: 'DAI',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/USDT.png'
            },
            {
                token: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
                name: 'USDC',
                decimals: '6',
                url: 'https://mis320.github.io/swap/img/USDC.png'
            }
        ]

    }


function getCurrentTokenList() {
    let tokenListAll = []
    tokenListAll.push(...tokenList[parseInt(chain)])
    let t01 = localStorage.getItem('localTokenList')
    if (t01 != null) {
        try {
            tokenListAll.push(...JSON.parse(t01)[parseInt(chain)])
        } catch (error) {
            
        }
    }
   return tokenListAll
}



let tempTokenLists = []