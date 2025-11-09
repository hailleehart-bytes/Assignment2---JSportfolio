import express from 'express';
const router = express.Router();

// Home
router.get('/', (req, res) => {
  res.render('index', { title: "Haillee's Portfolio" });
});

// About
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

// Projects
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

// Skills
router.get('/skills', (req, res) => {
  res.render('skills', { title: 'Skills' });
});

// Contact
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

export default router;
