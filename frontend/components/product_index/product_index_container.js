import { connect } from "react-redux";
import { fetchProducts } from "../../actions/product_actions";
import { updateFilter } from "../../actions/filter_actions";
import { addCartItem } from "../../actions/cart_item_actions";
import { toggleCartModal } from "../../actions/cart_modal_actions";
import ProductIndex from "./product_index";


const mSTP = ({entities,ui}) => {
  return {
    products: Object.values(entities.products),
    category: ui.filters.category
  }
};

const mDTP = (dispatch) => ({
  fetchProducts: (filter) => dispatch(fetchProducts(filter)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  addCartItem: (item, quantity) => dispatch(addCartItem(item, quantity)),
  toggleCartModal: () => dispatch(toggleCartModal()),
});

export default connect(mSTP, mDTP)(ProductIndex);