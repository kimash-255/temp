import Image from "next/image";
import Link from "next/link";

const Blogg = () => {
  return (
    <section>
      <section class="main-blog-list-in">
        <div class="container">
          <div class="row">
            {/* <!--Blog Box Start--> */}
            <div class="col-xl-8 col-lg-7">
              <div class="main-blog-list-box">
                <div class="blog-list-box">
                  <div class="blog-big-img">
                    <img src="/assets/images/blog-big-img-1.jpg" alt="blog" />
                  </div>
                  <div class="blog-big-content">
                    <div class="blog-big-user-box">
                      <div class="blog-big-user">
                        <div class="blog-big-user-icon">
                          <img src="/assets/images/author.png" alt="icon" />
                        </div>
                        <Link href="javascript:void(0);">
                          <p>John Doe</p>
                        </Link>
                      </div>
                      <div class="blog-big-user-line"></div>
                      <div class="blog-big-user">
                        <div class="blog-big-user-icon">
                          <img src="/assets/images/calendar.png" alt="icon" />
                        </div>
                        <Link href="javascript:void(0);">
                          <p>07 Jan, 2022</p>
                        </Link>
                      </div>
                      <div class="blog-big-user-line"></div>
                      <div class="blog-big-user">
                        <div class="blog-big-user-icon">
                          <img src="/assets/images/comment.png" alt="icon" />
                        </div>
                        <Link href="javascript:void(0);">
                          <p>3 Comments</p>
                        </Link>
                      </div>
                    </div>
                    <Link href="/blog/1">
                      <h3 class="h3-title">
                        Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos.
                      </h3>
                    </Link>
                    <p>
                      Donec accumsan enim sit amet dolor rhoncus scelerisque.
                      Suspendisse dictum, enim a interdum facilisis, ex diam
                      dignissim ligula, sit amet commodo est nunc vulputate
                      turpis.
                    </p>
                    <Link href="/blog/1" class="sec-btn">
                      Read More
                    </Link>
                  </div>
                </div>
                <div class="blog-list-box">
                  <div class="blog-big-img">
                    <img src="/assets/images/blog-big-img-2.jpg" alt="blog" />
                  </div>
                  <div class="blog-big-content">
                    <div class="blog-big-user-box">
                      <div class="blog-big-user">
                        <div class="blog-big-user-icon">
                          <img src="/assets/images/author.png" alt="icon" />
                        </div>
                        <Link href="javascript:void(0);">
                          <p>John Doe</p>
                        </Link>
                      </div>
                      <div class="blog-big-user-line"></div>
                      <div class="blog-big-user">
                        <div class="blog-big-user-icon">
                          <img src="/assets/images/calendar.png" alt="icon" />
                        </div>
                        <Link href="javascript:void(0);">
                          <p>07 Jan, 2022</p>
                        </Link>
                      </div>
                      <div class="blog-big-user-line"></div>
                      <div class="blog-big-user">
                        <div class="blog-big-user-icon">
                          <img src="/assets/images/comment.png" alt="icon" />
                        </div>
                        <Link href="javascript:void(0);">
                          <p>3 Comments</p>
                        </Link>
                      </div>
                    </div>
                    <Link href="/blog/2">
                      <h3 class="h3-title">
                        Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos.
                      </h3>
                    </Link>
                    <p>
                      Donec accumsan enim sit amet dolor rhoncus scelerisque.
                      Suspendisse dictum, enim a interdum facilisis, ex diam
                      dignissim ligula, sit amet commodo est nunc vulputate
                      turpis.
                    </p>
                    <Link href="/blog/" class="sec-btn">
                      Read More
                    </Link>
                  </div>
                </div>
                <div class="blog-list-box">
                  <div class="blog-big-img">
                    <img src="/assets/images/blog-big-img-3.jpg" alt="blog" />
                  </div>
                  <div class="blog-big-content">
                    <div class="blog-big-user-box">
                      <div class="blog-big-user">
                        <div class="blog-big-user-icon">
                          <img src="/assets/images/author.png" alt="icon" />
                        </div>
                        <Link href="javascript:void(0);">
                          <p>John Doe</p>
                        </Link>
                      </div>
                      <div class="blog-big-user-line"></div>
                      <div class="blog-big-user">
                        <div class="blog-big-user-icon">
                          <img src="/assets/images/calendar.png" alt="icon" />
                        </div>
                        <Link href="javascript:void(0);">
                          <p>07 Jan, 2022</p>
                        </Link>
                      </div>
                      <div class="blog-big-user-line"></div>
                      <div class="blog-big-user">
                        <div class="blog-big-user-icon">
                          <img src="/assets/images/comment.png" alt="icon" />
                        </div>
                        <Link href="javascript:void(0);">
                          <p>3 Comments</p>
                        </Link>
                      </div>
                    </div>
                    <Link href="/blog/3">
                      <h3 class="h3-title">
                        Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos.
                      </h3>
                    </Link>
                    <p>
                      Donec accumsan enim sit amet dolor rhoncus scelerisque.
                      Suspendisse dictum, enim a interdum facilisis, ex diam
                      dignissim ligula, sit amet commodo est nunc vulputate
                      turpis.
                    </p>
                    <Link href="/blog/3" class="sec-btn">
                      Read More
                    </Link>
                  </div>
                </div>
                <div class="blog-list-box">
                  <div class="blog-big-img">
                    <img src="/assets/images/blog-big-img-4.jpg" alt="blog" />
                  </div>
                  <div class="blog-big-content">
                    <div class="blog-big-user-box">
                      <div class="blog-big-user">
                        <div class="blog-big-user-icon">
                          <img src="/assets/images/author.png" alt="icon" />
                        </div>
                        <Link href="javascript:void(0);">
                          <p>John Doe</p>
                        </Link>
                      </div>
                      <div class="blog-big-user-line"></div>
                      <div class="blog-big-user">
                        <div class="blog-big-user-icon">
                          <img src="/assets/images/calendar.png" alt="icon" />
                        </div>
                        <Link href="javascript:void(0);">
                          <p>07 Jan, 2022</p>
                        </Link>
                      </div>
                      <div class="blog-big-user-line"></div>
                      <div class="blog-big-user">
                        <div class="blog-big-user-icon">
                          <img src="/assets/images/comment.png" alt="icon" />
                        </div>
                        <Link href="javascript:void(0);">
                          <p>3 Comments</p>
                        </Link>
                      </div>
                    </div>
                    <Link href="/blog/4">
                      <h3 class="h3-title">
                        Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos.
                      </h3>
                    </Link>
                    <p>
                      Donec accumsan enim sit amet dolor rhoncus scelerisque.
                      Suspendisse dictum, enim a interdum facilisis, ex diam
                      dignissim ligula, sit amet commodo est nunc vulputate
                      turpis.
                    </p>
                    <Link href="blog-detail.html" class="sec-btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div class="courses-pagination">
                <Link href="javascript:void(0);" class="pagination-arrow">
                  <i class="fa fa-angle-left" aria-hidden="true"></i>
                </Link>
                <ul>
                  <li class="active">1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
                <Link href="javascript:void(0);" class="pagination-arrow">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
            {/* <!--Blog Box End--> */}
            {/* <!--Sidebar Start--> */}
            <div class="col-xl-4 col-lg-5">
              <div class="blog-list-sidebar">
                <div class="courses-search-form">
                  <form>
                    <div class="form-box">
                      <input
                        type="text"
                        name="search"
                        placeholder="Search..."
                        required
                      />
                      <button type="submit" class="sec-btn">
                        <span>
                          <i class="fa fa-search" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
                <div class="blog-list-sidebar-categories-box">
                  <div class="courses-sidebar-title">
                    <div class="sidebar-title-line"></div>
                    <h3 class="h3-title">Categories</h3>
                  </div>
                  <ul>
                    <li>
                      <Link href="javascript:void(0);">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        <p>Business (10)</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0);">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        <p>Case Study (13)</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0);">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        <p>Insights (9)</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0);">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        <p>World (3)</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0);">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        <p>Tax Solutions (12)</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="javascript:void(0);">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                        <p>Creative (6)</p>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="blog-list-sidebar-recent-post">
                  <div class="courses-sidebar-title">
                    <div class="sidebar-title-line"></div>
                    <h3 class="h3-title">Categories</h3>
                  </div>
                  <ul>
                    <li>
                      <div class="blog-list-recent-post-img">
                        <img
                          src="/assets/images/recent-post-1.jpg"
                          alt="blog"
                        />
                      </div>
                      <div class="blog-list-recent-post-content">
                        <Link href="/blog/1">
                          <p>Mauris condimentum purus sit amet interdum.</p>
                        </Link>
                        <div class="blog-date">
                          <div class="blog-date-icon">
                            <img src="/assets/images/calendar.png" alt="icon" />
                          </div>
                          <Link href="javascript:void(0);">
                            <p>07 Jan, 2022</p>
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="blog-list-recent-post-img">
                        <img
                          src="/assets/images/recent-post-2.jpg"
                          alt="blog"
                        />
                      </div>
                      <div class="blog-list-recent-post-content">
                        <Link href="/blog/2">
                          <p>Mauris condimentum purus sit amet interdum.</p>
                        </Link>
                        <div class="blog-date">
                          <div class="blog-date-icon">
                            <img src="/assets/images/calendar.png" alt="icon" />
                          </div>
                          <Link href="javascript:void(0);">
                            <p>07 Jan, 2022</p>
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="blog-list-recent-post-img">
                        <img
                          src="/assets/images/recent-post-3.jpg"
                          alt="blog"
                        />
                      </div>
                      <div class="blog-list-recent-post-content">
                        <Link href="/blog/3">
                          <p>Mauris condimentum purus sit amet interdum.</p>
                        </Link>
                        <div class="blog-date">
                          <div class="blog-date-icon">
                            <img src="/assets/images/calendar.png" alt="icon" />
                          </div>
                          <Link href="javascript:void(0);">
                            <p>07 Jan, 2022</p>
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="blog-list-recent-post-img">
                        <img
                          src="/assets/images/recent-post-4.jpg"
                          alt="blog"
                        />
                      </div>
                      <div class="blog-list-recent-post-content">
                        <Link href="blog-detail.html">
                          <p>Mauris condimentum purus sit amet interdum.</p>
                        </Link>
                        <div class="blog-date">
                          <div class="blog-date-icon">
                            <img src="/assets/images/calendar.png" alt="icon" />
                          </div>
                          <Link href="javascript:void(0);">
                            <p>07 Jan, 2022</p>
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="blog-list-sidebar-tag-box">
                  <div class="courses-sidebar-title">
                    <div class="sidebar-title-line"></div>
                    <h3 class="h3-title">Categories</h3>
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
                      <Link href="javascript:void(0);">Morden</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!--Sidebar End--> */}
          </div>
        </div>
      </section>
    </section>
  );
};
export default Blogg;
