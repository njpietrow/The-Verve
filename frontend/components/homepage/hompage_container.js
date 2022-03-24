import { connect } from "react-redux";
import Homepage from "./homepage";
import { updateFilter } from "../../actions/filter_actions";

const mDTP = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
})

export default connect(null, mDTP)(Homepage);