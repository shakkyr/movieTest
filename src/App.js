import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
import { signout } from "./actions/userActions";
import HomeScreen from './screens/HomeScreen'
import SigninScreen from './screens/SigninScreen'
import RegisterScreen from './screens/RegisterScreen'
import AllUsersScreen from './screens/AllUsersScreen';
import MoviesPage from './components/MoviesPage';
import ProfileScreen from './screens/ProfileScreen';
import SpecificMovie from './screens/SpecificMovie';

function App() {
 
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch()

  const signoutHandler = () => {
    dispatch(signout())
 
  }

  console.log('userInfo', userInfo);

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              <span>Movie Land</span>
            </Link>
            <Link to="/movies">
              <span>Movies</span>
            </Link>
         
          </div>
          <div className='allNav'>
            {userInfo ? (
              <>
                <div className='picAndName'>
                  <img className='profilePicInNav' src={userInfo.pic} alt='user avater'></img>
                  <div className="dropdown">
                    <Link to="#">
                      {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                    </Link>
                    <ul className="dropdown-content">
                      {userInfo && userInfo.isAdmin && (
                        <>
                          <li>
                            <Link to="/profile">Profile</Link>
                          </li>
                          <li>
                            <Link to="/allusers">All Users</Link>
                          </li>
                        </>
                      )}
                      <li>
                        <Link to="/" onClick={signoutHandler}>
                          Sign Out
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div></>
            ) : (
              <Link to="/signin">Sign In <i className="fa-solid fa-right-to-bracket"></i></Link>
            )}

          </div>
        </header>
        <main className='main'>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movie/:id" element={<SpecificMovie />} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/allusers" element={<AllUsersScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </main>
        {/* <footer>
          <div className='footer'>
            <div className='footer-content'>
              <span>Movies Trailers </span>
              <span>©2021 Israel, Inc. All rights reserved</span>
            </div>
          </div>
        </footer> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
