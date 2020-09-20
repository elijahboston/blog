export interface SectionProps {
  title: string
  backgroundColor: string
}

export const Section: React.FC<SectionProps> = (props) => (
  <section className={`grid grid-cols-6 p-6`}>
    <div className="col-span-6 md:col-span-2">
      <h2 className="md:text-right md:pr-8 text-gray-600">{props.title}</h2>
    </div>
    <div className="col-span-6 md:col-span-4">
      <div className="mh-full md:pl-8 md:border-l md:border-gray-600">
        {props.children}
      </div>
    </div>
  </section>
)
