const chains = {
    56: 'BNB',
    1818:'CUBE',
    3:'Ropsten'
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
                token: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1',
                name: 'WCUBE',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/CUBE.png'
            },
            {
                token: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2',
                name: 'WTEST',
                decimals: '18',
                url: 'https://mis320.github.io/swap/img/TGB.jpg'
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