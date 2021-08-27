import { mapState, StateTree, StoreDefinition, _MapStateReturn, _MapStateObjectReturn, GettersTree, Store } from 'pinia';
import { useUserStore, storeDefinition, mapUserStateWithParamAndReturns } from './user-store';

type UserStoreType = typeof useUserStore;

export type mapStateWithArray<D> = D extends StoreDefinition<infer Id, infer S, infer G, infer A> ? 
(keys: Array<keyof S | keyof G>) => _MapStateReturn<S, G>
: never;

export type mapUserWithArray = mapStateWithArray<UserStoreType>; //WORKS but shows all state and getters

export type mapStateWithRecord<D, KeyMapper> = D extends StoreDefinition<infer Id, infer S, infer G, infer A> ? 
 (mapper: KeyMapper) => _MapStateObjectReturn<Id, S, G, A, KeyMapper>
 : never; // BUENO

export type mapUserWithRecord = mapStateWithRecord<typeof useUserStore, GenericKeyMapper<typeof useUserStore>>; //BUENO

// This hardcoded one works as expected!!!!!
export type mapUserWithHardcodedKeyMapper<D> = D extends StoreDefinition<infer Id, infer S, infer G, infer A> 
? (keyMapper) => _MapStateObjectReturn<Id, S, G, A, {loggedIn3: 'loggedIn'}> 
: never;
export type mapUserWithRecordWitHardCodedKeyMapper = mapUserWithHardcodedKeyMapper<UserStoreType>;

export type GenericKeyMapper<D> = D extends StoreDefinition<infer Id, infer S, infer G, infer A> ? 
Record<string, keyof S | keyof G | ((store: Store<Id, S, G, A>) => any)> :
never; 

export type UserKeyMapper = GenericKeyMapper<UserStoreType>;

export declare function wrapMapState<Id extends string, S extends StateTree, G extends GettersTree<S>, A, KeyMapper extends Record<string, keyof S | keyof G>>(useStore: StoreDefinition<Id, S, G, A>):
(keyMapper: KeyMapper) => _MapStateObjectReturn<Id, S, G, A, KeyMapper>;

