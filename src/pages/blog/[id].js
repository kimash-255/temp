import { useRouter } from "next/router";
import Link from "next/link";
import blogData from "@/data/blogData.json";
import Layout from "@/components/layout";
import Cta from "@/components/cta";
import ReactMarkdown from "react-markdown";

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog = blogData.find((b) => b.id === id);

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
              <h1 className="h1-semititle">{blog.title}</h1>
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
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                  </li>
                  <li>
                    <Link href={`/blog/${blog?.id}`}>{blog.title}</Link>
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

              <ReactMarkdown>{blog.introduction}</ReactMarkdown>

              {blog?.sections?.map((section, index) => (
                <div key={index}>
                  <ReactMarkdown>{section.heading}</ReactMarkdown>
                  <ReactMarkdown>{section.content}</ReactMarkdown>
                </div>
              ))}

              <ReactMarkdown>{blog.conclusion}</ReactMarkdown>

              {/* Tags & Share Section */}
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
            </div>
          </div>

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
              <div className="blog-list-sidebar-recent-post">
                <div className="courses-sidebar-title">
                  <div className="sidebar-title-line"></div>
                  <h3 className="h3-title">Recent Posts</h3>
                </div>
                <ul>
                  {blogData
                    .filter((b) => b.id !== id) // Exclude current post
                    .slice(0, 6) // Limit to six
                    .map((recentPost) => (
                      <li key={recentPost.id}>
                        <div className="blog-list-recent-post-img">
                          <img
                            src={recentPost.image}
                            alt={recentPost.title}
                            style={{ width: "200px", height: "auto" }}
                          />
                        </div>
                        <div className="blog-list-recent-post-content">
                          <Link href={`/blog/${recentPost.id}`}>
                            <p>{recentPost.title}</p>
                          </Link>
                          <div className="blog-date">
                            <div className="blog-date-icon">
                              <img
                                src="/assets/images/mslabdesigns-calendar.png"
                                alt="icon"
                              />
                            </div>
                            <Link href="javascript:void(0);">
                              <p>{recentPost.date}</p>
                            </Link>
                          </div>
                        </div>
                      </li>
                    ))}
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

export async function getStaticProps({ params }) {
  const { id } = params;
  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      seoData: {
        title: `${blog.title} | MsLabDesigns Blog`,
        description:
          blog.introduction.slice(0, 150) ||
          "Read the latest insights and updates on our blog.",
        keywords:
          blog.tags.join(", ") || "MsLabDesigns, blog, articles, insights",
        url: `https://www.mslabdesigns.com/blog/${id}`,
        image:
          blog.image ||
          "https://www.mslabdesigns.com/assets/images/blog/mslabdesigns-the-power-of-graphic-design.jpg",
        type: "article",
      },
      blog,
    },
  };
}

export async function getStaticPaths() {
  const paths = blogData.map((blog) => ({
    params: { id: blog.id },
  }));

  return {
    paths,
    fallback: false,
  };
}
