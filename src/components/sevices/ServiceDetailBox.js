const ServiceDetailBox = ({ service }) => (
  <div className="course-detail-box">
    <h2 className="h2-title">{service?.title}</h2>
    <h6>{service?.description}</h6>
    <div className="course-detail-img">
      <img src={service?.image} alt={service?.title} />
    </div>
    <h3 className="h3-title">About this Service</h3>
    <p>{service?.content}</p>

    <div className="course-detail-point">
      <h3 className="h3-title">What we offer?</h3>
      <ul>
        {service?.features.map((feature, index) => (
          <li key={index}>
            <i className="fa fa-check-circle" aria-hidden="true"></i>
            <p>{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ServiceDetailBox;
