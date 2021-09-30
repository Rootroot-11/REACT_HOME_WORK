// есть API для вывода и добавления машин:
//
//     модель выглядит так
// {"id": 40,
//     "model": "seat",
//     "price": 2300,
//     "year": 2018}
// GET  http://<IP>/api/v1/cars получить массив всех машин
//     создать форму для добавления машинки
//
// POST http://<IP>/api/v1/cars записать новую машину в базу данных (обратите внимание что метод post, а не get нужно будет указывать в httpClient)
//     Валидация:
//         model максимальная длина 20 символов
// price минимум 0
// year мин 1990 мах 2021
//
// у вас должна быть форма для добавления машинки, и под ней должен быть адекватный вывод всех машин

import Carform from "./components/form/Form";
import Cars from "./components/cars/Cars";

export default function App() {
  return (
      <div>
        <Carform/>
        <Cars/>
      </div>
  );
};