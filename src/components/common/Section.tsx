import { ClassName } from "@types/shared"

export interface SectionProps extends ClassName {
  title: string
  backgroundColor: string
}

export const Section: React.FC<SectionProps> = (props) => (
  <section className={clsx(`grid grid-cols-6 py-6 md:p-6`, props.className)}>
    <div className="col-span-6 lg:col-span-2">
      <h2 className="lg:text-right md:pr-8 text-gray-600">{props.title}</h2>
    </div>
    <div className="col-span-6 lg:col-span-4">
      <div className="mh-full lg:pl-8 lg:border-l lg:border-gray-600">
        {props.children}
      </div>
    </div>
  </section>
)
