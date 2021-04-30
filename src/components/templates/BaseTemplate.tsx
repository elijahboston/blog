import React from "react"

export const BaseTemplate: React.FC<{
  StickyNav?: React.ReactNode
  Nav?: React.ReactNode
  Header?: React.ReactNode
  Content: React.ReactNode
  Footer: React.ReactNode
}> = ({ StickyNav, Nav, Header, Content, Footer }) => (
  <>
    {StickyNav}
    <div className="grid grid-cols-12">
      {Header && <div className="col-span-12">{Header}</div>}
      {Nav && <div className="col-span-12">{Nav}</div>}
      <div className="col-span-10 col-start-2">{Content}</div>
      <div className="col-span-12">{Footer}</div>
    </div>
  </>
)
