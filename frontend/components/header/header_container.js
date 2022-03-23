import { updateFilter } from "../../actions/filter_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "./header";

const mDTP = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
})

export default connect(null, mDTP)(Header);