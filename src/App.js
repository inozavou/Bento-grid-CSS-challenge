import "./styles/App.css";
import "./styles/createPost.css";
import "./styles/scheduleToSocialMedia.css";
import "./styles/fasterAudience.css";
import "./styles/growFollowers.css";
import "./styles/maintain.css";
import "./styles/manageAccounts.css";
import "./styles/socialMedia.css";
import "./styles/writeYourContent.css";

import CreatePost from "./CreatePost.jsx";
import SocialMedia from "./SocialMedia.jsx";
import ScheduleToSocial from "./ScheduleToSocial.jsx";
import WriteYourContent from "./WriteYourContent.jsx";
import ManageAccounts from "./ManageAccounts.jsx";
import Maintain from "./Maintain.jsx";
import FasterAudience from "./FasterAudience.jsx";
import GrowFollowers from "./GrowFollowers.jsx";

function App() {
  return (
    <div className="App">
      <div className="background-app">
        <div className="app-container">
          <div className="grid-container">
            <CreatePost />
            <SocialMedia />
            <ScheduleToSocial />
            <WriteYourContent />
            <div className="grouped-four">
              <ManageAccounts />
              <Maintain />
              <FasterAudience />
              <GrowFollowers />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
