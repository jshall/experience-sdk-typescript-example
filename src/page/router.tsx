import { ExperiencePage } from '@ellucian/experience-extension-utils';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Home';

// for more information on react router: https://v5.reactrouter.com/web/guides/quick-start

const RouterPage: ExperiencePage = (props) => {
    return (
        <Router basename={props.pageInfo.basePath}>
            <Switch>
                <Route path="/">
                    <Home {...props} />
                </Route>
            </Switch>
        </Router>
    );
};

export default RouterPage;
