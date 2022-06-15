const chains = {
    56: 'BNB'
}
function isExitNetWork() {
    isE = false
    for (const key in chains) {
        if (key == parseInt(chain)) {
            isE = true
        }
    }
    console.log(isE);
    if (!isE) {
        return
    }


}

function isExitToken(token) {
    let tokenListAll = []
    tokenListAll.push(...tokenList)
    let t01 = localStorage.getItem('localTokenList')

    if (t01 != null) {
        tokenListAll.push(...JSON.parse(t01))
    }
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
    let tokenListAll = []
    tokenListAll.push(...tokenList)
    let t01 = localStorage.getItem('localTokenList')

    if (t01 != null) {
        tokenListAll.push(...JSON.parse(t01))
    }
    let t = []
    for (const key in tokenListAll) {
        if (tokenListAll[key].name.toLocaleLowerCase().indexOf(token.toLocaleLowerCase()) != -1) {
            t.push(tokenListAll[key])
        }
    }



    return t
}



const tokenList = [
    {
        token: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        name: 'BNB',
        decimals: '18',
        url: 'https://pancakeswap.finance/images/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.png'
    },
    {
        token: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
        name: 'WBNB',
        decimals: '18',
        url: 'https://pancakeswap.finance/images/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.png'
    },
    {
        token: '0x55d398326f99059fF775485246999027B3197955',
        name: 'USDT',
        decimals: '18',
        url: 'https://pancakeswap.finance/images/tokens/0x55d398326f99059fF775485246999027B3197955.png'
    },
    {
        token: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        name: 'BUSDT',
        decimals: '18',
        url: 'https://pancakeswap.finance/images/tokens/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56.png'
    },
    {
        token: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
        name: 'USDC',
        decimals: '18',
        url: 'https://tokens.pancakeswap.finance/images/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d.png'
    }
]

let tempTokenLists = []