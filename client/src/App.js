import React from "react";
import Header from "./components/Header";
import Post from "./components/Post"
import NewPostForm from "./components/NewPost";

const App = () => {

    return (
        <>
            <Header />
            <NewPostForm />
            <Post />


        </>
    );


}

export default App;