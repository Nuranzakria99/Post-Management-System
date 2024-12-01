import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

function Addpost() {
  return (
    <div>
      <div className='flex justify-end p-5  '>

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
