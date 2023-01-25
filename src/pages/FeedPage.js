import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/coordinator";

function FeedPage() {

  const navigate = useNavigate();

  //armazenar itens no localStorage = localStorage.setItem("chave", item)
  //buscar o que está aramzenado = localStorage.getItem("chave")

  useEffect(() => {
    if(!localStorage.getItem("token")){
      goToLogin(navigate)
    };
  }, [])

  
  

  return (
    <main>
      <h1>Página de Feed</h1>
    </main>
  );
}

export default FeedPage;