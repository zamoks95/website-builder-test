import { Component, ComponentField } from '../../../../domain/builder'

const Text2Fields: ComponentField[] = [
  {
    id: '__highlight__',
    name: 'Highlight',
    type: 'string',
    value: 'Default Highlight'
  },
  {
    id: '__title__',
    name: 'Title',
    type: 'string',
    value: 'Default Title'
  },
  {
    id: '__subtitle__',
    name: 'Subtitle',
    type: 'string',
    value: 'Default subtitle'
  }
]

const Text2Render = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="bg-white wow fadeInUp" data-wow-delay=".2s">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div
                className="
                  lg:flex
                  items-center
                  justify-between
                  border
                  overflow-hidden
                "
              >
                <div
                  className="
                    lg:max-w-[565px]
                    xl:max-w-[640px]
                    w-full
                    py-12
                    px-7
                    sm:px-12
                    md:p-16
                    lg:py-9 lg:px-16
                    xl:p-[70px]
                  "
                >
                  <span
                    className="
                      text-sm
                      font-medium
                      py-2
                      px-5
                      bg-primary
                      inline-block
                      mb-5
                    "
                  >
                    About Us
                  </span>
                  <h2
                    className="
                      font-bold
                      text-3xl
                      sm:text-4xl
                      2xl:text-[40px]
                      sm:leading-snug
                      text-dark
                      mb-6
                    "
                  >
                    Brilliant Toolkit to Build Nextgen Website Faster.
                  </h2>
                  <p className="text-base text-body-color mb-9 leading-relaxed">
                    The main ‘thrust' is to focus on educating attendees on how
                    to best protect highly vulnerable business applications with
                    interactive panel discussions and roundtables led by subject
                    matter experts.
                  </p>
                  <p className="text-base text-body-color mb-9 leading-relaxed">
                    The main ‘thrust' is to focus on educating attendees on how
                    to best protect highly vulnerable business applications with
                    interactive panel.
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      py-4
                      px-6
                      rounded
                      bg-primary
                      text-base
                      font-medium
                      hover:bg-opacity-90 hover:shadow-lg
                      transition
                      duration-300
                      ease-in-out
                    "
                  >
                    Learn More
                  </a>
                </div>
                <div className="text-center">
                  <div className="relative inline-block z-10">
                    <img
                      src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2694&q=80"
                      alt="image"
                      className="mx-auto lg:ml-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Text2: Component = {
  id: 'text-2',
  name: 'Text 2',
  type: 'text',
  fields: Text2Fields,
  render: <Text2Render />
}
export { Text2 }
