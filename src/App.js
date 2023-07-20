import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes';
import Chatting from './screens/Chatting';
import Home from './screens/Home';
import Login from './screens/Login';
import Profile from './screens/Profile';
import SignUp from './screens/SignUp';
import { GlobalStyle } from './styles';
import { ThemeProvider, withTheme } from 'styled-components';
import { whiteTheme } from './styles';
import { darkTheme } from './styles';
import { HelmetProvider } from 'react-helmet-async'; //타이틀을 빠르게 구현할 수 있게 하는 라이브러리
import Layout from './components/Layout';
function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const handleLogout = () => {
        setIsLogin(!isLogin);
    };
    return (
        <HelmetProvider>
            <ThemeProvider theme={darkMode ? darkTheme : whiteTheme}>
                <GlobalStyle theme={darkMode ? darkTheme : whiteTheme} />
                <Router>
                    <Routes>
                        <Route
                            path={routes.home}
                            element={
                                isLogin ? (
                                    <Layout handleLogout={handleLogout}>
                                        <Home />
                                    </Layout>
                                ) : (
                                    <Login />
                                )
                            }
                        />
                        <Route path={routes.signup} element={<SignUp />} />
                        <Route path={routes.profile} element={<Profile />} />
                        <Route path={routes.chatting} element={<Chatting />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </HelmetProvider>
    );
}

export default App;
