import { mapState, StateTree, StoreDefinition, _MapStateReturn, _MapStateObjectReturn, GettersTree } from 'pinia';

export type mapStateWithArray<D> = D extends StoreDefinition<infer Id, infer S, infer G, infer A> ? 
(keys: Array<keyof S | keyof G>) => _MapStateReturn<S, G>
: never;

export declare function mapStateWithRecord<Id extends string, S extends StateTree, G extends GettersTree<S>, KeyMapper extends Record<string, keyof S | keyof G>> 
(keyMapper: KeyMapper): _MapStateObjectReturn<Id, S, G, A, KeyMapper>;