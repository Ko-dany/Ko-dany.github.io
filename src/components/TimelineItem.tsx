import "../css/timelineitem.css";

interface TimelineItemProps {
  title: string;
  company: string;
  companyUrl: string;
  location: string;
  duration: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  companyUrl,
  location,
  duration,
  description,
}) => {
  return (
    <ol className="timeline_list">
      <li className="timeline_list_item">
        <div className="timeline_circle" />
        <div className="timeline_content">
          <div className="timeline_sub_title">
            <div>
              <span className="timeline_title">{title}</span>
              <div className="timeline_company">
                <a
                  className="company_link "
                  href={companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {company}
                </a>
                <span>{` - ${location}`}</span>
              </div>
            </div>
            <div className="timeline_duration">{duration}</div>
          </div>
          <p className="timeline_des">{description}</p>
        </div>
      </li>
    </ol>
  );
};

export default TimelineItem;
