import { Router } from "express";
const router = Router();

router.get('/', (req, res) => { res.render('index', {title: 'Html con Node'}) })
router.get('/about', (req, res) => { res.render('about', {title: 'Html con Node - Acerca'}) })
router.get('/contact', (req, res) => { res.render('contact', {title: 'Html con Node - Contacto'}) })

export default router