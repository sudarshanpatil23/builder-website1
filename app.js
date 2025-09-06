const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");

// Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, "public")));

function renderPage(res, page, title) {
  ejs.renderFile(path.join(__dirname, "views/pages", `${page}.ejs`), {}, (err, str) => {
    if (err) return res.status(500).send(err.message);
    res.render("layout", { title, body: str });
  });
}
// Routes
app.get("/", (req, res) => renderPage(res, "home", "Home Page - My Website"));
app.get("/about", (req, res) => renderPage(res, "about", "About Us - My Website"));
app.get("/news", (req, res) => renderPage(res, "news", "Latest News - My Website"));
app.get("/contactus", (req, res) => renderPage(res, "contactus", "Contact Us - My Website"));
app.get("/business", (req, res) => renderPage(res, "business", "Business - My Website"));
app.get("/sustainability", (req, res) => renderPage(res, "sustainability", "Sustainability - My Website"));


// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
