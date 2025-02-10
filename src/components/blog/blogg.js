import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import blogData from "@/data/blogData.json";

const ITEMS_PER_PAGE = 3;

const Blogg = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(
    () => [...new Set(blogData.map((blog) => blog.category).filter(Boolean))],
    []
  );

  const tags = useMemo(
    () => [...new Set(blogData.flatMap((blog) => blog.tags).filter(Boolean))],
    []
  );

  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const filteredBlogs = blogData?.filter((blog) => {
    const categoryMatch = selectedCategory
      ? blog.category === selectedCategory
      : true;
    const tagsMatch = selectedTags?.length
      ? selectedTags?.every((tag) => blog?.tags?.includes(tag))
      : true;
    const searchMatch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && tagsMatch && searchMatch;
  });

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section>
      <section className="main-banner-in">
        <div className="container">
          <h1 className="h1-title">Our Blog</h1>
        </div>
      </section>
      <section className="main-blog-list-in">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="main-blog-list-box">
                {paginatedBlogs.map((blog) => (
                  <div className="blog-list-box" key={blog.id}>
                    <div className="blog-big-img">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        width={800}
                        height={400}
                      />
                    </div>
                    <div className="blog-big-content">
                      <p>
                        By {blog.author} | {blog.date} | {blog.comments}{" "}
                        Comments
                      </p>
                      <Link href={`/blog/${blog.id}`}>
                        <h3 className="h3-title">{blog.title}</h3>
                      </Link>
                      <p>{blog.excerpt}</p>
                      <Link href={`/blog/${blog.id}`} className="sec-btn">
                        Read More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="courses-pagination">
                <a
                  href="#"
                  className="pagination-arrow"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <i className="fa fa-angle-left" aria-hidden="true"></i>
                </a>
                <ul>
                  {[...Array(totalPages)].map((_, index) => (
                    <li
                      key={index}
                      className={currentPage === index + 1 ? "active" : ""}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="pagination-arrow"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            <div className="col-xl-4 col-lg-5">
              <div className="blog-list-sidebar">
                <div className="courses-search-form">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div class="blog-list-sidebar-categories-box">
                  <div class="courses-sidebar-title">
                    <div class="sidebar-title-line"></div>
                    <h3 class="h3-title">Categories</h3>
                  </div>
                  <ul>
                    <li
                      onClick={() => handleCategoryClick(null)}
                      className={!selectedCategory ? "active" : ""}
                    >
                      <Link href="javascript:void(0);">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        <p>All</p>
                      </Link>
                    </li>
                    {categories.map((category, index) => (
                      <li
                        key={index}
                        onClick={() => handleCategoryClick(category)}
                        className={
                          selectedCategory === category ? "active" : ""
                        }
                      >
                        <Link href="javascript:void(0);">
                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                          <p>{category}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div class="blog-list-sidebar-tag-box">
                  <div class="courses-sidebar-title">
                    <div class="sidebar-title-line"></div>
                    <h3 class="h3-title">Tags</h3>
                  </div>
                  <ul>
                    {tags.map((tag, index) => (
                      <li
                        key={index}
                        onClick={() => handleTagClick(tag)}
                        className={selectedTags.includes(tag) ? "active" : ""}
                      >
                        <Link href="javascript:void(0);">{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Blogg;
