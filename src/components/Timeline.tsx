import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import "../css/timeline.css";

const Timeline: React.FC = () => {
  return (
    <div className="timeline_container">
      <div className="timeline_item">
        {timeline.map((item, index) => {
          return (
            <TimelineItem
              key={index}
              title={item.title}
              company={item.company}
              companyUrl={item.companyUrl}
              location={item.location}
              duration={item.duration}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
