import {Provider} from 'react-redux';
import Router from './routes/index';
import {setupStore} from './store/store';

import './style/index.scss';

const store = setupStore();

function App() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}

export default App;
