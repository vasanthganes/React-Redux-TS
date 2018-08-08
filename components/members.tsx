import * as React from 'react';
import { connect } from 'react-redux';
import { Member } from '../redux-store/models';
import { fetchMembersAction } from '../redux-store/actions';
import { State } from '../redux-store/reducer';

interface MembersPropTypes {
  members: Member[];
  fetchMembers(): void;
 }
interface MembersState { }

class PersonList extends React.Component<MembersPropTypes, MembersState> {
  constructor(props) {
    super(props);
    this.state = { members: [] };
  }
  componentDidMount() {
    
    this.props.fetchMembers();

    console.log(this.props);
  }
  render() {
    return (
    <div>
    <ul>
      {
        this.props.members.map((member) =>
          <li key={member.id}>{member.name}</li>
        )
      }
    </ul>
    </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  members: state.members,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMembers: () => dispatch(fetchMembersAction()),
});

export const Persons = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PersonList);
