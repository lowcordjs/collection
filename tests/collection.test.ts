import { Collection } from '../src';
interface Person {
    name: string;
    age: number;
}
const db = new Collection<string, Person>();

db.set('info', {
    age: 29,
    name: 'call me dager',
});

const searched = db.search((item) => item.age == 29);
console.log(searched);

db.map((item) => {
    console.log(item.name);
});

const filtered = db.filter((val) => val.age === 29);
console.log(filtered);
