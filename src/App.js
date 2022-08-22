import { React, useState, useEffect } from "react";
import Header from "./components/Header";
import PostItem from "./components/PostItem";
import Modal from "./components/Modal";
import styled from "styled-components";
import "./App.css";
import Footer from "./components/Footer";
import { db, auth, storage } from './firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import { updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const AppDiv = styled.div`
`;

function App() {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [posts, setPosts] = useState([]);
  const [signupFlag, setSignupFlag] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   const unSubcribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       setUser(authUser);
  //       setUsername(authUser.displayName);
  //       if (authUser.displayName) {
  //       } else {
  //         return updateProfile(authUser, {
  //           displayName: username,
  //         });
  //       }
  //     } else {
  //       setUser(null);
  //     }
  //   });
  //   return () => {
  //     unSubcribe();
  //   }
  // }, [user, username]);

  const getData = async () => {
    const postsCol = collection(db, 'posts');
    const snapshot = await getDocs(postsCol);
    setPosts(
      snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      }))
    );
  }

  console.log(posts);
  function handleShowModalLogin(e) {
    setShowModalLogin(true);
  };

  function handleCloseModal(e) {
    setShowModalLogin(false);
  };

  function handleSubmitSignup(e) {
    e.preventDefault();
    if (signupFlag) {
      console.log("Dang ky user moi", username, email, password);
    } else {
      console.log("Dang nhap");
      loginEmailPassword();
    }
    // auth.createUserWithEmailandPassword(email, password).then((authUser) => {
    //   return authUser.user.updateProfile({
    //     displayName: username
    //   });
    // }).catch((error) => alert(error.message)); 
    // setShowModalLogin(false);
  };

  const loginEmailPassword = async () => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user);
  }

  function handleUserChange(value) {
    setUsername(value);
  }

  function handlePasswordChange(value) {
    setPassword(value);
  }

  function handleEmailChange(value) {
    setEmail(value);
  }

  function handleSwitchSignup(e) {
    e.preventDefault();
    setSignupFlag(true);
  }
  function handleSwitchLogin(e) {
    e.preventDefault();
    setSignupFlag(false);
  }

  console.log(username, password, email);



  return (
    <div className="App">
      <Header onClick={handleShowModalLogin} />
      {showModalLogin &&
        <Modal
          onClickClose={handleCloseModal}
          onSubmit={handleSubmitSignup}
          onUserChange={handleUserChange}
          onPasswordChange={handlePasswordChange}
          onEmailChange={handleEmailChange}
          onClickSignup={handleSwitchSignup}
          signupFlag={signupFlag}
          onClickLogin={handleSwitchLogin}
        />
      }
      {/* {posts.map(post => <PostItem key={post.id} avatarUrl={post.post.avatarUrl} />)} */}
      {posts.map(post => <PostItem key={post.id} post={post.post} />)}
      <Footer />
    </div>
  );
}

export default App;
