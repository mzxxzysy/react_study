// function App() {
//   return (
//     <div>
//       <Hello name="licat" />
//     </div>
//   );
// }

// function Hello(props) {
//   const name = props.name;
//   const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   const numComponentsArray = num.map((item) => (
//     <h1 key={item}>
//       안녕 {name} {item}호
//     </h1>
//   ));
//   return <>{numComponentsArray}</>;
// }

// export default App;

function App() {
  const productList = {
    products: [
      {
        title: "개발자 무릎 담요",
        price: 17500,
        id: 101,
      },
      {
        title: "Hack Your Life 개발자 노트북 파우치",
        price: 29000,
        id: 102,
      },
      {
        title: "우당탕탕 라이켓의 실험실 스티커북",
        price: 29000,
        id: 103,
      },
      {
        title: "버그를 Java라 버그잡는 개리씨 키링",
        price: 29000,
        id: 104,
      },
    ],
  };

  return (
    <>
      {productList.products.map((item, index) => (
        <li key={item.id}>
          <h1>
            {index + 1} {item.title}
          </h1>
          <p>{item.price}</p>
        </li>
      ))}
    </>
  );
}

export default App;
