import React from 'react';
import { Link } from 'react-router';
import Layout from './Layout';
import _ from 'lodash';

require('./Press.scss');

const PRESSES = [{
  title: 'BitPagos, now Ripio, lands $1.9M to promote financial inclusion in South America using bitcoin',
  logo: '/images/logos/techcrunch.svg',
  date: 'JAN 3, 2017',
  href: 'https://techcrunch.com/2017/01/03/bitpagos-ripio-series-a/',
  lang: 'en'
}, {
  title: '$20 Million Bitcoin Fund Launched by Chinese Investor Huiyin Group',
  logo: '/images/logos/fintechranking.png',
  date: 'DEC 13, 2016',
  href: 'http://fintechranking.com/2016/12/13/20-million-bitcoin-fund-launched-by-chinese-investor-huiyin-group/',
  lang: 'en'
}, {
  title: 'China\'s Huiyin Group Launches $20 Million Bitcoin Fund',
  logo: '/images/logos/coindesk.png',
  date: 'DEC 1, 2016 ',
  href: 'http://www.coindesk.com/chinas-huiyin-group-bitcoin-blockchain-venture-fund-20-million/',
  lang: 'en'
}, {
  title: 'Yours Raises Angel Round to Fix Reddit with Bitcoin',
  logo: '/images/logos/yours.png',
  date: 'NOV 15, 2016',
  href: 'https://stories.yours.network/yours-raises-angel-round-to-fix-reddit-with-bitcoin-ffdd8b90f192#.jf55mhuzp',
  lang: 'en'
}, {
  title: '比特币公司RIPIO获190万美元融资，汇银集团领投',
  logo: '/images/logos/bitkan.png',
  date: '2017-01-04',
  href: 'http://bitkan.com/news/topic/27501',
  lang: 'zh'
}, {
  title: '汇银集团推出2000万美元比特币基金，专注投资比特币区块链',
  logo: '/images/logos/8btc.svg',
  date: '2016-12-02',
  href: 'http://www.8btc.com/huiyin-group-bitcoin-blockchain-venture',
  lang: 'zh'
}, {
  title: 'Yours网络获天使轮融资，有望明年初面世',
  logo: '/images/logos/8btc.svg',
  date: '2016-11-17',
  href: 'http://www.8btc.com/yours-raises-angel-round',
  lang: 'zh'
}];

let FILTERS = {
  global : d => d.lang === 'en',
  state : d => d.lang === 'zh'
};

export default class Press extends React.Component {
  render() {
    let { type } = this.props.params;
    let filter = FILTERS[type] || (() => true);
    let presses = PRESSES.filter(filter);
    return (
      <Layout>
        <section className="content">
          <h3>Press List</h3>
          <div className="tabs">
            <Link to={'/presses/global'}>Global</Link>
            <Link to={'/presses/state'}>State</Link>
          </div>
          <main>
          <ul>
          { presses.map((press, i) => {
            return (
              <li key={i}>
                <a href={press.href} target="_blank">{press.title}</a>
              </li>
            )
          })}
          </ul>
          </main>
        </section>
      </Layout>
    )
  }
}
