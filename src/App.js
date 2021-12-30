import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";
import './App.css';

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  // initial value of current categories is set to commercial category
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // initial value of contactSelected is set to false to prevent contact form from showing initially
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
