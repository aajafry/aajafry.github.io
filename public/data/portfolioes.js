export const portfolioes = {
  categories: [
    {
      id: 1,
      name: "application",
      items: [
        {
          id: 1,
          category: "application",
          name: "inovex",
          featureImage:
            "https://res.cloudinary.com/damrieqko/image/upload/v1722255994/aajafry/inovex.png",
          description: `INOVEX is an internal web application designed to help agencies manage and monitor their services, clients, quotations, orders, sales, accounts, and workflow. Inspired by AgencyHandy, this project emphasizes clean, maintainable code and modern technologies.
            <br/><br/>
            <b>Features:</b><br>
              <span style="color:#f43f5e">Agency Management:</span> Comprehensive management of services, clients, quotations, orders, sales, accounts, and workflow.<br>
              <span style="color:#f43f5e">Theme Customization:</span> Implemented user-friendly theme customization using Redux and mui-color-input.<br>
              <span style="color:#f43f5e">Authentication:</span> Utilized bcrypt and JWT for secure authentication.<br>
            <br/><br/>
            <b>Technologies:</b>
            <br>
            <span style="color:#f43f5e">Frontend:</span> React, Redux Toolkit, Tailwind, MUIv5, Axios, SWR, Material-Icons, Moment.js, React-Dropzone, React-Quill, React-Beautiful-DnD, Zod, React-Hook-Form, React-Router-Dom-v6, MUI-Color-Input, MUI-Data-Grid.
            <br>
            <span style="color:#f43f5e">Backend:</span> Node.js, Express.js, Mongoose, CORS, JWT, Bcrypt, Body-Parser, Multer, Cloudinary.
            <br/><br/>
            <b>Highlights:</b><br>
            <ul class="highlightsBullet" style="list-style: square; padding-left: 1rem">
                <li>Showcases my ability to use modern technologies and features, emphasizing clean and maintainable code.</li>
                <li>Adhered to the DRY principle and employed a solid component-based architecture.</li>
                <li>Future plans include converting to atomic design for improved maintainability.</li>
            </ul>`,
          specification: "",
          github: "https://github.com/aajafry/inovex",
          live: "https://inovex.vercel.app",
          transitionDuration: "1s",
        },
        {
          id: 2,
          category: "application",
          name: "ecomart",
          featureImage:
            "https://res.cloudinary.com/damrieqko/image/upload/v1727708342/aajafry/ecomart.png",
          description: `ECOMART is a responsive multi-vendor eCommerce web application built on the MERN stack. It is designed for comprehensive management of categories, products, coupons, orders, shops, accounts, employees, and customers, catering to the needs of organizations, shops, and individual customers.
            <br/><br/>
            <b>Features:</b><br>
              <span style="color:#f43f5e">Management System:</span> Efficiently handle categories, products, coupons, orders, and shops, accounts, employees, and customers.<br>
              <span style="color:#f43f5e">User Accounts:</span> Manage accounts for employees and customers seamlessly.<br>
            <br/><br/>
            <b>Technologies:</b>
            <br>
            <span style="color:#f43f5e">Frontend:</span> React, Tailwind, MUIv5, Axios, Moment.js, Zod, React-Hook-Form, React-Router-Dom-v6, MUI-Data-Grid, jwt-decode, react-image-magnify, react-toastify
            <br>
            <span style="color:#f43f5e">Backend:</span> Node.js, Express.js, Mongoose, CORS, JWT, Bcrypt, Cloudinary.
            <br/><br/>
            <b>Highlights:</b><br>
            <ul class="highlightsBullet" style="list-style: square; padding-left: 1rem">
                <li>Showcases my ability to use modern technologies and features, emphasized clean, maintainable code by adhering to atomic design principles, SOLID architecture, and the DRY principle.</li>
                <li>Utilized custom hooks for enhanced functionality.</li>
                <li>Utilized bcrypt and JWT for token based secure authentication and role-based authorization.</li>
                <li>Implemented theme customization, cart, wishlist, and sidebar using Context API.</li>
            </ul>`,
          specification: "",
          github: "https://github.com/aajafry/ecomart",
          live: "https://letsgo-ecomart.vercel.app",
          transitionDuration: "5s",
        },
        {
          id: 3,
          category: "application",
          name: "recto",
          featureImage:
            "https://res.cloudinary.com/damrieqko/image/upload/v1722177700/aajafry/recto.png",
          description: `Recto is a responsive dashboard template based on React.
            <br/><br/>
            <b>Features:</b><br>
              <ul class="highlightsBullet" style="list-style: square; padding-left: 1rem">
                <li>Implemented Chart.js for visual representation of statistic and fullCalendar.js for schedule management application</li>
                <li>Utilized bcrypt and Passport.js (local and oAuth) for token based secure authentication</li>
                <li>Implemented user-friendly theme customization using context-api.</li>
                <li>Emphasized clean, maintainable code following the atomic-design, SOLID-Architecture, DRY principle and use custom hook</li>
            </ul>
            <br/><br/>
            <b>Technologies:</b>
            <br>
            <span style="color:#f43f5e">Frontend:</span> React, Tailwind, MUIv5, Axios, React-Icons, Zod, React-Hook-Form, React-Router-Dom-v6, MUI-Data-Grid, Chart.js, FullCalendar.js. 
            <br>
            <span style="color:#f43f5e">Backend:</span> Node.js, Express.js, Mongoose, CORS, JWT, Bcrypt, Passport.js.
            <br/><br/>
            `,
          specification: "",
          github: "https://github.com/aajafry/recto",
          live: "https://recto-omega.vercel.app",
          transitionDuration: "2s",
        },
        {
          id: 4,
          category: "application",
          name: "GraphCMS",
          featureImage:
            "https://res.cloudinary.com/damrieqko/image/upload/v1710883571/aajafry/graphCMS.png",
          description: `GraphCMS is a blog application inspired by Medium, designed to explore the integration of GraphQL with the front end. The backend is powered by Hygraph, a headless CMS, while the frontend is built using Next.js. This setup leverages GraphQL for efficient data querying and management, resulting in a seamless and dynamic content creation and display experience.
          <br><br>
          <b>Features:</b>
          <br><br>
            <span style="color:#f43f5e">GraphQL Integration:</span> GraphQL is used to query and manage data, offering a flexible and efficient way to interact with the backend. This allows for precise data fetching, reducing the amount of data transferred and improving performance.
            <br>
            <span style="color:#f43f5e">Hygraph Headless CMS:</span> Hygraph serves as the content management system, providing a robust and scalable backend solution. It allows for easy content creation and management, decoupled from the presentation layer.
            <br>
            <span style="color:#f43f5e">Minimalist Design:</span> The application features a minimalist design that prioritizes comfortable readability, fostering a distraction-free reading experience. Leveraging Next.js for the frontend enhances performance, delivering a faster and more responsive user experience. Additionally, Tailwind CSS is utilized for styling, facilitating a clean and modern design with minimal effort. Its utility-first approach enables rapid customization, ensuring a consistent look and feel throughout the application.
            <br>
            <span style="color:#f43f5e">Content Filtering:</span> Users can filter content by specific authors or categories, allowing for a personalized reading experience. This feature enhances user engagement by making it easier to find relevant content.
            <br>
            <span style="color:#f43f5e">Component-Based Architecture and DRY Principle:</span> The application follows a component-based architecture and adheres to the (DRY) principle. By encapsulating UI elements into reusable components, the application promotes reusability and maintainability, simplifying the development process and ensuring consistent functionality.
          <br><br>
          <b>Technologies:</b>
            <br><br>
            <span style="color:#f43f5e">Frontend:</span> Next.js, Tailwind CSS, Moment.js
            <br>
            <span style="color:#f43f5e">Backend:</span> Hygraph (headless CMS), GraphQL
          <br><br>
          <b>Highlights:</b>
          <br><br>
            <ul class="highlightsBullet" style="list-style: square; padding-left: 1rem">
            <li>Combines powerful technologies and best practices to deliver a modern, efficient, and user-friendly blogging platform.</li>
           <li>Utilizes a component-based architecture and adheres to the DRY principle, ensuring maintainability and scalability.</li>
            <li>Provides an optimal experience for both creators and readers through seamless content creation, efficient data management, and a focus on readability and user engagement.</li>
            </ul>`,
          specification: "",
          github: "https://github.com/aajafry/Graph-CMS-Blog",
          live: "https://jafry-graph-cms-blog.netlify.app/",
          transitionDuration: "2.5s",
        },
        {
          id: 5,
          category: "application",
          name: "Pocket-Tracker",
          featureImage:
            "https://res.cloudinary.com/damrieqko/image/upload/v1722177701/aajafry/pocket-tracker.png",
          description: `Pocket Tracker is an income-expense tracker application developed to explore the capabilities of Vue 3 and the Vue 3 Composition API. It features dark/light theme toggle, user authentication, and is developed using atomic design principles for modularity and reusability.`,
          specification: "",
          github: "https://github.com/aajafry/pocket-tracker",
          live: "https://jafry-pocket-tracker.netlify.app",
          transitionDuration: "1s",
        },
      ],
    },
    {
      id: 2,
      name: "template",
      items: [
        {
          id: 1,
          category: "template",
          name: "Gericht",
          featureImage:
            "https://res.cloudinary.com/damrieqko/image/upload/v1710884923/aajafry/gericht.png",
          description:
            "Gericht is a fully responsive restaurant website template built with React. This template is designed to enhance UI/UX development, offering a seamless and engaging user experience across all devices.",
          specification: "",
          github: "https://github.com/aajafry/Gericht-Restaurant",
          live: "https://jafry-gericht-restaurant.netlify.app/",
          transitionDuration: "7s",
        },
        {
          id: 2,
          category: "template",
          name: "shaha",
          featureImage:
            "https://res.cloudinary.com/damrieqko/image/upload/v1722199060/aajafry/shaha.png",
          description:
            "Shaha is a fully responsive islamic community website template built with React and GSAP. This template is designed to enhance Animation and UI/UX development, providing a seamless and engaging user experience across all devices.",
          specification: "",
          github: "https://github.com/aajafry/shaha",
          live: "https://shahacenter.netlify.app",
          transitionDuration: "7s",
        },
        {
          id: 3,
          category: "template",
          name: "foodies",
          featureImage:
            "https://res.cloudinary.com/damrieqko/image/upload/v1710883587/aajafry/foodies.png",
          description:
            "Foodies is a fully responsive online food ordering website template built with React. This template is designed to enhance UI/UX development, providing a seamless and engaging user experience across all devices.",
          specification: "",
          github: "https://github.com/aajafry/Foodies-Restaurant",
          live: "https://jafry-foodies-restaurant.netlify.app/",
          transitionDuration: "7s",
        },
      ],
    },
  ],
};
