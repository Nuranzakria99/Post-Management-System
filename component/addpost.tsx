import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

function Addpost() {
  return (
    <div>
      <div className='flex flex-row mx-5 justify-center items-center'>
        Add Post
        <Link href="/posts/addform">
        <Button type="primary" htmlType="submit" block>
            Add Post
          </Button>
        </Link>
        
        </div>
    </div>
  )
}

export default Addpost
