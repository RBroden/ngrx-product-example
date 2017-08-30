import { createSelector } from '@ngrx/store';
import * as R from 'ramda';

import { Product } from '../_models/product';
import * as products from './products.actions';
import { Action } from '../../../_redux/action';

export interface State {
    ids: string[];
    entities: { [id: string]: Product };
    selectedProductId: string | null;
    loaded: boolean;
    loading: boolean;
    recentProducts: string[];
    newProductInfo: {
        isCreating: boolean,
        error: any,
    };
};

export const initialState: State = {
    ids: [],
    entities: {},
    selectedProductId: null,
    loaded: false,
    loading: false,
    recentProducts: [],
    newProductInfo: {
        isCreating: false,
        error: null,
    },
};

// Reducer
export const pluckIds = R.map(R.prop('id'));
export const assocById = R.curry((acc, x) => R.assoc(x['id'], x, acc));
export const pushIfNotExist = R.ifElse(R.flip(R.contains), R.identity, R.flip(R.append));

export function reducer(state = initialState, action: Action): State {
    switch (action.type) {

        default: {
            return state;
        }
    }
};

// Selectors
export const getEntities = (state: State) => state.entities;
export const getIds = (state: State) => state.ids;
export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getSelectedId = (state: State) => state.selectedProductId;
export const getSelected = createSelector(
    getEntities,
    getSelectedId,
    (entities, selectedId) => {
        return entities[selectedId];
    }
);
export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
    return ids.map(id => entities[id]);
});
export const getProductsState = R.prop('products');
export const getAllProducts = createSelector(getProductsState, getAll);
export const getProductsLoading = createSelector(getProductsState, getLoading);
export const getProductsLoaded = createSelector(getProductsState, getLoaded);
export const getSelectedProduct = createSelector(getProductsState, getSelected);
