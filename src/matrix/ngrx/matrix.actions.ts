import { Action } from '@ngrx/store';

export const UPDATE_MATRIX: string = 'UPDATE_MATRIX';
export const SET_PIN_MODE: string = 'SET_PIN_MODE';
export const SET_PIN_COLLAPSED: string = 'SET_PIN_COLLAPSED';
export const OPEN_INCOME_FILTER: string = 'OPEN_INCOME_FILTER';
export const OPEN_QUICK_GUIDE: string = 'OPEN_QUICK_GUIDE';
export const ADD_PLACE_TO_SET: string = 'ADD_PLACE_TO_SET';
export const REMOVE_PLACE_FROM_SET: string = 'REMOVE_PLACE_FROM_SET';
export const GET_PINNED_PLACES: string = 'GET_PINNED_PLACES';
export const GET_PINNED_PLACES_SUCCESS: string = 'GET_PINNED_PLACES_SUCCESS';
export const SET_PINNED_PLACES: string = 'SET_PINNED_PLACES';
export const GET_MATRIX_IMAGES: string = 'GET_MATRIX_IMAGES';
export const SET_MATRIX_IMAGES: string = 'SET_MATRIX_IMAGES';
export const GET_MATRIX_IMAGES_SUCCESS: string = 'GET_MATRIX_IMAGES_SUCCESS';

export class UpdateMatrix implements Action {
    readonly type = UPDATE_MATRIX;
    constructor(public payload: boolean) {}
}

export class SetPinMode implements Action {
    readonly type = SET_PIN_MODE;
    constructor(public payload: boolean) {}
}

export class SetPinCollapsed implements Action {
    readonly type = SET_PIN_COLLAPSED;
    constructor(public payload: boolean) {}
}

export class OpenIncomeFilter implements Action {
    readonly type = OPEN_INCOME_FILTER;
    constructor(public payload: boolean) {}
}

export class OpenQuickGuide implements Action {
    readonly type = OPEN_QUICK_GUIDE;
    constructor(public payload: boolean) {}
}

export class AddPlaceToSet implements Action {
    readonly type = ADD_PLACE_TO_SET;
    constructor(public payload: any) {}
}

export class RemovePlaceFromSet implements Action {
    readonly type = REMOVE_PLACE_FROM_SET;
    constructor(public payload: any) {}
}

export class GetPinnedPlaces implements Action {
    readonly type = GET_PINNED_PLACES;
    constructor(public payload: any) {}
}

export class GetPinnedPlacesSuccess implements Action {
    readonly type = GET_PINNED_PLACES_SUCCESS;
    constructor(public payload: any) {}
}

export class SetPinnedPlaces implements Action {
    readonly type = SET_PINNED_PLACES;
    constructor(public payload: any) {}
}

export class GetMatrixImages implements Action {
    readonly type = GET_MATRIX_IMAGES;
    constructor(public payload: string) {}
}

export class SetMatrixImages implements Action {
    readonly type = SET_MATRIX_IMAGES;
    constructor(public payload: any) {}
}

export class GetMatrixImagesSuccess implements Action {
    readonly type = GET_MATRIX_IMAGES_SUCCESS;
    constructor(public payload: any) {}
}

export type Actions =
    | UpdateMatrix
    | SetPinMode
    | SetPinCollapsed
    | OpenIncomeFilter
    | OpenQuickGuide
    | AddPlaceToSet
    | RemovePlaceFromSet
    | GetPinnedPlaces
    | GetPinnedPlacesSuccess
    | SetPinnedPlaces
    | GetMatrixImages
    | SetMatrixImages
    | GetMatrixImagesSuccess;