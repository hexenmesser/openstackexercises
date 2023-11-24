import { useState, useEffect } from "react";

import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
//  Wow! ...
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);

  const addNumber = (event) => {
    event.preventDefault();

    const existingPerson = persons.find((person) => person.name === newName);

    if (existingPerson) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = {
        id: persons.length + 1,
        name: newName,
        number: newNumber,
      };

      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  useEffect(() => {
    setFilteredPersons(
      persons.filter((person) =>
        person.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, persons]);
 
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <h2>add a new</h2>

      <PersonForm
        addNumber={addNumber}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
 
      <h2>Numbers</h2>

      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
