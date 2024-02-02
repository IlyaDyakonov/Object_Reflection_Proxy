export const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
}

export const listSorted = [
    'name',
    'level',
]

export function orderByProps(mass, listSorted) {
    const arrayNameLevel = [];
    const arrayOther = [];
    for (const object in mass) {
        let answer = {
            key: object,
            value: mass[object]
        };
        if (listSorted.includes(object)) {
            arrayNameLevel.push(answer);
            answer = {};
        } else {
            arrayOther.push(answer);
            answer = {};
            }
        }
        // Сортируем массив
        arrayOther.sort((a, b) => a.key < b.key ? -1 : 1)
        // Объединение двух массивов
        const arrayEnd = arrayNameLevel.concat(arrayOther);
        return arrayEnd;
        // console.log(arrayEnd);
}


// orderByProps(obj, listSorted);
