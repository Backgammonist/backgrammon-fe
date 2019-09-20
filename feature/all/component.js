import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Link from 'next/link'

const MatchListItem = ({
    id = '123',
    userAvatar = 'https://placehold.it/30x30',
    locationName = 'The Hand and Flower Pub',
    timedate = '4:30 pm today',
    poterntialOppCount = 3
}) => <li><Link href="/match/[id]" as={`/match/${id}`}>
    <a>
    <img src={userAvatar}/>
    <span>{locationName}</span>
    <span>{timedate}</span>
    <span>{poterntialOppCount}</span>
    </a></Link>
    
</li>

const All = ({ matches }) => {
    console.log(matches);
    
    return <div>
        <ul>
            {matches.map(match=> <MatchListItem locationName={match.where} timedate={match.when}/>)}
           
        </ul>
    </div>

}

const mapStateToProps = (state) => ({
    matches: state.matches
})

export default connect(mapStateToProps)(All)