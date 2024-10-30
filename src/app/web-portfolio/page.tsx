import Header from "../_components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#dddddd] to-[#b9b9b9] text-black">
      <Header />
      <div className="flex w-full flex-grow flex-col p-6 pt-20 text-center">
        <h1 className="pb-14 text-6xl font-extrabold tracking-tight lg:text-7xl">
          Web <span className="text-blue-900">Projects</span>
        </h1>

        <div className="flex flex-col items-center justify-center gap-y-24 lg:p-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex w-full flex-col-reverse items-center lg:flex-row"
            >
              <Link
                className="relative h-64 w-full lg:h-80 lg:w-2/5"
                target="_blank"
                href={project.link}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.title} site`}
                    layout="fill"
                    objectFit="contain"
                    className="pt-4"
                  />
                </div>
              </Link>
              <div className="flex w-full max-w-md flex-col items-center py-10 lg:max-w-4xl lg:px-20">
                <Link href={project.link} target="_blank">
                  <h1 className="flex text-4xl lg:text-5xl gap-x-2">
                    {project.title}{" "}
                    <svg
                      className="w-6 fill-blue-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <title>open-in-new</title>
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                    </svg>
                  </h1>
                </Link>
                <h2 className="pt-2 text-xl text-blue-900">Software</h2>
                <p className="mt-10 text-left text-lg">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="py-52 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Check out more of my projects on{" "}
          <Link
            className="text-blue-500"
            href="https://github.com/Jared588"
            target="_blank"
          >
            GitHub
          </Link>
          !
        </p>
      </div>
    </main>
  );
}

// Project data
const projects = [
  {
    title: "E-commerce Clothing Store",
    image: "/shop.png",
    link: "https://shopping-cart-77l.pages.dev/home",
    description: (
      <ul className="list-inside list-disc">
        <li>
          Built an online clothing store with complex state management using
          React.
        </li>
        <li>
          Managed product inventory and cart functionality for a smooth shopping
          experience.
        </li>
        <li>Implemented a responsive design for a seamless user experience.</li>
      </ul>
    ),
  },
  {
    title: "HR-Administration Site",
    image: "/hr-admin.png",
    link: "https://hr-administration-system.vercel.app/",
    description: (
      <ul className="list-inside list-disc">
        <li>
          Developed a full-stack HR-administration system to manage employees
          and department managers.
        </li>
        <li>
          Implemented user roles and permissions for streamlined access control.
        </li>
        <li>
          Utilized backend frameworks for secure data handling and API
          integration.
        </li>
      </ul>
    ),
  },
  {
    title: "Blog-API",
    image: "/blog.png",
    link: "https://jareddevelops.vercel.app/",
    description: (
      <ul className="list-inside list-disc">
        <li>
          Developed a RESTful API to connect seamlessly with multiple front-end
          applications.
        </li>
        <li>Implemented CRUD operations for managing blog posts.</li>
        <li>
          Ensured secure data handling and user authentication through API
          endpoints.
        </li>
      </ul>
    ),
  },
  {
    title: "Water Filtration Site",
    image: "/water.png",
    link: "https://water-filtration-site.vercel.app/",
    description: (
      <ul className="list-inside list-disc">
        <li>
          Developed a water filtration management system with user-friendly
          features.
        </li>
        <li>
          Implemented data tracking and reporting functionalities for better
          insights.
        </li>
        <li>
          Ensured secure and efficient data management through backend
          integrations.
        </li>
      </ul>
    ),
  },
];
