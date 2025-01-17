const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Configuration de la connexion à PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Gestion des fiches employés',
    password: 'root',
    port: 5432,
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route pour l'inscription
app.post('/register', async (req, res) => {
    const { id, nom, prenom, email, telephone, adresse,
        date_naissance, date_embauche, poste, salaire,
        departement } = req.body;
    try {
        const result = await pool.query(
           `INSERT INTO employes 
            (id, nom, prenom, email, telephone, adresse, date_naissance, date_embauche, poste, salaire, departement, statut, created_at)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
            RETURNING *`,
            [
                id, nom, prenom, email, telephone, adresse,
                date_naissance, date_embauche, poste, salaire,
                departement
            ]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur lors de l\'employé');
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log('Serveur en écoute sur http://localhost:3000');
});