import { useRouter } from "next/router";
import Link from "next/link";
import blogData from "../../components/data/blog.json"; // Import the blog data from the JSON file
import Layout from "@/components/layout";
import Cta from "@/components/cta";

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Extract the blog ID from the URL
  const blog = blogData.find((b) => b.id.toString() === id); // Find the blog by ID

  if (!blog) {
    return <p>Blog not found!</p>;
  }

  return (
    <Layout>
      {/* Banner Section */}
      <section className="main-banner-in">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="h1-title">Blog Detail</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
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
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </li>
                  <li>
                    <Link href={`/blog/${id}`}>Blog Detail</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="blog-detail-info-box">
              <div
                className="blog-detail-info-img-1 wow fadeInUp animated"
                data-wow-delay=".4s"
              >
                <img src={blog.image} alt="blog" />
              </div>

              <div className="blog-big-user-box">
                <div className="blog-big-user">
                  <div className="blog-big-user-icon">
                    <img
                      src="/assets/images/mslabdesigns-author.png"
                      alt="icon"
                    />
                  </div>
                  <Link href="javascript:void(0);">
                    <p>{blog.author}</p>
                  </Link>
                </div>
                <div className="blog-big-user-line"></div>
                <div className="blog-big-user">
                  <div className="blog-big-user-icon">
                    <img
                      src="/assets/images/mslabdesigns-calendar.png"
                      alt="icon"
                    />
                  </div>
                  <Link href="javascript:void(0);">
                    <p>{blog.date}</p>
                  </Link>
                </div>
                <div className="blog-big-user-line"></div>
                <div className="blog-big-user">
                  <div className="blog-big-user-icon">
                    <img
                      src="/assets/images/mslabdesigns-comment.png"
                      alt="icon"
                    />
                  </div>
                  <Link href="javascript:void(0);">
                    <p>{blog.comments} Comments</p>
                  </Link>
                </div>
              </div>

              <h3 className="h3-title">{blog.title}</h3>

              {blog.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <div className="blog-detail-point">
                <h3 className="h3-title">
                  Educater is the only theme you will ever need
                </h3>
                <ul>
                  {blog.points.map((point, index) => (
                    <li key={index}>
                      <i className="fa fa-check-circle" aria-hidden="true"></i>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="blog-detail-tag-share-box">
                <div className="blog-detail-tag">
                  <span>Tags:</span>
                  <ul>
                    {blog.tags.map((tag, index) => (
                      <li key={index}>
                        <Link href="javascript:void(0);">{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="blog-detail-share">
                  <ul>
                    <li>
                      <Link href="javascript:void(0);">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0);">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0);">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0);">
                        <i
                          className="fa fa-youtube-play"
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Related Blogs */}
              <div className="blog-detail-related-blog-box">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="blog-detail-related-blog-title">
                      <h2 className="h2-subtitle">Our Post</h2>
                      <h2 className="h2-title">Related Blog</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {blog.related_blogs.map((related, index) => (
                    <div className="col-xl-6 col-lg-12 col-md-6" key={index}>
                      <div className="blog-box">
                        <div className="blog-img">
                          <img src={related.image} alt="blog" />
                        </div>
                        <div className="blog-content">
                          <Link href={`/blog-detail/${related.id}`}>
                            <h3 className="h3-title">{related.title}</h3>
                          </Link>
                          <div className="blog-box-line"></div>
                          <div className="blog-date-comment">
                            <div className="blog-date">
                              <div className="blog-date-icon">
                                <img
                                  src="/assets/images/mslabdesigns-calendar.png"
                                  alt="icon"
                                />
                              </div>
                              <Link href="javascript:void(0);">
                                <p>{related.date}</p>
                              </Link>
                            </div>
                            <div className="blog-box-line"></div>
                            <div className="blog-comment">
                              <div className="blog-comment-icon">
                                <img
                                  src="/assets/images/mslabdesigns-comment.png"
                                  alt="icon"
                                />
                              </div>
                              <Link href="javascript:void(0);">
                                <p>{related.comments} Comments</p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-xl-4 col-lg-5">
            <div className="blog-list-sidebar">
              <div className="courses-search-form">
                <form>
                  <div className="form-box">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search..."
                      required
                    />
                    <button type="submit" className="sec-btn">
                      <span>
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="blog-list-sidebar-categories-box">
                <div className="courses-sidebar-title">
                  <div className="sidebar-title-line"></div>
                  <h3 className="h3-title">Categories</h3>
                </div>
                <ul>
                  <li>
                    <Link href="javascript:void(0);">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      <p>Business (10)</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0);">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      <p>Case Study (13)</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0);">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      <p>Insights (9)</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0);">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      <p>World (3)</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0);">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      <p>Tax Solutions (12)</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0);">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      <p>Creative (6)</p>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="blog-list-sidebar-recent-post">
                <div className="courses-sidebar-title">
                  <div className="sidebar-title-line"></div>
                  <h3 className="h3-title">Recent Posts</h3>
                </div>
                <ul>
                  <li>
                    <div className="blog-list-recent-post-img">
                      <img
                        src="/assets/images/mslabdesigns-recent-post-1.jpg"
                        alt="blog"
                      />
                    </div>
                    <div className="blog-list-recent-post-content">
                      <Link href="blog-detail.html">
                        <p>Mauris condimentum purus sit amet interdum.</p>
                      </Link>
                      <div className="blog-date">
                        <div className="blog-date-icon">
                          <img
                            src="/assets/images/mslabdesigns-calendar.png"
                            alt="icon"
                          />
                        </div>
                        <Link href="javascript:void(0);">
                          <p>07 Jan, 2022</p>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="blog-list-recent-post-img">
                      <img
                        src="/assets/images/mslabdesigns-recent-post-2.jpg"
                        alt="blog"
                      />
                    </div>
                    <div className="blog-list-recent-post-content">
                      <Link href="blog-detail.html">
                        <p>Mauris condimentum purus sit amet interdum.</p>
                      </Link>
                      <div className="blog-date">
                        <div className="blog-date-icon">
                          <img
                            src="/assets/images/mslabdesigns-calendar.png"
                            alt="icon"
                          />
                        </div>
                        <Link href="javascript:void(0);">
                          <p>07 Jan, 2022</p>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="blog-list-recent-post-img">
                      <img
                        src="/assets/images/mslabdesigns-recent-post-3.jpg"
                        alt="blog"
                      />
                    </div>
                    <div className="blog-list-recent-post-content">
                      <Link href="blog-detail.html">
                        <p>Mauris condimentum purus sit amet interdum.</p>
                      </Link>
                      <div className="blog-date">
                        <div className="blog-date-icon">
                          <img
                            src="/assets/images/mslabdesigns-calendar.png"
                            alt="icon"
                          />
                        </div>
                        <Link href="javascript:void(0);">
                          <p>07 Jan, 2022</p>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="blog-list-recent-post-img">
                      <img
                        src="/assets/images/mslabdesigns-recent-post-4.jpg"
                        alt="blog"
                      />
                    </div>
                    <div className="blog-list-recent-post-content">
                      <Link href="blog-detail.html">
                        <p>Mauris condimentum purus sit amet interdum.</p>
                      </Link>
                      <div className="blog-date">
                        <div className="blog-date-icon">
                          <img
                            src="/assets/images/mslabdesigns-calendar.png"
                            alt="icon"
                          />
                        </div>
                        <Link href="javascript:void(0);">
                          <p>07 Jan, 2022</p>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="blog-list-sidebar-tag-box">
                <div className="courses-sidebar-title">
                  <div className="sidebar-title-line"></div>
                  <h3 className="h3-title">Tags</h3>
                </div>
                <ul>
                  <li>
                    <Link href="javascript:void(0);">Business</Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0);">Corporate</Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0);">Blog</Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0);">Marketing</Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0);">Creative</Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0);">Web</Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0);">Workers</Link>
                  </li>
                  <li>
                    <Link href="javascript:void(0);">Modern</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cta />
    </Layout>
  );
};

export default BlogDetail;
