const bcrypt = require('bcrypt');
const hashedPassword = await bcrypt.hash(req.body.password, 10)