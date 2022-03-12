const indexCtrol = {};

indexCtrol.renderIndex = (req, res) => {
  res.render('index');
};

indexCtrol.renderContacto = (req, res) => {
  res.render('contacto');
};

indexCtrol.renderProfesional = (req, res) => {
  res.render('profesional');
};

module.exports = indexCtrol;