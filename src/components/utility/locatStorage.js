export const getReadBooks = () => {
  let books = []
  const storedBooks = localStorage.getItem('books')
  if (storedBooks) {
    books = JSON.parse(storedBooks)
  }
  return books
}
export const saveRead = book => {
  let books = getReadBooks()
  console.log(books)
  const isExist = books.find(b => b.bookId === book.bookId)
  if (isExist) {
    return console.log('Already Added!')
  }
  books.push(book)
  localStorage.setItem('books', JSON.stringify(books))
  alert('Book Added To Read List!')
}

// export const deleteBlog = id => {
//   let books = getReadBooks()
//   const remaining = books.filter(b => b.id !== id)
//   localStorage.setItem('books', JSON.stringify(remaining))
//   alert('Blog Removed from Bookmark!')
// }
