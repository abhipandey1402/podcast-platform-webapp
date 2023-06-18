import Header from "../components/Common/Header";
import CreatePodcastForm from "../components/StartAPodcast/CreatePodcastForm";

const CreateAPodcastPage = () => {
  return (
    <div>
      <Header />
      <div className="inputWrapper">
        <h1>Create A Podcast</h1>
        <CreatePodcastForm />
      </div>
    </div>
  );
};

export default CreateAPodcastPage;
