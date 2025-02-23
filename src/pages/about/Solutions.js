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
              <h2 className="h2-title">Our Services Include</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box-1">
              <div className="course-category-content">
                <Link href="/services/graphic-design">
                  <h3 className="h3-title">Branding & Graphic Design</h3>
                </Link>
                <p>
                  From logos to marketing materials, we create stunning,
                  visually compelling designs that reflect your brand&apos;s
                  identity and values. We ensure your brand speaks to your
                  audience in the most impactful way possible.
                </p>
              </div>
              <div className="course-category-icon">
                <Image
                  className="dis-yes"
                  src="/assets/images/mslabdesigns-graphic-design.png"
                  alt="Graphic Design Icon"
                  width={50}
                  height={50}
                />
                <Image
                  className="dis-no"
                  src="/assets/images/mslabdesigns-graphic-design-w.png"
                  alt="Graphic Design Icon (White)"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box-1">
              <div className="course-category-content">
                <Link href="/services/website-development">
                  <h3 className="h3-title">Website Design</h3>
                </Link>
                <p>
                  We craft user-friendly, beautifully designed websites that not
                  only look great but also provide a seamless digital
                  experience. Our designs are tailored to enhance your online
                  presence and boost engagement.
                </p>
              </div>
              <div className="course-category-icon">
                <Image
                  className="dis-yes"
                  src="/assets/images/mslabdesigns-web-dev.png"
                  alt="Website Design Icon"
                  width={50}
                  height={50}
                />
                <Image
                  className="dis-no"
                  src="/assets/images/mslabdesigns-web-dev-w.png"
                  alt="Website Design Icon (White)"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box-1">
              <div className="course-category-content">
                <Link href="/services/virtual-assistant">
                  <h3 className="h3-title">Virtual Assistance</h3>
                </Link>
                <p>
                  Beyond design, we offer virtual assistance services to help
                  streamline your operations, manage your administrative tasks,
                  and keep your business running smoothly.
                </p>
              </div>
              <div className="course-category-icon">
                <Image
                  className="dis-yes"
                  src="/assets/images/mslabdesigns-virtual-assistant.png"
                  alt="Virtual Assistance Icon"
                  width={50}
                  height={50}
                />
                <Image
                  className="dis-no"
                  src="/assets/images/mslabdesigns-virtual-assistant-w.png"
                  alt="Virtual Assistance Icon (White)"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box-1">
              <div className="course-category-content">
                <Link href="/services/graphic-design-classes">
                  <h3 className="h3-title">Graphic Design Classes</h3>
                </Link>
                <p>
                  Whether you&apos;re a beginner or an experienced designer, we
                  offer comprehensive graphic design classes to help you sharpen
                  your skills and expand your creative potential.
                </p>
              </div>
              <div className="course-category-icon">
                <Image
                  className="dis-yes"
                  src="/assets/images/mslabdesigns-design-classes.png"
                  alt="Graphic Design Classes Icon"
                  width={50}
                  height={50}
                />
                <Image
                  className="dis-no"
                  src="/assets/images/mslabdesigns-design-classes-w.png"
                  alt="Graphic Design Classes Icon (White)"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box-1">
              <div className="course-category-content">
                <Link href="/services/erp-systems">
                  <h3 className="h3-title">ERP System Design</h3>
                </Link>
                <p>
                  We also specialize in designing custom ERP (Enterprise
                  Resource Planning) systems to help businesses streamline their
                  processes, improve efficiency, and integrate their operations
                  seamlessly.
                </p>
              </div>
              <div className="course-category-icon">
                <Image
                  className="dis-yes"
                  src="/assets/images/mslabdesigns-digital-marketing.png"
                  alt="Digital Marketing Icon"
                  width={50}
                  height={50}
                />
                <Image
                  className="dis-no"
                  src="/assets/images/mslabdesigns-digital-marketing-w.png"
                  alt="Digital Marketing Icon (White)"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="course-category-box-1">
              <div className="course-category-content">
                <Link href="/services">
                  <h3 className="h3-title">Social Media</h3>
                </Link>
                <p>
                  We craft engaging content and strategically manage your social
                  media to boost brand presence, audience engagement, and
                  business growth, driving visibility and conversions.
                </p>
              </div>
              <div className="course-category-icon">
                <Image
                  className="dis-yes"
                  src="/assets/images/mslabdesigns-social-media.png"
                  alt="Social Media Icon"
                  width={70}
                  height={50}
                />
                <Image
                  className="dis-no"
                  src="/assets/images/mslabdesigns-social-media.png"
                  alt="Social Media Icon (White)"
                  width={70}
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
