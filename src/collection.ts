/* eslint-disable no-unused-vars */
import { Errors } from './errors';
export class Collection<K, V> extends Map<K, V> {
    constructor() {
        super();
    }
    /**
     * Filter the data inside collection
     * then return the value of the key
     *
     * @param func The function that contains key and value filter
     * @example
     * ```ts
     * cache.filter(elm => elm.name === 'alex');
     * ```
     * @returns Collection
     */
    public filter(func: (value: V, key: K) => any): Collection<K, V> {
        if (typeof func !== 'function')
            throw new TypeError(Errors.functionParam);
        const db = new Collection<K, V>();
        
        for (const [key, value] of this) {
            func(value, key) ? db.set(key, value) : null;
        }
        return db;
    }
    /**
     * Searches for a element
     * @param func The function that contains key and value to search
     * @example
     * ```ts
     * cache.search(elm => elm.name === 'alex');
     * ```
     * 
     */
    public search(func: (value: V, key: K) => any): V | undefined {
        if (typeof func !== 'function')
            throw new TypeError(Errors.functionParam);
        for (const [key, value] of this) {
            if (func(value, key)) return value;
        }
        return undefined;
    }
    /**
     * Mapping the collection items
     * @param func The function of item
     * @example
     * ```ts
     * db.map((item) => item.name)
     * ```
     * 
     */
    public map(func: (value: V, key: K) => any): Collection<K, V> {
        if (typeof func !== 'function')
            throw new TypeError(Errors.functionParam);
        const mapRes = new Collection<K, V>();
        for (const [key, value] of this) {
            mapRes.set(key, func(value,key));
        }
        return mapRes;
    }
}