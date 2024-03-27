import toast from 'react-hot-toast'

export const getWishBooks = () => {
  let wishBooks = []
  const storedWishBooks = localStorage.getItem('wishBooks')
  if (storedWishBooks) {
    wishBooks = JSON.parse(storedWishBooks)
  }
  return wishBooks
}

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
  const isExistRead = books.find(b => b.bookId === book.bookId)
  let wishBooks = getWishBooks()
  const isExistWish = wishBooks.find(wb => wb.bookId === book.bookId)
  if (isExistRead) {
    return toast.error("Already in the read list");
  }else if (isExistWish) {
    return deleteWishBook(book)
  } else {
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Successfully added to read list.');
  }
}

export const saveWish = book => {
  let wishBooks = getWishBooks()
  const isExistWish = wishBooks.find(wb => wb.bookId === book.bookId)
  let books = getReadBooks()
  const isExistRead = books.find(b => b.bookId === book.bookId)
  if (isExistWish) {
    return toast.error("Already in the wish list");
  }else if (isExistRead) {
    return toast.error("Already in the read list");
  } else {
    wishBooks.push(book)
    localStorage.setItem('wishBooks', JSON.stringify(wishBooks))
    toast.success('Successfully added to wish list.');
  }
}

export const deleteWishBook = book => {
  let wishBooks = getWishBooks()
  let books = getReadBooks()
  const remaining = wishBooks.filter(wb => wb.bookId !== book.bookId)
  localStorage.setItem('wishBooks', JSON.stringify(remaining))
  books.push(book)
  localStorage.setItem('books', JSON.stringify(books))
  toast(
    "Successfully added to read list and removed from wish list",
    {
      duration: 4000,
    }
  );
}