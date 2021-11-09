 import React from 'react'
 import "./style.css";

  
class Comments extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showComments: false,
        comments: []
        
      };
      this.removeComment = this.removeComment.bind(this);
      this._addComment = this._addComment.bind(this);
      
    }
    
    render () {
      const comments = this._getComments();
      let commentNodes;
      let buttonText = 'Yorumları Göster';
      
      if (this.state.showComments) {
        buttonText = 'Yorumları Gizle';
        commentNodes = <div className="comment-list">{comments}</div>;
      }
      
      return(
        <div className="comment-box">
          <h2>Yorumunuzu Paylaşın!</h2>
          <CommentForm addComment={this._addComment.bind(this)}/>
          <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
            {buttonText}
          </button>
          <h3>Yorumlar</h3>
          <h4 className="comment-count">
            {this._getCommentsTitle(comments.length)}
          </h4>
          {commentNodes}
        </div>  
      );
    } 
    
       
    _addComment(author, body) {
      const comment = {
        id: this.state.comments.length ,
        author,
        body
      };
      this.setState({ comments: this.state.comments.concat([comment]) }); 
    

    }
    removeComment(idx){
        var arr = this.state.comments;
        let new_arr = [];
        var count = 0;
        for (var i = 0; i < arr.length; ++i) {
          if (arr[i]["id"] != idx) { 
            new_arr[count] = arr[i];
            ++count;
          }
        }
        this.setState({comments: new_arr});
      }
    
    _handleClick() {
      this.setState({
        showComments: !this.state.showComments
      });
    }
    
    _getComments(text) {    
      return this.state.comments.map((comment) => { 
        return (
          <Comment
            author={comment.author} 
            body={comment.body}  
            key={comment.id}
            index={comment.id}            
            removeCommentFromBoard ={this.removeComment} 
            
            >{text}</Comment>
        ); 
      });
    }
    
    _getCommentsTitle(commentCount) {
      if (commentCount === 0) {
        return 'Henüz Yorum Yok...';
      } else if (commentCount === 1) {
        return "1 Yorum";
      } else {
        return `${commentCount} Yorum`;
      }
    }
  } 
  
  class CommentForm extends React.Component {
  
    render() { 
      return (
        <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
          <div className="comment-form-fields">
            <input placeholder="Adınızı Giriniz..." required ref={(input) => this._author = input}></input><br />
            <textarea placeholder="Yorumunuzu Yazınız..." rows="4" required ref={(textarea) => this._body = textarea}></textarea>
          </div>
          <div className="comment-form-actions">
            <button type="submit">Yorum Gönder</button>
          </div>
        </form>
      );
    } 
    
    _handleSubmit(event) { 
      event.preventDefault();   // prevents page from reloading on submit
      let author = this._author;
      let body = this._body;
      this.props.addComment(author.value, body.value);
    }
  } 
 
  class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
      }
      remove(){
        this.props.removeCommentFromBoard(this.props.index);  
       }
    render () {
      return(
        <div className="comment">
          <p className="comment-header">{this.props.author}</p>
          <p className="comment-body">- {this.props.body}</p>
          <div className="comment-footer">
            <a href="#" className="comment-footer-delete" onClick={this.remove}>Yorumu Sil</a>
          </div>
        </div>
      );

    }
    

  }

export default Comments;