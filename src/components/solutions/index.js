import Image from "next/image";
import Link from "next/link";

const Solutions = () => {
  return (
    <section className="main-course-category">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="course-category-title">
              <h2 className="h2-subtitle">Our Solutions</h2>
              <h2 className="h2-title">Explore Our Products</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-content">
                <Link href="/services">
                  <h3 className="h3-title">Logo Design</h3>
                </Link>
                <p>Crafting unique brand identities.</p>
              </div>
              <div className="course-category-icon">
                <Image
                  className="dis-yes"
                  src="/assets/images/course-category-icon-1.png"
                  alt="Logo Design Icon"
                  width={50}
                  height={50}
                />
                <Image
                  className="dis-no"
                  src="/assets/images/course-category-icon-1-w.png"
                  alt="Logo Design Icon (White)"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-content">
                <Link href="/services">
                  <h3 className="h3-title">Portfolio Design</h3>
                </Link>
                <p>Showcasing creativity effectively.</p>
              </div>
              <div className="course-category-icon">
                <Image
                  className="dis-yes"
                  src="/assets/images/course-category-icon-2.png"
                  alt="Portfolio Design Icon"
                  width={50}
                  height={50}
                />
                <Image
                  className="dis-no"
                  src="/assets/images/course-category-icon-2-w.png"
                  alt="Portfolio Design Icon (White)"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-content">
                <Link href="/services">
                  <h3 className="h3-title">Letterheads</h3>
                </Link>
                <p>Professional and branded stationery.</p>
              </div>
              <div className="course-category-icon">
                <Image
                  className="dis-yes"
                  src="/assets/images/course-category-icon-3.png"
                  alt="Letterhead Icon"
                  width={50}
                  height={50}
                />
                <Image
                  className="dis-no"
                  src="/assets/images/course-category-icon-3-w.png"
                  alt="Letterhead Icon (White)"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-content">
                <Link href="/services">
                  <h3 className="h3-title">Business Cards</h3>
                </Link>
                <p>Make lasting first impressions.</p>
              </div>
              <div className="course-category-icon">
                <Image
                  className="dis-yes"
                  src="/assets/images/course-category-icon-4.png"
                  alt="Business Card Icon"
                  width={50}
                  height={50}
                />
                <Image
                  className="dis-no"
                  src="/assets/images/course-category-icon-4-w.png"
                  alt="Business Card Icon (White)"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-content">
                <Link href="/services">
                  <h3 className="h3-title">Brochures</h3>
                </Link>
                <p>Informative and visually engaging.</p>
              </div>
              <div className="course-category-icon">
                <Image
                  className="dis-yes"
                  src="/assets/images/course-category-icon-5.png"
                  alt="Brochure Icon"
                  width={50}
                  height={50}
                />
                <Image
                  className="dis-no"
                  src="/assets/images/course-category-icon-5-w.png"
                  alt="Brochure Icon (White)"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box">
              <div className="course-category-content">
                <Link href="/services">
                  <h3 className="h3-title">Flyers & Invites</h3>
                </Link>
                <p>Engaging designs.</p>
              </div>
              <div className="course-category-icon">
                <Image
                  className="dis-yes"
                  src="/assets/images/course-category-icon-6.png"
                  alt="Flyer & Invite Icon"
                  width={50}
                  height={50}
                />
                <Image
                  className="dis-no"
                  src="/assets/images/course-category-icon-6-w.png"
                  alt="Flyer & Invite Icon (White)"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Solutions;
