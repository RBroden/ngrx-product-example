import * as R from 'ramda';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { of } from 'rxjs/observable/of';

import * as products from './products.actions';
import { ProductsService } from './products.service';
import { Product } from '../_models/product';

@Injectable()
export class ProductEffects {

    constructor(
        private actions$: Actions,
        private productsService: ProductsService,
    ) { }

}
