const book = {
  title: 'Learning JS',
  author: 'Max',
  year: 2020,
  comment: function (name) {
    return `${name} bought the book ${this.title}`;
  }
};

const bookComment = book.comment;
console.log(bookComment('Musk'));

const bookCommentBind = book.comment.bind(book);
console.log(bookCommentBind('Musk'));

book.comment.call(book, 'Musk');

book.comment.apply(book, ['Musk']);
