import { connect } from 'react-redux';
import AssetList from '../components/AssetList';

const getAssets = (assets) => {
    return assets
}

const mapStateToProps = state => ({
    assets: state.assets
})
export default connect(mapStateToProps)(AssetList);