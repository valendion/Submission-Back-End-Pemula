const {
  addBookHandler,
  getAllBooks,
  getBookByIdHandler,
  editBookHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },

  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },

  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },

  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookHandler,
  },

  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
