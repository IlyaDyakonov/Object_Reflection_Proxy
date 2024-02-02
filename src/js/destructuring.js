export const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...'
            // <- обратите внимание, описание "засекречено"
        }
    ]
}

export function desc(mass) {
    const result = [];
    for (let i = 0; i < mass["special"].length; i++) {
        const object = mass["special"][i];
        let answer = {
            id: object.id,
            name: object.name,
            icon: object.icon,
            description: object.description
        }

        if (!('description' in object)) {
            answer.description = object.description || "Описание недоступно";
            result.push(answer);
        } else {
            result.push(answer);
        }
    }
        // console.log(result);
        return result;
}
