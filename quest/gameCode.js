var event, ok, userHistory = {}
    , historyCheck;
do { //Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);
if (event == 1) {//создаем объект с выбором игрока
    userHistory.h1 = works.a00 + works.a1;
}
else if (event == 2) {
    userHistory.h1 = works.a00 + works.a2;
}
switch (event) {
case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
    do {
        ok = false;
        event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры\n' + '-2 - история игры');
        if (event == -2) {//даем игроку выбрать сохранение
            historyCheck = prompt('Выберите номер действия: ' + Object.keys(userHistory)).toLowerCase();
            if (Object.keys(userHistory).includes(historyCheck)) {
                for (var key in userHistory) {//выводим сохранение
                    if (key == historyCheck) {
                        alert(userHistory[key]);
                    }
                }
            }
            else {
                alert('Введен неверный номер действия');
            }
        }
        else if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(works.b0, event);
        }
    } while (!ok);
    if (event == 1) {
        userHistory.h2 = works.b00 + works.b1;
    }
    else if (event == 2) {
        userHistory.h2 = works.b00 + works.b2;
    }
    switch (event) {
    case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
        do {
            ok = false;
            event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры\n' + '-2 - история игры');
            if (event == -2) {
                historyCheck = prompt('Выберите номер действия: ' + Object.keys(userHistory)).toLowerCase();
                if (Object.keys(userHistory).includes(historyCheck)) {
                    for (var key in userHistory) {
                        if (key == historyCheck) {
                            alert(userHistory[key]);
                        }
                    }
                }
                else {
                    alert('Введен неверный номер действия');
                }
            }
            else if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.d0, event);
            }
        } while (!ok);
        if (event == 1) {
            userHistory.h3 = works.d00 + works.d1;
        }
        else if (event == 2) {
            userHistory.h3 = works.d00 + works.d2;
        }
        break;
    case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
        do {
            ok = false;
            event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры\n' + '-2 - история игры');
            if (event == -2) {
                historyCheck = prompt('Выберите номер действия: ' + Object.keys(userHistory)).toLowerCase();
                if (Object.keys(userHistory).includes(historyCheck)) {
                    for (var key in userHistory) {
                        if (key == historyCheck) {
                            alert(userHistory[key]);
                        }
                    }
                }
                else {
                    alert('Введен неверный номер действия');
                }
            }
            else if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.d0, event);
            }
        } while (!ok);
        if (event == 1) {
            userHistory.h3 = works.d00 + works.d1;
        }
        else if (event == 2) {
            userHistory.h3 = works.d00 + works.d2;
        }
        break;
    case -1: // Второе действие
        break;
    default:
        alert('Ошибка');
    }
    break;
case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
    do {
        ok = false;
        event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры\n' + '-2 - история игры');
        if (event == -2) {
            historyCheck = prompt('Выберите номер действия: ' + Object.keys(userHistory)).toLowerCase();
            if (Object.keys(userHistory).includes(historyCheck)) {
                for (var key in userHistory) {
                    if (key == historyCheck) {
                        alert(userHistory[key]);
                    }
                }
            }
            else {
                alert('Введен неверный номер действия');
            }
        }
        else if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(works.c0, event);
        }
    } while (!ok);
    if (event == 1) {
        userHistory.h2 = works.c00 + works.c1;
    }
    else if (event == 2) {
        userHistory.h2 = works.c00 + works.c2;
    }
    switch (event) {
    case 1: // Второе действие
        do {
            ok = false;
            event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры\n' + '-2 - история игры');
            if (event == -2) {
                historyCheck = prompt('Выберите номер действия: ' + Object.keys(userHistory)).toLowerCase();
                if (Object.keys(userHistory).includes(historyCheck)) {
                    for (var key in userHistory) {
                        if (key == historyCheck) {
                            alert(userHistory[key]);
                        }
                    }
                }
                else {
                    alert('Введен неверный номер действия');
                }
            }
            else if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.d0, event);
            }
        } while (!ok);
        if (event == 1) {
            userHistory.h3 = works.d00 + works.d1;
        }
        else if (event == 2) {
            userHistory.h3 = works.d00 + works.d2;
        }
        break;
    case 2: // Второе действие
        do {
            ok = false;
            event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры\n' + '-2 - история игры');
            if (event == -2) {
                historyCheck = prompt('Выберите номер действия: ' + Object.keys(userHistory)).toLowerCase();
                if (Object.keys(userHistory).includes(historyCheck)) {
                    for (var key in userHistory) {
                        if (key == historyCheck) {
                            alert(userHistory[key]);
                        }
                    }
                }
                else {
                    alert('Введен неверный номер действия');
                }
            }
            else if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.d0, event);
            }
        } while (!ok);
        if (event == 1) {
            userHistory.h3 = works.d00 + works.d1;
        }
        else if (event == 2) {
            userHistory.h3 = works.d00 + works.d2;
        }
        break;
    case -1: // Второе действие
        break;
    default:
        alert('Ошибка');
    }
    break;
case -1: // Первое действие
    break;
default:
    alert('Ошибка');
}
alert('Спасибо за игру');
//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}