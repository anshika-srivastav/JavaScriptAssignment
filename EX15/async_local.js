// Task 3: async/await with local data
const users = [
  { id: 1, name: "Aman", courseId: 10 },
  { id: 2, name: "Riya", courseId: 20 }
];
const courses = [
  { id: 10, title: "Web Development" },
  { id: 20, title: "Java Programming" }
];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getUser(id) {
  await wait(50);
  const user = users.find((u) => u.id === id);
  if (!user) throw new Error(`User ${id} not found`);
  return user;
}

async function getCourse(id) {
  await wait(50);
  return courses.find((c) => c.id === id);
}

async function showDetails(userId) {
  try {
    const user = await getUser(userId);
    const course = await getCourse(user.courseId);
    console.log(`${user.name} is enrolled in ${course.title}`);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

(async () => {
  console.log("Fetching one by one...");
  await showDetails(1);
  await showDetails(2);
  await showDetails(9);
  
  console.log("Fetching in parallel...");
  const list = await Promise.all([getUser(1), getUser(2)]);
  console.log("Names:", list.map((u) => u.name).join(" and "));
})();