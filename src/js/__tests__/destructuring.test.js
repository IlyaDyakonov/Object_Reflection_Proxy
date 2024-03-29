import { desc, character } from "../destructuring";

test("проверяем работу функции desc", () => {
    const answer = [
        {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
    },
    {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно'
    }
]

    expect(desc(character)).toEqual(answer);
});