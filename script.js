import RenderSpinner from "./renderSpinner.js";

const scund = document.querySelector(".scund");

async function fetchContent() {
  try {
    new RenderSpinner(scund);
    const res = await fetch(
      "https://a3raff.com/Yossefprofile/wp-json/wp/v2/korolos_contact?per_page=100"
    );
    const data = await res.json();
    scund.innerHTML = "";

    data.forEach((content) => {
      const contactName = content.acf?.contactName || "";
      const contactUrl = content.acf?.contactUrl || "";
      const contactImgUrl = content.acf?.contactImgUrl || "";

      const html = `  <a
            href="${contactUrl}"
            target="_blank"
            class="item d-inline-flex justify-content-center align-items-center gap-2" >
            <img src="${contactImgUrl}" alt="" />
            <p>${contactName}</p>
          </a>`;

      scund.insertAdjacentHTML("beforeend", html);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchContent();
//////////////////////////////////////////////////////////
