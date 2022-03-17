
# Инструкция для пользователя

Разработано только для клиптовалют Bitcoin.

В поле ввода "Еnter the сurrency address"
вводится адрес криптовалюты.
Сохраняется по кнопке "Save Address".
Сохранится любой текст и цифры.
Пустая строка не сохраняется.

Примеры существующих адресов криптовалюты Bitcoin:
  3BChPAXan1Sh8qxFhEcQrtxP9kHazSMrJp
  3J7cUjBZxvGRCwFBz3q23zAsnhFfZrDSSU
  1M9jBgjJKwRhrkSuoLrpeu6FnmrCdY3xWt
  35tdmyP1C9xoSoaXVqKq6VV64sPyhTQvQa
  bc1qmh8p08pdt967rd9ytrh55dek3l2vuxprzma4zg

При сохранении хотя бы одного адреса, выводится список адресов.

Ненужный или неверный адрес можно удалить по кнопке "Delete"

Начальные балансы адресов нулевые.
По кнопке "Show balance" показываются балансы адресов на данный момент.
Если один или несколько адресов указано некорректо, то балансы не запросятся.
Выведется алерт ошибки: "Impossible. One or more addresses are specified incorrectly."
Но все записанные адреса сохранятся. Изменение адреса возможно только через удаление и добавление нового.

Список адресов с балансами(в том числе нулевыми) можно сохранить в файл CSV по кнопке "Export to CSV"
Файл сохраняется автоматически, с именем "My_Crypto_Balance.csv".


## Для разработчиков

API запроса баланса: https://blockchain.info/balance?active=$address
Идет один запрос на весь стейт. В $address записываются все адреса стейта через символ |

Если какой-то из адресов указан неверно, в ответ запроса идет ошибка, балансы не приходят.
Ошибка обрабатывается пока простым алертом. Стейт сохраняется прежний.

Папка assets пустая, так как там планируется прописать стили и переменные стилей.
Пока все стили в верхнем index.scss


### Планируемы доработки

1. Обработка ошибки через кастомный Alert.
   Возможно, расширение стейта, добавив для апи.
2. Прописать стили через переменные. Адаптив.
3. Компонент для вывода строки списка(одного счета).
4. Оптимизация импорта компонентов.
