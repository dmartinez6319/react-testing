export default function Greeting(prop) {
  // To use JS syntax inside JSX wrap it in braces {} and it is automatically returned
  // Return everything wrapped in a fragment or div <>
  // Use escape key &; to add special characters such as quotes
  // prop is everything passed through by the parent component and is accessed like an object with dot operator

//   const onlyF = (animal) =>
//     animal.indexOf("F") >= 0 ? <li key={animal}>{animal} </li> : null;

  const onlyF = (animal) =>
    animal.indexOf("F") >= 0 && <li key={animal}>{animal} </li>;



  if (!prop.myList) {
    return (
        <>
        <h3>Loading..</h3>
        <hr />
        </>
    )
  }

  if (prop.myList.length === 0) {
    return (
        <>
        <h3>There are no animals here!</h3>
        <hr />
        </>
    )
  }

  return (
    <>
      <h3>&quot; {prop.message} &quot;</h3>

      <ul>{prop.myList.map((animal) => onlyF(animal))}</ul>
      <hr />
    </>
  );
}
