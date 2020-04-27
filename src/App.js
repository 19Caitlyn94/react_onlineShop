import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import { HomePage } from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import SigninAndSignupPage from "./pages/signin-and-signup/signin-and-signup.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      createUserProfileDocument(user);
    });
    return () => {
      unsubscribeFromAuth();
    };
  });

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SigninAndSignupPage} />
      </Switch>
    </div>
  );
}

export default App;
