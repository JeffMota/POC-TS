import app, { init } from "./app"

init().then(() => {
  app.listen(5000, () => console.log("Running on port 5000..."))
})