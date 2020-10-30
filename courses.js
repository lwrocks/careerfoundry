// Retrieve Course Details Based on User's Selection

// Display CareerFoundry Courses
const url = "https://private-e05942-courses22.apiary-mock.com/courses";

function fetchData() {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const html = data
        .map((course) => {
          return `<div class="course-info">
              <p>Title: ${course.title}</p>
              <p>Author: ${course.author}</p>
              <a href="${course.url}">View Program</a>
            </div>`;
        })
        .join("");
      console.log(html);
      document.querySelector("#courses").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();
