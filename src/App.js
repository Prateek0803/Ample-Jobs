import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import { Box, CircularProgress } from "@material-ui/core";
import FilterBar from "./components/FitlerBar/FilterBar";
import JobCards from "./components/JobCards/JobCards";
import NewJobModal from "./components/NewJobModal/NewJobModal";
import { firestore, app } from "./Firebase/config";
function App() {
  const [show, setShow] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [load, setLoad] = useState(true);

  const fetchJobs = async () => {
    setLoad(true);
    const req = await firestore
      .collection("jobs")
      .orderBy("postedOn", "desc")
      .get();
    const reqRes = req.docs.map((job) => ({ ...job.data(), id: job.id }));
    setJobs(reqRes);
    setLoad(false);
  };

  const fetchJobsCustom = async (jobSearch) => {
    setLoad(true);
    const req = await firestore
      .collection("jobs")
      .orderBy("postedOn", "desc")
      .where("location", "==", jobSearch.location)
      .where("type", "==", jobSearch.type)
      .get();
    const reqRes = req.docs.map((job) => ({ ...job.data(), id: job.id }));
    setJobs(reqRes);
    setLoad(false);
  };

  const postJob = async (jobInfo) => {
    await firestore.collection("jobs").add({
      ...jobInfo,
      postedOn: app.firestore.FieldValue.serverTimestamp(),
    });
    fetchJobs();
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="App">
      <Header showModal={() => setShow(true)} />
      <FilterBar fetchJobsCustom={fetchJobsCustom} />

      {load ? (
        <Box mt={2} display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        jobs.map((job) => <JobCards key={job.id} {...job} />)
      )}

      <NewJobModal
        show={show}
        showModal={() => setShow(false)}
        postJob={postJob}
      />
    </div>
  );
}
export default App;
