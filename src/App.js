import Layout from './components/layout/Layout';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import OverviewPage from './components/pages/Overview';
import SearchPage from './components/pages/SearchPage';
import AccountSettingsPage from './components/pages/AccountSettings';


function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path='/'
                        element={<OverviewPage/>}></Route>
                    <Route exact path='/searchpage'
                        element={<SearchPage/>}></Route>
                    <Route exact path='/account'
                        element={<AccountSettingsPage/>}></Route>
                        <div>test</div>
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
