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

const searched = db.search((item: string) => item === 'info');
console.log(searched);

db.map((item: Person) => {
    console.log(item.name);
});

const filtered = db.filter((key: string) => key === 'info');
console.log(filtered);
