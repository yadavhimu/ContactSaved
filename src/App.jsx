import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import {AiFillPlusCircle} from "react-icons/ai"
import {collection } from "firebase/firestore";
const App = () => {
 const [contacts, setContact] = useState([]);

 useEffect(()=>{
    const getContacts = async () => {
        try{
          const contactsRef = collection(db, "Contacts");
          const contactsSnapshot = await getDocs(contacstRef);
          console.log(contactsSnapshot);
          const contactLists = contactsSnapshot.docs.map((doc) =>doc.data())
        }catch (error) {
            console.log(error);
        }
     };
     
    getContacts();
 },[]);

  return (
    <div className="mx-auto max-w-[380px] px-4">
      <Navbar />
     <div className="flex">
     <div className="relative flex flex-grow items-center">
        <FiSearch className="absolute text-3xl ml-4 text-white" />
        <input
          type="text"
          className=" ml-4 h-10 flex-grow rounded-md border pl-9 border-white bg-transparent text-white"
        />
      </div>
      <div>
        <AiFillPlusCircle className="text-5xl cursor-pointer text-white"/>
      </div>
     </div>
    </div>
  );
};

export default App;
