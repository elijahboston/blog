import React from "react"

export interface HomepageTemplateProps {}

export const HomepageTemplate: React.FC<{
  Content: React.ReactNode
}> = ({ Content }) => (
  <div className="grid grid-cols-12">
    <div className="col-start-2 col-span-10 lg:col-span-6 lg:col-start-4">
      {Content}
    </div>
  </div>
)
