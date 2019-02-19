const db = require('../db');
function getList(req, res) {
  const query = `
    SELECT * FROM mensajes
 `;

  console.log(query);

  db.query(query, function(error, rows) {
    if (error) {
      console.log('Hubo un error en la consulta', error.message);

      return res.send(500, {
        message: error.message
      });
    }

    res.send(rows);
  });
}

function addMessage(req, res) {
  const message = req.body.message;
  const userName = req.body.user_name;
  const query = `
  INSERT INTO mensajes
(mensaje, user_name, fecha)
VALUES
(?, ?, NOW())
 `;

  const queryParams = [message, userName];

  console.log(query);
  console.log(queryParams);

  db.query(query, queryParams, function(error, rows) {
    if (error) {
      console.log('Hubo un error en la consulta', error.message);

      return res.send(500, {
        message: error.message
      });
    }

    res.send(rows);
  });
}

function editMessage(req, res) {
  const message = req.body.message;
  const messageId = req.params.id;

  const query = `
  UPDATE mensajes
  SET mensaje = ?
  WHERE id = ?
`;

  const queryParams = [message, messageId];

  console.log(query, queryParams);
  db.query(query, queryParams, function(error, rows) {
    if (error) {
      console.log('Hubo un error en la consulta', error.message);

      return res.send(500, {
        message: error.message
      });
    }

    res.send(rows);
  });
}

function borrar(req, res) {}

// function copiada (req, res) {
//     const query = `
//           SELECT usuario.username, lista.nombre
//           FROM usuario
//           INNER JOIN lista ON usuario.id = lista.propietario_id
//           WHERE usuario.id = ?
//        `;
//     const queryParams = [req.params.id];
//     db.query(query, queryParams, function(error, rows) {
//       if (error) {
//         console.log('Hubo un error en la consulta', error.message);

//         return res.send(500, {
//           message: error.message
//         });
//       }

//       res.send(rows);
//     });
//   });

module.exports = {
  list: getList,
  add: addMessage,
  edit: editMessage,
  delete: borrar
};
