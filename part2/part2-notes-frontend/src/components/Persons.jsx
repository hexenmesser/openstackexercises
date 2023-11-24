import Note from "./Note";

const Persons = ({ filteredPersons }) => {
    return (
      <>
        {filteredPersons.map((person) => (
          <Note key={person.id} note={person} />
        ))}
      </>
    );
  };

export default Persons;