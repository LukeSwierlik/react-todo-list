import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './+state/store';
import { Header } from './components/Header/header.component';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
