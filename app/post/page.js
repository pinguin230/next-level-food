import React from 'react';
import Link from "next/link";

const PostPage = () => {
  return (
    <div>
      <Link href="/post/post-1">Post 1</Link> <br/>
      <Link href="/post/post-2">Post 2</Link>
    </div>
  );
};

export default PostPage;