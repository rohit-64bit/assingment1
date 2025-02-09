import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { onboardingSteps } from "../services/Constants";



const ClientOnboardingTimeline = () => {
    return (
        <VerticalTimeline>
            {onboardingSteps.map((step, index) => (
                <VerticalTimelineElement
                    key={index}
                    className="vertical-timeline-element--work"
                    date={step.date}
                    contentStyle={{
                        background: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "#fff",
                        boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.1)",
                        borderRadius: "1rem",
                        padding: "20px",
                    }}
                    contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.2)" }}
                    iconStyle={{
                        background: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)",
                        color: "#fff",
                        display: "flex",
                        fontSize: "24px",
                        borderRadius: "50%",
                        width: "60px",
                        height: "60px",
                    }}
                    icon={step.icon}
                >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{step.description}</p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
};

export default ClientOnboardingTimeline;
