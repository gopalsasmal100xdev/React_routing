import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

import { Book, BookList, Home, NewBook, NotFound } from "./components/pages";
import BookLayout from "./components/pages/BookLayout";

function App() {
  return (
    <div className="App">
      <>
        <nav>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
              justifyContent: "space-even",
              gap: "2rem",
              padding: "10px",
              backgroundColor: "#aaa",
            }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/books/new">New Book</Link>
            </li>
            <li></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* New Route */}
          <Route path="/books" element={<BookLayout />}>
            <Route index element={<BookList />} />
            <Route path=":id" element={<Book />} />
            <Route path="new" element={<NewBook />} />
          </Route>
          {/* Old routes
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<Book />} />
          <Route path="/books/new" element={<NewBook />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
