import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const blogs = [
    {
      imgSrc: "assets/images/blog-1.jpg",
      title: "Proin feugiat tortor non neque eleifend.",
      date: "07 Jan, 2022",
      comments: "3 Comments",
    },
    {
      imgSrc: "assets/images/blog-2.jpg",
      title: "Proin feugiat tortor non neque eleifend.",
      date: "07 Jan, 2022",
      comments: "3 Comments",
    },
    {
      imgSrc: "assets/images/blog-3.jpg",
      title: "Proin feugiat tortor non neque eleifend.",
      date: "07 Jan, 2022",
      comments: "3 Comments",
    },
  ];

  return (
    <section className="main-blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-title">
              <h2 className="h2-subtitle">Our Blog</h2>
              <h2 className="h2-title">Latest Blog & News</h2>
            </div>
          </div>
        </div>
        <div className="row blog-slider">
          {blogs.map((blog, index) => (
            <div className="col-lg-4" key={index}>
              <div className="blog-box">
                <div className="blog-img">
                  <img src={blog.imgSrc} alt="blog" />
                </div>
                <div className="blog-content">
                  <Link href="blog-detail.html">
                    <h3 className="h3-title">{blog.title}</h3>
                  </Link>
                  <div className="blog-box-line"></div>
                  <div className="blog-date-comment">
                    <div className="blog-date">
                      <div className="blog-date-icon">
                        <img src="assets/images/calendar.png" alt="icon" />
                      </div>
                      <Link href="#">
                        <p>{blog.date}</p>
                      </Link>
                    </div>
                    <div className="blog-box-line"></div>
                    <div className="blog-comment">
                      <div className="blog-comment-icon">
                        <img src="assets/images/comment.png" alt="icon" />
                      </div>
                      <Link href="#">
                        <p>{blog.comments}</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
