import { connect } from 'react-redux'
import ProductShow from './product_show';
import { fetchProduct } from '../../actions/product_actions';
import { updateFilter } from '../../actions/filter_actions';
import { averageRating } from '../../util/string_util';

const mSTP = (state, ownProps) => ({
  product: state.entities.products[ownProps.match.params.productId],
  category: state.ui.filters.category,
  rating: averageRating(Object.values(state.entities.reviews)),
});

const mDTP = (dispatch) => ({
  fetchProduct: productId => dispatch(fetchProduct(productId)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(mSTP,mDTP)(ProductShow);