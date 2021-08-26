import { mapState, StateTree, StoreDefinition, _MapStateReturn, _MapStateObjectReturn, GettersTree, Store } from 'pinia';
import { useUserStore, storeDefinition, mapUserStateWithParamAndReturns } from './user-store';

type UserStoreType = typeof useUserStore;

// Conditional TYPE
type inferMapState<D> = D extends StoreDefinition<infer Id, infer S, infer G, infer A> ? 
(keys: Array<keyof S | keyof G>) => _MapStateReturn<S, G>
: never;

type InferredMapUserStateWithKeys = inferMapState<UserStoreType>;

// TODO: could we somehow avoid KeyMapper duplication??
type inferMapStateWithMapper<D> = D extends StoreDefinition<infer Id, infer S, infer G, infer A> 
? (KeyMapper: Record<string, keyof S | keyof G | ((store: Store<Id, S, G, A>) => any)>) => 
_MapStateObjectReturn<Id, S, G, A, Record<string, keyof S | keyof G | ((store: Store<Id, S, G, A>) => any)>> 
: never;

type InferredMapUserStateWithMapper = inferMapStateWithMapper<UserStoreType>;

type InferredKeyMapper<D> = D extends StoreDefinition<infer Id, infer S, infer G, infer A> ?  
Record<string, keyof S | keyof G | ((store: Store<Id, S, G, A>) => any)>
:  never;

type UserKeyMapper = InferredKeyMapper<UserStoreType>;

//To compare 
type MapStateOriginalType = typeof mapState;

type InferredMapUserState = InferredMapUserStateWithKeys | InferredMapUserStateWithMapper;





type InferredMapUserReturn = inferReturn<UserStoreType>;


export type mapFani<D> = D extends StoreDefinition<infer Id, infer S, infer G, infer A> ? 
(keys: Array<keyof S | keyof G>) => _MapStateReturn<S, G>
: never;

export type mapUserFani = mapFani<UserStoreType>;


export type mapStateWithArray<D> = D extends StoreDefinition<infer Id, infer S, infer G, infer A> ? 
(keys: Array<keyof S | keyof G>) => _MapStateReturn<S, G>
: never;

export type mapUserWithArray = mapStateWithArray<UserStoreType>; //WORKS but shows all state and getters

export type mapStateWithRecord<D, KeyMapper> = D extends StoreDefinition<infer Id, infer S, infer G, infer A> ? 
 (mapper: KeyMapper) => _MapStateObjectReturn<Id, S, G, A, KeyMapper>
 : never; // BUENO

export type mapUserWithRecord = mapStateWithRecord<UserStoreType, InferredKeyMapper<UserStoreType>>; //BUENO

// This hardcoded one works as expected!!!!!
export type mapUserWithHardcodedKeyMapper<D> = D extends StoreDefinition<infer Id, infer S, infer G, infer A> 
? (keyMapper) => _MapStateObjectReturn<Id, S, G, A, {loggedIn3: 'loggedIn'}> 
: never;
export type mapUserWithRecordWitHardCodedKeyMapper = mapUserWithHardcodedKeyMapper<UserStoreType>; //WORKS

export type GenericKeyMapper<D> = D extends StoreDefinition<infer Id, infer S, infer G, infer A> ? 
Record<string, keyof S | keyof G | ((store: Store<Id, S, G, A>) => any)> :
never; 
