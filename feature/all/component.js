import Link from 'next/link'
import { ListLi } from './style'

import fetch from 'isomorphic-unfetch'
import { addToMatches } from '../new/action'

const addMatch =async (location, date) => {

  const query = JSON.stringify({
    query: `mutation {
      addMatch(input: {
        location: "${location}"
        date: "${location}"
      }) {
        location
        
      }
    }`
  });

  const response = await fetch('http://localhost:3000/api/graphql', {
    headers: {'content-type': 'application/json'},
    method: 'POST',
    body: query,
  });
  
  const responseJson = await response.json();
  return responseJson.data;
}

const MatchListItem = ({ location, date, _id }) => (<ListLi>
  <Link href="/match/[id]" as={`/match/${_id}`}>
  <a>
    <span>{location}</span>
    <span>{date}</span>
  </a>
  </Link>
  </ListLi>)


const All = ({ matches }) => {
  const [locationData, updateLocationData] = React.useState('');
  const [dateData, updateDateData] = React.useState('');
  
  return <div>
    <ul className="list pl0 mt0 measure center">
      {matches.map(match => <MatchListItem {...match} />)}
    </ul>
    <div>
      <form onSubmit={(e) => {e.preventDefault(); addMatch(locationData, dateData)}}>
        <input value={dateData} onChange={(e) => updateDateData(e.target.value)} />
        <input value={locationData} onChange={(e) => updateLocationData(e.target.value)}/>
        <input type="submit" value="set" />
      </form>
    </div>
  </div>

}

export default All
