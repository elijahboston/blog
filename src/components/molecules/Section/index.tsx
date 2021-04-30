import React from "react"

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
}

export const Section: React.FC<SectionProps> = (props) => (
  <section className={clsx(`grid grid-cols-6 py-6`, props.className)}>
    <div className="col-span-6 lg:col-span-2">
      <h3 className="text-xl text-center lg:text-right lg:pr-8 text-gray-600">
        {props.title}
      </h3>
    </div>
    <div className="col-span-6 lg:col-span-4">
      <div className="mh-full lg:pl-8 lg:border-l lg:border-gray-600">
        {props.children}
      </div>
    </div>
  </section>
)
