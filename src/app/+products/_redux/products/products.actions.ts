import { Action } from '@ngrx/store';
import { type } from '../../../_redux/util';

import { Product } from '../_models/product';

const ACTION_PREFIX = '[Products] ';

export const ActionTypes = {
    LOAD: type(ACTION_PREFIX + 'Load')
};

export class LoadAction implements Action {
    public type = ActionTypes.LOAD;
    constructor(public payload?: void) { }
}

export type Actions =
    LoadAction;
