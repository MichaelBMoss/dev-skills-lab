const skills = [
    { skill: 'Coding webpages using HTML, CSS, and JavaScript', learned: 'Learned' },
    { skill: 'Programming and computer science fundamentals', learned: 'Learned' },
    { skill: 'Software engineering best practices', learned: 'Learned' },
    { skill: 'Version control and collaborative software development with Git and GitHub', learned: 'Learned' },
    { skill: 'Developing full-stack applications with Ruby on Rails', learned: 'Not learned yet' },
    { skill: 'Developing full-stack applications with Python and Django', learned: 'Not learned yet' },
    { skill: 'Developing full-stack applications with Express and Node.js', learned: 'Learned' },
    { skill: 'Building secure full-stack applications using design patterns like MVC and REST', learned: 'Learned' },
    { skill: 'Safely modeling and storing data in SQL databases', learned: 'LNot learned yet' },
    { skill: 'Safely modeling and storing data in NoSQL databases', learned: 'Not learned yet' },
    { skill: 'Consuming and integrating third-party APIs in an application', learned: 'Not learned yet' },
    { skill: 'Front-end web application development with Angular', learned: 'Not learned yet' },
    { skill: 'Front-end web application development with React', learned: 'Learned' },
    { skill: 'Deploying applications to the web via cloud-based hosting', learned: 'Not learned yet' },
    { skill: 'Implementing common data structures (e.g., linked lists and trees)', learned: 'Not learned yet' },
    { skill: 'Solving algorithmic challenges', learned: 'Not learned yet' },
    { skill: 'Analyzing the computational complexity of algorithms using Big O notation', learned: 'Not learned yet' }
  ];


  module.exports = {
    getAll
  };
	
  function getAll() {
    return skills;
  }