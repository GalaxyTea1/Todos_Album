import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import NotFound from './components/NotFound';
import { Switch, NavLink, Route } from 'react-router-dom';
import { useEffect } from 'react';
import productApi from './api/productApi';

function App() {
    useEffect(() => {
        const fetchProducts = async () => {
            const params = {
                _limit: 10,
            };
            const productList = await productApi.getAll(params);
            console.log(productList);
        };
        fetchProducts();
    }, []);
    return (
        <div className="App">
            Header
            <p>
                <NavLink to="todos" activeClassName="active-menu">
                    Todos
                </NavLink>
            </p>
            <p>
                <NavLink to="albums" activeClassName="active-menu">
                    Albums
                </NavLink>
            </p>
            <Switch>
                <Route path="/todos" component={TodoFeature} />
                <Route path="/albums" component={AlbumFeature} />
                <Route component={NotFound} />
            </Switch>
            Footer
        </div>
    );
}

export default App;
