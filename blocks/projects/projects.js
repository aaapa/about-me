export const projects = () => {
  if (document.querySelector(".projects__list")) {
    const projectLists = document.querySelectorAll(".projects__list");

    const data = [
      {
        siteLink: "#",
        title: "ГУФД",
        image: "http://host1852858.hostland.pro/create-site-dev/dveri-gufd.webp",
      },
      {
        siteLink: "#",
        title: "ГУФД",
        image: "http://host1852858.hostland.pro/create-site-dev/dveri-gufd.webp",
      },
      {
        siteLink: "#",
        title: "ГУФД",
        image: "http://host1852858.hostland.pro/create-site-dev/dveri-gufd.webp",
      },
      {
        siteLink: "#",
        title: "ГУФД",
        image: "http://host1852858.hostland.pro/create-site-dev/dveri-gufd.webp",
      },
    ];

    data.forEach((project) => {
      const cardHTML = `
        <li>
          <article class="projects__card">
            <figure class="projects__card-info">
              <img class="projects__card-site-preview" src="${project.image}"></img>
              <figcaption class="projects__card-title">${project.title}</figcaption>
            </figure>
            <a class="projects__card-link" href="${project.siteLink}"></a>
          </article>
        </li>
      `;

      projectLists.forEach((list) => {
        list.insertAdjacentHTML("beforeend", cardHTML);
      });
    });
  }
};