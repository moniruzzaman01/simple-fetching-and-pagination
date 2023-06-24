import NavLink from "./NavLink";

function Navbar() {
  const Navlinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/all-orders",
      title: "All Order",
    },
    {
      path: "/regular-delivery",
      title: "Regular Delivery",
    },
    {
      path: "/express-delivery",
      title: "Express Delivery",
    },
  ];
  return (
    <div className=" flex justify-around items-center p-5 bg-white">
      <h3 className=" text-lg text-zinc-800 capitalize">navbar</h3>
      <ul className=" flex items-center gap-2">
        {Navlinks.map(({ path, title }, id) => (
          <li key={id}>
            <NavLink
              className=" text-sm py-1 px-4 rounded hover:bg-red-100 duration-500"
              activeClasses="bg-red-100"
              href={path}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Navbar;
