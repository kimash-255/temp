import Link from "next/link";

const RelatedServices = ({ services, slug }) => (
  <div className="recent-course-box">
    <div className="courses-sidebar-title">
      <h3 className="h3-title">Related Services</h3>
    </div>
    <ul>
      {services
        ?.filter((item) => item.slug !== slug)
        .slice(0, 4)
        .map((relatedService) => (
          <li key={relatedService?.slug}>
            <div className="recent-course-img">
              <img
                src={relatedService?.image}
                alt={relatedService?.title}
                style={{ width: "200px", height: "auto" }} // Adjust the width as needed
              />
            </div>

            <div className="recent-course-text">
              <Link href={`/${relatedService?.href}`}>
                <span>{relatedService?.title}</span>
                <p>{relatedService?.description}</p>
              </Link>
            </div>
          </li>
        ))}
    </ul>
  </div>
);

export default RelatedServices;
