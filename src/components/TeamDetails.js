import _ from 'lodash';
import React from 'react';
import Layout from './Layout';
import { Link } from 'react-router';

const styles = require('../styles/TeamDetails.scss');

let team = [{
  name: 'James Wo',
  identity: 'James_Wo',
  title: 'President, Huiyin Blockchain Venture',
  thumb: '/images/thumbs/James_Wo.jpg'
}, {
  name: 'William Hou',
  identity: 'William_Hou',
  title: 'CEO, Huiyin Blockchain Venture',
  thumb: '/images/thumbs/William_Hou.jpg'
}, {
  name: 'Freddy Zheng',
  identity: 'Freddy_Zheng',
  title: 'VP, Management Huiyin Blockchain Venture',
  thumb: '/images/thumbs/Freddy_Zhang.jpg'
}, {
  name: 'Shang Zhang',
  identity: 'Shang_Zhang',
  title: 'Senior Associate, Huiyin Blockchain Venture',
  thumb: '/images/thumbs/Shang_Zhang.jpg'
}, {
  name: 'Daphne Zhang',
  identity: 'Daphne_Zhang',
  title: 'Senior Associate, Huiyin Blockchain Venture',
  thumb: '/images/thumbs/Daphne_Zhang.jpg'
}, {
  name: 'Rose Gao',
  identity: 'Rose_Gao',
  title: 'Associate, Huiyin Blockchain Venture',
  thumb: '/images/thumbs/Rose_Gao.jpg'
}, {
  name: 'Amy Zhu',
  identity: 'Amy_Zhu',
  title: 'HR, Huiyin Blockchain Venture',
  thumb: '/images/thumbs/Amy_Zhu.jpg'
}, {
  name: 'Andrew Lee',
  identity: 'Andrew_Lee',
  title: 'CEO at Purse, Advisor at Huiyin Blockchain Venture',
  thumb: '/images/thumbs/Andrew_Lee.jpg'
}];

class TeamDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { team };
  }
  render() {
    let { name } = this.props.params || {};
    var index = _.findIndex(team, d => d.identity === name);
    if (index === -1) {
      index = 0; // TODO: redirect to 404
    }
    let current = this.state.team[index];
    return (
      <Layout detail={true}>
        <div className="container">
          <main className={styles.details}>
            <aside>
              <ul>{
                this.state.team.map((person, i) => {
                  return (
                    <li key={i} className={index === i ? 'active' : ''}>
                      <Link to={ '/team/' + person.identity }>{person.name}</Link>
                    </li>
                  )
                })
              }</ul>
            </aside>
            <section>
              <h4>{current.name}</h4>
              <h5>{current.title}</h5>
              <img src={current.thumb} />
            </section>
          </main>
        </div>
      </Layout>
    )
  }
}

export default TeamDetails
