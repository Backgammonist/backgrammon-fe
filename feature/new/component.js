import { bindActionCreators } from 'redux';
import { useState } from 'react'
import { connect } from 'react-redux';
import { addToMatches, resetMatch } from './action';
import Router from 'next/router';

const Match = ({ addToMatches, resetMatch }) => {
    const [currentMatch, setCurrentMatch] = useState({
        where: '',
        points: '',
        when: '',
    });
    function onKeyUp(e) {
        const { name, value } = e.target;
        setCurrentMatch({ ...currentMatch, ...{ [name]: value } });
    }

    function onSubmit(e) {
        e.preventDefault();
        addToMatches(currentMatch);
        setCurrentMatch({
            where: '',
            points: '',
            when: '',
        });
        Router.push('/match/all')
    }
    return <div>
        <form>
            <input onChange={onKeyUp} name="where" type="text" placeholder="where?" value={currentMatch.where} />
            <input onChange={onKeyUp} type="number" name="points" min="1" placeholder="how many points?" value={currentMatch.points} />
            <input onChange={onKeyUp} type="text" name="when" placeholder="when?" value={currentMatch.when} />
            <button onClick={onSubmit}>Find opponent</button>
        </form>
    </div>

}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addToMatches,
        resetMatch
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Match)