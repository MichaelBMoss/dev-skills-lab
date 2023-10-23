const skills = [
  {id: 125223, skill: 'Coding webpages using HTML, CSS, and JavaScript', learned: true},
  {id: 127904, skill: 'LProgramming and computer science fundamentals', learned: true},
  {id: 139608, skill: 'Software engineering best practices', learned: true}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function update(id, updatedSkill) {
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
  id = parseInt(id);
  // Find the index for the skill
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function create(skill) {
  // Add the id
  skill.id = Date.now() % 1000000;
  skill.learned = false;
  skills.push(skill);
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}