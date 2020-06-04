
const fs = require("fs");
const templates = require("./templates");

const componentName = process.argv[2];

if (!componentName) {
  console.error("Enter a component name");
  process.exit(1);
}

console.log("Creating Component with name: " + componentName);

const componentDirectory = `./src/components/${componentName}`;
const componentTestDirectory = `./src/components/${componentName}/__test__`
const componentStyleDirectory  =`./src/styles/components`
const componentStoriesDirectory = `./src/stories`

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  let directory = componentDirectory
  if (template.extension === '.scss') directory = componentStyleDirectory
  if (template.extension === '.spec.tsx') directory = componentTestDirectory
  if (template.extension === '.stories.tsx') directory = componentStoriesDirectory
  fs.mkdir(directory, { recursive: true }, (err) => {
    if (err) throw err;
  });

});
generatedTemplates.forEach((template) => {
  let directory = componentDirectory
  if (template.extension === '.scss') directory = componentStyleDirectory
  if (template.extension === '.spec.tsx') directory = componentTestDirectory
  if (template.extension === '.stories.tsx') directory = componentStoriesDirectory

  fs.writeFileSync(
    `${directory}/${template.extension === '.scss' ? `_${componentName.toLowerCase()}` : componentName}${template.extension}`,
    template.content,
    { recursive: true }
  );
});


console.log(
  "Successfully created component under: " + componentDirectory
);