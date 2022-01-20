import UserProfile from "./hoc/UserProfile";
import CourseDetails from './hoc/CourseDetails';

function App() {
  return (
    <div className="container">
      <hr />
      <h1>React - Mini-Bytes</h1>
      <hr />


      <UserProfile />
      <br />
      <CourseDetails />



    </div>
  );
}

export default App;
