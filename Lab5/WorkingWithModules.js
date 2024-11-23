const module = {
  id: "1",
  name: "Introduction to React",
  description: "Learn the basics of React.js",
  course: "Web Development",
};

export default function WorkingWithModules(app) {
  // Retrieve the module object
  app.get("/lab5/module", (req, res) => {
    res.json(module);
  });

  // Retrieve the module's name
  app.get("/lab5/module/name", (req, res) => {
    res.json(module.name);
  });

  // Update the module's name
  app.get("/lab5/module/name/:newName", (req, res) => {
    const { newName } = req.params;
    module.name = newName;
    res.json(module);
  });

  // Update the module's description
  app.get("/lab5/module/description/:newDescription", (req, res) => {
    const { newDescription } = req.params;
    module.description = newDescription;
    res.json(module);
  });
}
