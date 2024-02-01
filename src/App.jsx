import Layout from "components/Layout/Layout";
import AppBar from "components/AppBar/AppBar";
import TaskForm from "components/TaskForm/TaskForm";
import TaskList from "components/TaskList/TaskList";

const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};


export default App;



//--- 1. бібліотекa Redux - набір функцій для створення стора (сховища, store), роботи зі станом програми (state) та відправлення екшенів (дій, actions).
// Використовуючи Redux Toolkit - можна не додавати redux. !!!додається, коли необхідна функція combineReducers()
// npm install redux (необовязково)


// 2. Для використання React та Redux разом, необхідно додати до проекту бібліотеку React Redux. Це набір компонентів та хуків зв'язуючих компонентів React та Redux стор (store).
// npm install react-redux


// 3. import { Provider } from "react-redux";
//    ReactDOM.createRoot(document.getElementById("root")).render(
//      <Provider store={store}>
//        <App />
//      </Provider>);


// 4. встановлюємо бібліотеку, яка дозволить ініціалізувати логіку Redux DevTools та зв'язати її з розширенням в інструментах розробника.
// npm install @redux-devtools/extension


// 5. Redux Toolkit встановлюється як стандартний NPM пакет.
// npm install @reduxjs/toolkit


// 6. для написання логіки Redux та react - redux для зв'язку стора з компонентами.
// npm install @reduxjs/toolkit react-redux


// ---7. Якщо ініціалізуєте створення стартових файлів програми, використовуючи Create React App, без попередньо заготовленого шаблону проекту, як наприклад для домашніх робіт, у такому разі варто використовувати офіційний шаблон. Для цього команді npx create-react-app потрібно передати прапор --template зі значенням redux.
// npx create-react-app my-app --template redux





// actions.js - файл оголошення екшенів програми
// reducer.js - файл оголошення функцій-редюсерів для оновлення стану
// constants.js - файл для зберігання констант (наприклад значень фільтру статусу)
// selectors.js - файл оголошення функцій-селекторів
// store.js - файл створення стор Redux