let currentPage = 1;
const itemsPerPage = 3;

const courses = [
  { courseId: 'C101', name: 'Introduction to Web Development', instructor: 'Dr John', duration: '10 hours', rating: '4.5', category: 'Web Development', price: '$50', enrolled: '2500' },
  { courseId: 'C102', name: 'Python Programming', instructor: 'Dr Jebin', duration: '10 hours', rating: '4', category: 'Python', price: '$80', enrolled: '1500' },
  { courseId: 'C103', name: 'C Programming', instructor: 'Dr Sunita', duration: '10 hours', rating: '4.6', category: 'C', price: '$60', enrolled: '2600' },
  { courseId: 'C104', name: 'Java Programming', instructor: 'Dr Hussain', duration: '10 hours', rating: '4.8', category: 'Java', price: '$100', enrolled: '3000' },
  { courseId: 'C105', name: 'Introduction to Machine Learning', instructor: 'Dr Prakash', duration: '20 hours', rating: '4.8', category: 'Machine Learning', price: '$150', enrolled: '2000' },
  { courseId: 'C106', name: 'Android App Development', instructor: 'Dr Steve', duration: '15 hours', rating: '4.9', category: 'Android', price: '$200', enrolled: '1000' }
];

function displayCourses(page) {
  const courseList = document.getElementById('course-list');
  courseList.innerHTML = '';
  
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;
  const paginatedCourses = courses.slice(startIndex, endIndex);

  paginatedCourses.forEach(course => {
    const courseCard = `
      <div class="course-card">
        <h2>${course.name}</h2>
        <p>Instructor: ${course.instructor}</p>
        <p>Duration: ${course.duration}</p>
        <p>Rating: ${course.rating}</p>
        <p>Price: ${course.price}</p>
        <p>Enrolled: ${course.enrolled}</p>
      </div>`;
    courseList.innerHTML += courseCard;
  });

  document.getElementById('current-page').textContent = page;
}

function nextPage() {
  if (currentPage * itemsPerPage < courses.length) {
    currentPage++;
    displayCourses(currentPage);
  }
}

function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    displayCourses(currentPage);
  }
}

// Sort courses by name or duration
function sortCourses() {
  const sortOption = document.getElementById('sort').value;
  if (sortOption === 'name') {
    courses.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === 'duration') {
    courses.sort((a, b) => a.duration.localeCompare(b.duration));
  }
  else if (sortOption === 'price') {
    courses.sort((a, b) => a.price.localeCompare(b.price));
  }
  else if (sortOption === 'rating') {
    courses.sort((a, b) => a.rating.localeCompare(b.rating));
  }
  displayCourses(currentPage);
}

// Filter courses by name
function filterCourses() {
  const searchQuery = document.getElementById('search').value.toLowerCase();
  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery)
  );
  const courseList = document.getElementById('course-list');
  courseList.innerHTML = '';
  
  filteredCourses.forEach(course => {
    const courseCard = `
      <div class="course-card">
        <h2>${course.name}</h2>
        <p>Instructor: ${course.instructor}</p>
        <p>Duration: ${course.duration}</p>
        <p>Rating: ${course.rating}</p>
        <p>Price: ${course.price}</p>
        <p>Enrolled: ${course.enrolled}</p>
      </div>`;
    courseList.innerHTML += courseCard;
  });
}

// Initial display
displayCourses(currentPage);
