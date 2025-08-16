import ContentLoader from 'react-content-loader';

const CalendarLoader = () => (
  <ContentLoader
    speed={2}
    width={1100}
    height={400}
    viewBox="0 0 1100 400"
    backgroundColor="#eaeced"
    foregroundColor="#ffffff"
  >
    {/* Top Headers */}
    <rect x="0" y="0" rx="3" ry="3" width="185" height="39" />
    <rect x="787" y="0" rx="3" ry="3" width="60" height="39" />
    <rect x="859" y="0" rx="3" ry="3" width="85" height="39" />
    <rect x="998" y="0" rx="3" ry="3" width="45" height="39" />
    <rect x="1055" y="0" rx="3" ry="3" width="45" height="39" />

    {/* Name of week days */}
    <rect x="58" y="69" rx="3" ry="3" width="40" height="18" />
    <rect x="215" y="69" rx="3" ry="3" width="40" height="18" />
    <rect x="372" y="69" rx="3" ry="3" width="40" height="18" />
    <rect x="529" y="69" rx="3" ry="3" width="40" height="18" />
    <rect x="686" y="69" rx="3" ry="3" width="40" height="18" />
    <rect x="843" y="69" rx="3" ry="3" width="40" height="18" />
    <rect x="1000" y="69" rx="3" ry="3" width="40" height="18" />

    {/* Horizontal lines */}
    <rect x="0" y="63" rx="3" ry="3" width="1100" height="2" />
    <rect x="0" y="91" rx="3" ry="3" width="1100" height="2" />
    <rect x="0" y="221" rx="3" ry="3" width="1100" height="2" />
    <rect x="0" y="351" rx="3" ry="3" width="1100" height="2" />

    {/* Vertical lines */}
    <rect x="0" y="63" rx="3" ry="3" width="2" height="400" />
    <rect x="156" y="63" rx="3" ry="3" width="2" height="400" />
    <rect x="313" y="63" rx="3" ry="3" width="2" height="400" />
    <rect x="470" y="63" rx="3" ry="3" width="2" height="400" />
    <rect x="627" y="63" rx="3" ry="3" width="2" height="400" />
    <rect x="784" y="63" rx="3" ry="3" width="2" height="400" />
    <rect x="941" y="63" rx="3" ry="3" width="2" height="400" />
    <rect x="1098" y="63" rx="3" ry="3" width="2" height="400" />
  </ContentLoader>
);

export default CalendarLoader;
