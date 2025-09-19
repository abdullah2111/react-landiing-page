function NavItem({ href, text }) {
  return (
    <li>
      <a
        className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
        href={href}
      >
        {text}
      </a>
    </li>
  );
}

export default function Navlinks() {
  return (
    <>
      <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <NavItem href="#" text="Home" />
          <NavItem href="#" text="Company" />
          <NavItem href="#" text="Marketplace" />
          <NavItem href="#" text="Features" />
          <NavItem href="#" text="Team" />
          <NavItem href="#" text="Contact" />
        </ul>
      </div>
    </>
  );
}
