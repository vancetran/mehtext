import React from 'react'

type Props = { children: React.ReactNode }

const Page = (props: Props) => (
  <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl">
    {props.children}
  </div>
)

export default Page
