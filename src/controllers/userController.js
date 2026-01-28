const pool = require('../config/db');

exports.getUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  const { name, email, external_phone, internal_phone, department_id } = req.body;
  try {
    const result = await pool.query('INSERT INTO users (name, email, external_phone, internal_phone, department_id) VALUES ($1, $2, $3, $4, $5) RETURNING *', [name, email, external_phone, internal_phone, department_id]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  console.log('Request body:', req.body);
  console.log('Request params:', req.params);
  const id = req.params.id;
  const { name, email, external_phone, internal_phone, department_id } = req.body;
  try {
    const result = await pool.query('UPDATE users SET name = $1, email = $2, external_phone = $3, internal_phone = $4, department_id = $5 WHERE id = $6 RETURNING *', [name, email, external_phone, internal_phone, department_id, id]);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//////////////////////department/////////////////////////
exports.getDepartment = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM department');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.createDepartment = async (req, res) => {
  const {department_name } = req.body;
  try {
    const result = await pool.query('INSERT INTO department (department_name) VALUES ($1) RETURNING *', [department_name]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateDepartment = async (req, res) => {
  console.log('Request body:', req.body);
  console.log('Request params:', req.params);
  const id = req.params.id;
  const { department_name, department_id } = req.body;
  try {
    const result = await pool.query('UPDATE department SET department_name = $1 WHERE id = $2 RETURNING *', [department_name, id]);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteDepartment = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM department WHERE id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//////////////////////organization/////////////////////////
exports.getOrganizations = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM organization');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createOrganization = async (req, res) => {
  const { organization_name } = req.body;
  try {
    const result = await pool.query('INSERT INTO organization (organization_name) VALUES ($1) RETURNING *', [organization_name]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateOrganization = async (req, res) => {
  console.log('Request body:', req.body);
  console.log('Request params:', req.params);
  const id = req.params.id;
  const { organization_name } = req.body;
  try {
    const result = await pool.query('UPDATE organization SET organization_name = $1 WHERE id = $2 RETURNING *', [organization_name, id]);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteOrganization = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM organization WHERE id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};