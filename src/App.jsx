import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function App() {
   const [searchParams] = useSearchParams();
   const name = searchParams.get("name") || "Recruto";
   const message = searchParams.get("message") || "Давай дружить";

   const navigate = useNavigate();

   const [formName, setFormName] = useState("");
   const [formMessage, setFormMessage] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();

      // Формируем query-строку
      const params = new URLSearchParams();
      if (formName) params.set("name", formName);
      if (formMessage) params.set("message", formMessage);

      // Переходим по новому URL
      navigate(`/?${params.toString()}`);
   };

   return (
      <div className="App">
         <header className="App-header">
            <h1>
               Hello {name}! {message}
            </h1>
         </header>

         <main className="App-main">
            <form onSubmit={handleSubmit}>
               <label>
                  Name:
                  <input
                     type="text"
                     value={formName}
                     onChange={(e) => setFormName(e.target.value)}
                     placeholder="Введите имя"
                  />
               </label>
               <br />

               <label>
                  Message:
                  <input
                     type="text"
                     value={formMessage}
                     onChange={(e) => setFormMessage(e.target.value)}
                     placeholder="Введите сообщение"
                  />
               </label>
               <br />

               <button type="submit">Показать приветствие</button>
            </form>
         </main>
      </div>
   );
}

export default App;
