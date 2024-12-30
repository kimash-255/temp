import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import services from "@/data/services.json";

const Services = () => {
  const itemsPerPage = 6; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(services.length / itemsPerPage); // Calculate total pages
  const currentItems = services.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ); // Get items for current page

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <section>
      <section className="main-banner-in">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="h1-title">Our Services</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="main-banner-breadcrum">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-breadcrum">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="main-courses-in">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-courses-list-box">
                <div className="courses-list-style-box">
                  <div className="courses-list-show-box">
                    <Link href="javascript:void(0);">
                      <i className="fa fa-list-ul" aria-hidden="true"></i>
                      <span>
                        Showing {currentItems.length} of {services.length}
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="courses-list-box">
                  <div className="row">
                    {currentItems.map((item, index) => (
                      <div className="col-lg-4 col-md-4" key={index}>
                        <div className="course-box">
                          <div className="course-img">
                            <img src={item.image} alt={item.title} />
                            <ul>
                              <li>
                                <Link href="#" className="course-tag-orange">
                                  Business
                                </Link>
                              </li>
                              <li>
                                <Link href="#" className="course-tag-blue">
                                  Marketing
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="course-content">
                            <Link href={item.href}>
                              <h3 className="h3-title">{item.title}</h3>
                            </Link>
                            <div className="course-line"></div>
                            <div className="course-instructor-review">
                              <div className="course-review-b">
                                <p>{item.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="courses-pagination">
                      <a
                        href="javascript:void(0);"
                        className="pagination-arrow"
                        onClick={() => handlePageChange(currentPage - 1)}
                      >
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                      </a>
                      <ul>
                        {Array.from({ length: totalPages }, (_, i) => (
                          <li
                            key={i}
                            className={currentPage === i + 1 ? "active" : ""}
                            onClick={() => handlePageChange(i + 1)}
                          >
                            {i + 1}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="javascript:void(0);"
                        className="pagination-arrow"
                        onClick={() => handlePageChange(currentPage + 1)}
                      >
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
