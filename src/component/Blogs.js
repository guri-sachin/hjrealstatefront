import React, { useState } from 'react';
import Navbar from "./Navbar-p";
import Footer from './Footer';
// import '../css/Footerm.css'; // Ensure you import the CSS file

const Blogs = () => {
  
  const blogsData = [
    {
      imgSrc: "https://hjrealestates.com/wp-content/uploads/2024/02/hj-real-estates-blogs-property-investment-in-dubai-1024x554.webp",
      category: "Blog",
      title: "Thinking of becoming an Investor in Dubai – Here’s an ultimate Guide!",
      date: "February 7, 2024"
    },
    {
      imgSrc: "https://hjrealestates.com/wp-content/uploads/2024/01/hj-real-estates-blog-15-best-places-to-visit-in-dubai-1-1024x683.webp",
      category: "Blog",
      title: "Top 10 Areas for Property Investment in Dubai",
      date: "February 7, 2024"
    },
    {
      imgSrc: "https://hjrealestates.com/wp-content/uploads/2023/12/hj-real-estates-blog-commercial-trend-1-1024x600.webp",
      category: "Developer",
      title: "Top 10 Areas for Property Investment in Dubai",
      date: "February 7, 2024"
    },
    {
      imgSrc: "https://hjrealestates.com/wp-content/uploads/2024/05/hj-real-estates-blog-golden-visa-uae-768x520.webp",
      category: "Blog",
      title: "Golden Visa UAE: Everything You Need to Know About It",
      date: "February 7, 2024"
    },
    {
      imgSrc: "https://hjrealestates.com/wp-content/uploads/2024/05/hj-real-estates-blog-investor-in-dubai-featured-768x512.webp",
      category: "Blog",
      title: "Emaar is 1 of the best Developers in Dubai",
      date: "February 7, 2024"
    },
    {
      imgSrc: "https://hjrealestates.com/wp-content/uploads/2024/02/hj-real-estates-blog-top-developer-in-dubai-768x648.webp",
      category: "Developer",
      title: "Is Buying Property In Dubai A Good Investment?",
      date: "February 7, 2024"
    },
    {
      imgSrc: "https://hjrealestates.com/wp-content/uploads/2023/12/hj-real-estates-places-to-visit-in-uae-1-1024x736.webp",
      category: "Blog",
      title: "Thinking of becoming an Investor in Dubai – Here’s an ultimate Guide!",
      date: "February 7, 2024"
    },
    {
      imgSrc: "https://hjrealestates.com/wp-content/uploads/2023/12/hj-real-estates-blog-is-buy-property-good-featured-1024x683.webp",
      category: "Blog",
      title: "Top 10 Areas for Property Investment in Dubai",
      date: "February 7, 2024"
    },
    {
      imgSrc: "https://hjrealestates.com/wp-content/uploads/2023/12/hj-real-estates-places-to-visit-in-uae-1-1024x736.webp",
      category: "Developer",
      title: "Top 10 Areas for Property Investment in Dubai",
      date: "February 7, 2024"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Calculate the current blogs to display
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogsData.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 id="blogs-heading"></h2>
        <div className="row">
          <div className="col-md-8 hide-scrollbar container" style={{ height: "600px", overflowY: "scroll" }}>
            <div className="row">
              {currentBlogs.map((blog, index) => (
                <div className="col-md-4 col-sm-6 mb-4" key={index}>
                  <div className="card" style={{ width: "100%", border: "none" }}>
                    <img src={blog.imgSrc} className="card-img-toph" alt="..." />
                    <div className="card-body">
                      <p>{blog.category}</p>
                      <h5 className="card-title">{blog.title}</h5>
                      <footer className="blockquote-footer mt-3">{blog.date}</footer>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Pagination totalPages={totalPages} paginate={paginate} currentPage={currentPage} />
          </div>
          <div className="col-md-3 col-sm-12 mb-4" style={{ height: "auto" }}>
            <br />
            <div className="footerloop-column blogs-column">
              <img src="../img/banner.png" alt="Apartment Ad" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Pagination = ({ totalPages, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <a onClick={() => paginate(number)} href="#!" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Blogs;
