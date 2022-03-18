import { connect } from "react-redux";
import Greeting from "./greeting"

const mSTP = ({entities, session}) => ({
  currentUser: entities.users[session.id],
});

export default connect(mSTP, null)(Greeting);