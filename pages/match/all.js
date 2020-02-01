import fetch from 'isomorphic-unfetch'
import All from '../../feature/all/component'


function AllPage({ matches }) {
  return (<ul>
    <All matches={matches} />
  </ul>)
}

AllPage.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/graphql?query={matches{location,date,_id}}')
  const json = await res.json()
  return { matches: json.data.matches }
}

export default AllPage