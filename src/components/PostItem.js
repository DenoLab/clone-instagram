import React from 'react';
import styled from 'styled-components';

const PostContainerDiv = styled.div`
align-items: center;
width: 600px;
margin: 5px auto;
padding: 10px;
border 1px solid #ccc;
border-radius: 5px;
background: white;
`;
const PostHeaderDiv = styled.div`
display: flex;
justify-content: space-between;
padding: 5px;
`;
const PostHeaderLeftDiv = styled.div`
display: flex;
`;
const PostHeaderRightDiv = styled.div``;
const AvatarPostDiv = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
`;

const UserIdDiv = styled.div`
display: flex;
flex-direction: column;
padding-left: 10px;
align-items: baseline;
a{
  margin: 0;
  text-decoration:none;
}
`;
const StatusDiv = styled.div`
text-align: left;
`;

const ImagePostDiv = styled.div`
width: 600px;
`;

const InteractiveDiv = styled.div`
display: flex;
justify-content: space-between;
`;
const LeftInteractiveDiv = styled.div`
span {
  border: 1px solid black;
  margin-right: 5px;
  padding: 0 3px;
}
`;
const MidInteractiveDiv = styled.div``;
const RightInteractiveDiv = styled.div`
span {
  border: 1px solid black;
  padding: 0 3px;
}`;

const CommentDiv = styled.div`
padding: 10px;
span{
}
input{
  width: 85%;
  outline: none;
  border: none;
}
button{
}
`;

function PostItem(props) {
  const { post } = props;
  return (
    <PostContainerDiv>
      <PostHeaderDiv>
        <PostHeaderLeftDiv>
          <AvatarPostDiv src={post.avatarUrl} alt="" height="40px" width="40px" />
          {/* <div> */}
          <UserIdDiv>
            <a href="/#" alt=""><strong>{post.userName}</strong></a>
            <a href="/#" alt="">1 ngày trước</a>
          </UserIdDiv>
          {/* </div> */}
        </PostHeaderLeftDiv>

        <PostHeaderRightDiv>
          <button>optionBtn</button>
        </PostHeaderRightDiv>
      </PostHeaderDiv>
      <StatusDiv>
        <p>{post.captions}</p>
      </StatusDiv>
      <ImagePostDiv>
        <img src={post.imageUrl} alt="" width="100%"></img>
      </ImagePostDiv>
      <InteractiveDiv>
        <LeftInteractiveDiv>
          <span>
            <i>heart</i>
          </span>
          <span>
            <i>mess</i>
          </span>
          <span>
            <i>share</i>
          </span>
        </LeftInteractiveDiv>
        <MidInteractiveDiv>
          <a href="/#">
            <span>234</span> lượt thích
          </a>
        </MidInteractiveDiv>
        <RightInteractiveDiv>
          <span>
            <i>bookmark</i>
          </span>
        </RightInteractiveDiv>
      </InteractiveDiv>
      <CommentDiv>
        <form>
          <span>
            <i>Icon</i>
          </span>
          <input type="text" placeholder="Thêm bình luận"></input>
          <button>Đăng</button>
        </form>
      </CommentDiv>
    </PostContainerDiv>
  );
}

export default PostItem;