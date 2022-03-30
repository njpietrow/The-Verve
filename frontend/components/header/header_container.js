import { updateFilter } from "../../actions/filter_actions";
import { removeFilter } from "../../actions/filter_actions";
import { connect } from "react-redux";
import Header from "./header";

const mDTP = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  removeFilter: (filter) => dispatch(removeFilter(filter))
})

export default connect(null, mDTP)(Header);