let course_list = [];
const container = document.getElementById('course-container');
const url = 'https://private-e05942-courses22.apiary-mock.com/courses';

fetch(url)
    .then((response) => response.json())
    .then(data => {
        course_list = data.message;
        for (title in course_list) {
            let li = document.createElement('li');
            let node = document.createTextNode(title);
            li.appendChild(node);
            container.appendChild(li);
        }
    })