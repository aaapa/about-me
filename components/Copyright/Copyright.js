export const copyright = () => {
  const copyrights = document.querySelectorAll(".copyright");
  const currentYear = new Date().getFullYear();
  const siteUrl = new URL(window.location.href).hostname.replace(/^www\./, '');

  copyrights.forEach(copyrightElement => {
    const copyrightTextHTML = `
      <span>&copy; ${currentYear} ${siteUrl}</span>
    `;

    copyrightElement.innerHTML = copyrightTextHTML;
  });
}