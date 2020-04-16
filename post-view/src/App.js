import React, {Component}from 'react';
import Post from './Post/Post';


const posts = [
  {
    id:1,
    title:"the best part of nature",
    author: "Jane wong",
    desc:"Finding my roots",
    img:"https://source.unsplash.com/EwKXn5CapA4/400x400",

  },

  { 
    id:2,
    title:"codding and more codding",
    author: "jamey smith",
    desc:"Nothing is really work unless you would rather be doing something else ",
    img:"https://source.unsplash.com/QLqNalPe0RA/400x400"

  },
  {
    id:3,
    title:"Ligthen up ur day",
    author: "Alice Rouse",
    desc:"I stumbled across this mural on our last day in Amsterdam",
    img:"https://source.unsplash.com/M7mu6jXlcns/400x400"

  },
  


];


class App extends Component{
  state ={
    posts: posts,
  };
 removeHandler = removeId =>{
   const oldArray = [...this.state.posts];
   oldArray.splice(removeId, 1);
   this.setState({posts:oldArray});
 };


  render(){

    const postsList = this.state.posts.map((post,index) =>{
      return(
        <Post
              key = {post.id} 
              title= {post.title}
              author= {post.author}
              desc = {post.desc}
              img = {post.img}
              click = {this.removeHandler.bind(this,index)}
        />

      );
    });
    return(
    <div className='postItems'>
      <Post
      title ={this.state.posts[0].title}
      author = {this.state.posts[0].author}
      desc = {this.state.posts[0].desc}
      img = {this.state.posts[0].img}
      />
      <Post
      title ={this.state.posts[1].title}
      author = {this.state.posts[1].author}
      desc = {this.state.posts[1].desc}
      img = {this.state.posts[1].img}
      />
      <Post
      title ={this.state.posts[2].title}
      author = {this.state.posts[2].author}
      desc = {this.state.posts[2].desc}
      img = {this.state.posts[2].img}
      />
    </div>
     
    );
}
}

export default App;


