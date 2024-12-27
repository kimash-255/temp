import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <section>
      <section class="main-banner-in">
        <span class="shape-1 animate-this">
          <img src="assets/images/shape-1.png" alt="shape" />
        </span>
        <span class="shape-2 animate-this">
          <img src="assets/images/shape-2.png" alt="shape" />
        </span>
        <span class="shape-3 animate-this">
          <img src="assets/images/shape-3.png" alt="shape" />
        </span>
        <span class="shape-4 animate-this">
          <img src="assets/images/shape-4.png" alt="shape" />
        </span>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1 class="h1-title">Our Services</h1>
            </div>
          </div>
        </div>
      </section>

      <div class="main-banner-breadcrum">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="banner-breadcrum">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
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

      <section class="main-courses-in">
        <div class="container">
          <div class="row">
            {/* <!--sidebar Start--> */}
            <div class="col-lg-4">
              <div class="courses-in-side-bar">
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
                <div class="courses-sidebar-categories">
                  <div class="courses-sidebar-title">
                    <div class="sidebar-title-line"></div>
                    <h3 class="h3-title">Categories</h3>
                  </div>
                  <ul>
                    <li class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="art&design"
                      />
                      <label class="form-check-label" for="art&design">
                        Art & Design (10)
                      </label>
                    </li>
                    <li class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="business"
                      />
                      <label class="form-check-label" for="business">
                        Business (8)
                      </label>
                    </li>
                    <li class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="finance"
                      />
                      <label class="form-check-label" for="finance">
                        Finance (3)
                      </label>
                    </li>
                    <li class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="lifestyle"
                      />
                      <label class="form-check-label" for="lifestyle">
                        Lifestyle (20)
                      </label>
                    </li>
                    <li class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="marketing"
                      />
                      <label class="form-check-label" for="marketing">
                        Marketing (24)
                      </label>
                    </li>
                    <li class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="education"
                      />
                      <label class="form-check-label" for="education">
                        Education (5)
                      </label>
                    </li>
                  </ul>
                </div>
                <div class="courses-sidebar-price">
                  <div class="courses-sidebar-title">
                    <div class="sidebar-title-line"></div>
                    <h3 class="h3-title">Price Filter</h3>
                  </div>
                  <ul>
                    <li class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="free"
                      />
                      <label class="form-check-label" for="free">
                        {" "}
                        Free{" "}
                      </label>
                    </li>
                    <li class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="0-20"
                      />
                      <label class="form-check-label" for="0-20">
                        $0 - $10
                      </label>
                    </li>
                    <li class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="10-20"
                      />
                      <label class="form-check-label" for="10-20">
                        $10 - 20
                      </label>
                    </li>
                    <li class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="20-30"
                      />
                      <label class="form-check-label" for="20-30">
                        $20 - $30
                      </label>
                    </li>
                    <li class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="30-40"
                      />
                      <label class="form-check-label" for="30-40">
                        $30 - $40
                      </label>
                    </li>
                    <li class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="40-50"
                      />
                      <label class="form-check-label" for="40-50">
                        $40 - $50
                      </label>
                    </li>
                  </ul>
                </div>
                <div class="courses-sidebar-skill">
                  <div class="courses-sidebar-title">
                    <div class="sidebar-title-line"></div>
                    <h3 class="h3-title">Skill level</h3>
                  </div>
                  <ul>
                    <li class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="all"
                      />
                      <label class="form-check-label" for="all">
                        All Level
                      </label>
                    </li>
                    <li class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="beginner"
                      />
                      <label class="form-check-label" for="beginner">
                        Beginner
                      </label>
                    </li>
                    <li class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="intermediate"
                      />
                      <label class="form-check-label" for="intermediate">
                        Intermediate
                      </label>
                    </li>
                    <li class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="expert"
                      />
                      <label class="form-check-label" for="expert">
                        Expert
                      </label>
                    </li>
                  </ul>
                </div>
                <div class="courses-sidebar-rating">
                  <div class="courses-sidebar-title">
                    <div class="sidebar-title-line"></div>
                    <h3 class="h3-title">Star Rating</h3>
                  </div>
                  <ul>
                    <li class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="5star"
                      />
                      <label class="form-check-label star-edit" for="5star">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </label>
                    </li>
                    <li class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="4star"
                      />
                      <label class="form-check-label star-edit" for="4star">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </label>
                    </li>
                    <li class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="3star"
                      />
                      <label class="form-check-label star-edit" for="3star">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </label>
                    </li>
                    <li class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="2star"
                      />
                      <label class="form-check-label star-edit" for="2star">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </label>
                    </li>
                    <li class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="1star"
                      />
                      <label class="form-check-label star-edit" for="1star">
                        <i class="fa fa-star" aria-hidden="true"></i>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!--sidebar End--> */}
            {/* <!--Services List Start--> */}
            <div class="col-lg-8">
              <div class="main-courses-list-box">
                <div class="courses-list-style-box">
                  <div class="courses-list-show-box">
                    <Link href="javascript:void(0);">
                      <i class="fa fa-list-ul" aria-hidden="true"></i>
                      <span>Showing 1 - 3 of 80</span>
                    </Link>
                  </div>
                  <div class="courses-list-dropdown-box">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Default Sorting</option>
                      <option value="1">Stor By Popular</option>
                      <option value="2">Stor By Rating</option>
                      <option value="3">Stor By Latest</option>
                      <option value="4">Stor By Price : Low To High</option>
                      <option value="5">Stor By Price : High To Low</option>
                    </select>
                  </div>
                </div>
                <div class="courses-list-box">
                  <div class="row">
                    <div class="col-lg-6 col-md-6">
                      <div class="course-box">
                        <div class="course-img">
                          <img src="/assets/images/course-1.jpg" alt="course" />
                          <ul>
                            <li>
                              <Link href="#" class="course-tag-orange">
                                Business
                              </Link>
                            </li>
                            <li>
                              <Link href="#" class="course-tag-blue">
                                Marketing
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div class="course-content">
                          <Link href="/services/1">
                            <h3 class="h3-title">Digital Marketing</h3>
                          </Link>
                          <div class="course-instructor-review">
                            <div class="course-instructor-box">
                              <div class="course-instructor-img">
                                <img
                                  src="assets/images/course-instructor-img.jpg"
                                  class="rounded-circle"
                                  alt="instructor"
                                />
                              </div>
                              <Link href="/contact">Lillian Wals</Link>
                            </div>
                            <div class="course-review-box">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <p>5.0 (2k)</p>
                            </div>
                          </div>
                          <div class="course-line"></div>
                          <div class="course-price-student-box">
                            <div class="course-price-box">
                              <span>$50.00</span>
                            </div>
                            <div class="course-student-box">
                              <div class="course-student-icon">
                                <img
                                  src="assets/images/student-icon.png"
                                  alt="icon"
                                />
                              </div>
                              <p>600k</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="course-box">
                        <div class="course-img">
                          <img src="assets/images/course-2.jpg" alt="course" />
                          <ul>
                            <li>
                              <Link href="#" class="course-tag-orange">
                                Business
                              </Link>
                            </li>
                            <li>
                              <Link href="#" class="course-tag-blue">
                                Marketing
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div class="course-content">
                          <a href="services/2">
                            <h3 class="h3-title">
                              Search Engine Optimization (SEO)
                            </h3>
                          </a>
                          <div class="course-instructor-review">
                            <div class="course-instructor-box">
                              <div class="course-instructor-img">
                                <img
                                  src="assets/images/course-instructor-img.jpg"
                                  class="rounded-circle"
                                  alt="instructor"
                                />
                              </div>
                              <Link href="/contact">Lillian Wals</Link>
                            </div>
                            <div class="course-review-box">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <p>5.0 (2k)</p>
                            </div>
                          </div>
                          <div class="course-line"></div>
                          <div class="course-price-student-box">
                            <div class="course-price-box">
                              <span>$50.00</span>
                            </div>
                            <div class="course-student-box">
                              <div class="course-student-icon">
                                <img
                                  src="assets/images/student-icon.png"
                                  alt="icon"
                                />
                              </div>
                              <p>600k</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="course-box">
                        <div class="course-img">
                          <img src="assets/images/course-3.jpg" alt="course" />
                          <ul>
                            <li>
                              <Link href="#" class="course-tag-orange">
                                Business
                              </Link>
                            </li>
                            <li>
                              <Link href="#" class="course-tag-blue">
                                Marketing
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div class="course-content">
                          <Link href="/service-detail">
                            <h3 class="h3-title">Social Media Management</h3>
                          </Link>
                          <div class="course-instructor-review">
                            <div class="course-instructor-box">
                              <div class="course-instructor-img">
                                <img
                                  src="assets/images/course-instructor-img.jpg"
                                  class="rounded-circle"
                                  alt="instructor"
                                />
                              </div>
                              <Link href="/contact">Lillian Wals</Link>
                            </div>
                            <div class="course-review-box">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <p>5.0 (2k)</p>
                            </div>
                          </div>
                          <div class="course-line"></div>
                          <div class="course-price-student-box">
                            <div class="course-price-box">
                              <span>$50.00</span>
                            </div>
                            <div class="course-student-box">
                              <div class="course-student-icon">
                                <img
                                  src="assets/images/student-icon.png"
                                  alt="icon"
                                />
                              </div>
                              <p>600k</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="course-box">
                        <div class="course-img">
                          <img src="assets/images/course-4.jpg" alt="course" />
                          <ul>
                            <li>
                              <Link href="#" class="course-tag-orange">
                                Business
                              </Link>
                            </li>
                            <li>
                              <Link href="#" class="course-tag-blue">
                                Marketing
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div class="course-content">
                          <Link href="/contact">
                            <h3 class="h3-title">Social Media Management</h3>
                          </Link>
                          <div class="course-instructor-review">
                            <div class="course-instructor-box">
                              <div class="course-instructor-img">
                                <img
                                  src="assets/images/course-instructor-img.jpg"
                                  class="rounded-circle"
                                  alt="instructor"
                                />
                              </div>
                              <Link href="/contact">Lillian Wals</Link>
                            </div>
                            <div class="course-review-box">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <p>5.0 (2k)</p>
                            </div>
                          </div>
                          <div class="course-line"></div>
                          <div class="course-price-student-box">
                            <div class="course-price-box">
                              <span>$50.00</span>
                            </div>
                            <div class="course-student-box">
                              <div class="course-student-icon">
                                <img
                                  src="assets/images/student-icon.png"
                                  alt="icon"
                                />
                              </div>
                              <p>600k</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="course-box">
                        <div class="course-img">
                          <img src="assets/images/course-5.jpg" alt="course" />
                          <ul>
                            <li>
                              <Link href="#" class="course-tag-orange">
                                Business
                              </Link>
                            </li>
                            <li>
                              <Link href="#" class="course-tag-blue">
                                Marketing
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div class="course-content">
                          <Link href="/services/5">
                            <h3 class="h3-title">
                              Website Design & Development
                            </h3>
                          </Link>
                          <div class="course-instructor-review">
                            <div class="course-instructor-box">
                              <div class="course-instructor-img">
                                <img
                                  src="assets/images/course-instructor-img.jpg"
                                  class="rounded-circle"
                                  alt="instructor"
                                />
                              </div>
                              <Link href="/contact">Lillian Wals</Link>
                            </div>
                            <div class="course-review-box">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <p>5.0 (2k)</p>
                            </div>
                          </div>
                          <div class="course-line"></div>
                          <div class="course-price-student-box">
                            <div class="course-price-box">
                              <span>$50.00</span>
                            </div>
                            <div class="course-student-box">
                              <div class="course-student-icon">
                                <img
                                  src="assets/images/student-icon.png"
                                  alt="icon"
                                />
                              </div>
                              <p>600k</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="course-box">
                        <div class="course-img">
                          <img src="assets/images/course-6.jpg" alt="course" />
                          <ul>
                            <li>
                              <Link href="#" class="course-tag-orange">
                                Business
                              </Link>
                            </li>
                            <li>
                              <Link href="#" class="course-tag-blue">
                                Marketing
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div class="course-content">
                          <a href="/services/6">
                            <h3 class="h3-title">
                              Letterheads & Business Cards
                            </h3>
                          </a>
                          <div class="course-instructor-review">
                            <div class="course-instructor-box">
                              <div class="course-instructor-img">
                                <img
                                  src="assets/images/course-instructor-img.jpg"
                                  class="rounded-circle"
                                  alt="instructor"
                                />
                              </div>
                              <Link href="/contact">Lillian Wals</Link>
                            </div>
                            <div class="course-review-box">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <p>5.0 (2k)</p>
                            </div>
                          </div>
                          <div class="course-line"></div>
                          <div class="course-price-student-box">
                            <div class="course-price-box">
                              <span>$50.00</span>
                            </div>
                            <div class="course-student-box">
                              <div class="course-student-icon">
                                <img
                                  src="assets/images/student-icon.png"
                                  alt="icon"
                                />
                              </div>
                              <p>600k</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="course-box">
                        <div class="course-img">
                          <img src="assets/images/course-1.jpg" alt="course" />
                          <ul>
                            <li>
                              <Link href="#" class="course-tag-orange">
                                Business
                              </Link>
                            </li>
                            <li>
                              <Link href="#" class="course-tag-blue">
                                Marketing
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div class="course-content">
                          <a href="/services/1">
                            <h3 class="h3-title">Portfolio Design</h3>
                          </a>
                          <div class="course-instructor-review">
                            <div class="course-instructor-box">
                              <div class="course-instructor-img">
                                <img
                                  src="assets/images/course-instructor-img.jpg"
                                  class="rounded-circle"
                                  alt="instructor"
                                />
                              </div>
                              <a href="instructor-detail.html">Lillian Wals</a>
                            </div>
                            <div class="course-review-box">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <p>5.0 (2k)</p>
                            </div>
                          </div>
                          <div class="course-line"></div>
                          <div class="course-price-student-box">
                            <div class="course-price-box">
                              <span>$50.00</span>
                            </div>
                            <div class="course-student-box">
                              <div class="course-student-icon">
                                <img
                                  src="assets/images/student-icon.png"
                                  alt="icon"
                                />
                              </div>
                              <p>600k</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="course-box">
                        <div class="course-img">
                          <img src="assets/images/course-2.jpg" alt="course" />
                          <ul>
                            <li>
                              <Link href="#" class="course-tag-orange">
                                Business
                              </Link>
                            </li>
                            <li>
                              <Link href="#" class="course-tag-blue">
                                Marketing
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div class="course-content">
                          <a href="/services/2">
                            <h3 class="h3-title">Graphics Design</h3>
                          </a>
                          <div class="course-instructor-review">
                            <div class="course-instructor-box">
                              <div class="course-instructor-img">
                                <img
                                  src="assets/images/course-instructor-img.jpg"
                                  class="rounded-circle"
                                  alt="instructor"
                                />
                              </div>
                              <a href="instructor-detail.html">Lillian Wals</a>
                            </div>
                            <div class="course-review-box">
                              <i class="fa fa-star" aria-hidden="true"></i>
                              <p>5.0 (2k)</p>
                            </div>
                          </div>
                          <div class="course-line"></div>
                          <div class="course-price-student-box">
                            <div class="course-price-box">
                              <span>$50.00</span>
                            </div>
                            <div class="course-student-box">
                              <div class="course-student-icon">
                                <img
                                  src="assets/images/student-icon.png"
                                  alt="icon"
                                />
                              </div>
                              <p>600k</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="courses-pagination">
                      <a href="javascript:void(0);" class="pagination-arrow">
                        <i class="fa fa-angle-left" aria-hidden="true"></i>
                      </a>
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
                </div>
              </div>
            </div>

            {/* <!--Services List End--> */}
          </div>
        </div>
      </section>
    </section>
  );
};
export default Services;
