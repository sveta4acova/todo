import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import CollectionPage from './collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import './collection.styles.scss';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionPage);

export default CollectionPageContainer;