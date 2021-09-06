import React from 'react'

export const PostTemplate: React.FC<{
  Breadcrumbs?: React.ReactNode
  Title?: string
  SubTitle?: string
  DatePosted?: string
  Content: string
}> = ({ Title, SubTitle, DatePosted, Content }) => (
  <section className='my-5'>
    <h1 className='my-2'>{Title}</h1>
    <h2>{SubTitle}</h2>
    <h5>
      <time dateTime={DatePosted}>{DatePosted}</time>
    </h5>
    <article
      className='col-start-2 col-span-10 lg:col-span-6 lg:col-start-4'
      dangerouslySetInnerHTML={{ __html: Content }}
    />
  </section>
)
