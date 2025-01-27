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
        <h1>Loading..</h1>
        </>
    )
  }

  if (prop.myList.length === 0) {
    return (
        <>
        <h1>There are no animals here!</h1>
        </>
    )
  }

  return (
    <>
      <h1>&quot; I swear by my skidibi, I will goon thy &quot;</h1>

      <h1>Test title</h1>
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
      <form>
        <input type="text" />
      </form>
      <ul>{prop.myList.map((animal) => onlyF(animal))}</ul>
    </>
  );
}
