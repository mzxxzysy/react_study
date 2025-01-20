import { useState } from "react";

export function PetForm() {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");

  const [pets, setPets] = useState([
    { name: "belly", species: "cat", age: "5", id: 111 },
    { name: "lucy", species: "dog", age: "3", id: 112 },
    { name: "daisy", species: "rabbit", age: "2", id: 113 },
    { name: "molly", species: "cat", age: "6", id: 114 },
    { name: "meggy", species: "hamster", age: "1", id: 115 },
  ]);

  function handleSubmit(event) {
    event.preventDefault();
    setPets((prev) => {
      return prev.concat({ name, species, age, id: Date.now() });
    });
    setName("");
    setSpecies("");
    setAge("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>새로운 애완동물을 추가하세요!</legend>
          <label>
            <input
              type="text"
              placeholder="name"
              onChange={(event) => {
                return setName(event.target.value);
              }}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="species"
              onChange={(event) => {
                return setSpecies(event.target.value);
              }}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="age"
              onChange={(event) => {
                return setAge(event.target.value);
              }}
            />
          </label>
          <button>추가하기</button>
        </fieldset>
      </form>
      <ul>
        {pets.map((pet) => {
          return <Pet key={pet.id} name={pet.name} species={pet.species} age={pet.age} id={pet.id} />;
        })}
      </ul>
    </>
  );
}

function Pet(props) {
  return (
    <li>
      {props.name}는 {props.species}입니다. 그리고 {props.age}살 입니다.
    </li>
  );
}
