import AdminPanel from "./Components/AdminPanel";
import Footer from "./Components/Footer";
import Playing from "./Components/Playing";
import SongList from "./Components/SongList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import NoPage from "./Components/NoPage";
import ParentNav from "./Components/ParentNav";
import Login from "./Components/Login"
import { useRecoilState, atom } from "recoil";

function App() {
  // you have to re0define the atom here and the sharing componet
  const activeTrackUrl = atom({
    key: "activeUrl",
    default:{
      url:"",
      downloadUrl:""
    },
  });

  const [{url}] = useRecoilState(activeTrackUrl);

  return (
    <div className="App">
      <>
      {/* <AdminPanel/>  */}
        <BrowserRouter>
          <Routes>
          <Route exact path="/login/" element={<Login/>}/>
            <Route path="/" element={<ParentNav />}>
              <Route index element={<Home />} />
              <Route exact path="/song-list/" element={<SongList />} />
              <Route path={url} element={<Playing />} />
              <Route path={`/song-list/${url}`} element={<Playing />} />
              <Route path="/admin/" element={ <AdminPanel/> }/>
              <Route path="*" element={<NoPage />} />
              
            </Route>
          </Routes>
        </BrowserRouter>
        
      </>
      <br />
      <Footer />
    </div>
  );
}

export default App;
