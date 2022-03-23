import { connect } from "react-redux";
import { fetchProducts } from "../../actions/product_actions";
import { updateFilter } from "../../actions/filter_actions";
import ProductIndex from "./product_index";

const mSTP = ({entities}) => {
  return {
    products: Object.values(entities.products),
  }
};

const mDTP = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(mSTP, mDTP)(ProductIndex);