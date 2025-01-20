import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";
import { Modal } from "./components/modal/Modal";
import { useState } from "react";

function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Header />
      <Main modalOpen={setModalShow} />
      <Footer />
      {modalShow && <Modal modalOpen={setModalShow} />}
    </>
  );
}
export default App;
