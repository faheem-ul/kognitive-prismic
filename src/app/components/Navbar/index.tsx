import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const Navbar = async () => {
  const client = createClient();

  const navbar = await client.getSingle("settings_and_navbar");

  return (
    <div>
        <PrismicNextImage field={navbar.data.logo} />
      <ul>
        {navbar.data.navbar.map((item, label) => (
          <li key={label}>
            <PrismicNextLink field={item.navigation_link}>
              {item.navbar_label}
            </PrismicNextLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
