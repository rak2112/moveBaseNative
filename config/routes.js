import Movies from './../containers/Movies';
import ExploreMovies from './../containers/ExploreMovies';
import Discover from './../containers/Discover';
import Details from './../containers/Details';
import SearchComp from './../containers/SearchComp';

const Routes = {
    Movies: { screen: Movies },
    ExploreMovies: { screen: ExploreMovies },
    Discover: { screen: Discover },
    Details: { screen: Details },
    SearchComp: { screen: SearchComp }
};

export default Routes;
