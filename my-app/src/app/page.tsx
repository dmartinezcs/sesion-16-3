'use client'
import { useEffect, useState } from "react";
import ContainerButtonBack from "./components/ContainerButtonBack";



const MainPage = () => {
  const [showModal, setModal] = useState(false);

  return (
    <div>
      <h1>Nuestra página principal</h1>
      <button onClick={() => setModal(true)}>El boton para sacar el modal</button>

      {showModal && (
          <ContainerButtonBack setState={setModal}>
            {showModal}
            <h2>Titulo dentro de container, esto es el modal</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati dolor repellendus aut recusandae fuga? Alias saepe quisquam molestiae tenetur, veniam libero consequatur sequi voluptas id, iusto aliquid! Enim, nihil nisi?</p>
          </ContainerButtonBack>

      )}

    </div>
  )

}


export default MainPage;