const PersonForm = ({
    addNumber,
    newName,
    setNewName,
    newNumber,
    setNewNumber,
  }) => {
    return (
      <>
        <form onSubmit={addNumber}>
          <div>
            name:{" "}
            <input value={newName} onChange={(e) => setNewName(e.target.value)} />
            <br />
            number:{" "}
            <input
              value={newNumber}
              onChange={(e) => setNewNumber(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </>
    );
  };

export default PersonForm;