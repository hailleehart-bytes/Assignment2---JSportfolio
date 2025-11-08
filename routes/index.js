import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: "Haillee's Portfolio" });
});

export default router;
