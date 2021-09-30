import { useEffect } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import TodoList from './features/Todo/pages/ListPage';

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
                <Route path="/" component={TodoList} />
                <Route component={NotFound} />
            </Switch>
            Footer
        </div>
    );
}

export default App;
