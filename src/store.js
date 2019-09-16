import {createStore} from 'redux'

// INITIAL STATE
const initialState = {
    name: '',
    category:'',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: [],

}


// ACTION CONSTANTS
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const FIRST_NAME = 'FIRST_NAME'
export const LAST_NAME = 'LAST_NAME'
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS'
export const LIST_OF_INSTRUCTIONS = 'LIST_OF_INSTRUCTIONS'
export const ADD_RECIPES = 'ADD_RECIPES'


// REDUCER FUNCTION
function reducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case UPDATE_NAME:
            return{...state, name: payload}

        case UPDATE_CATEGORY:
            return{...state, category: payload}

        case FIRST_NAME:
            return{...state, authorFirst: payload}

        case LAST_NAME:
            return{...state, authorLast: payload}

        case ADD_INGREDIENTS:
            const newIngredients = [...state.ingredients, payload]
            return{...state, ingredients: newIngredients}

        case LIST_OF_INSTRUCTIONS:
            const newInstructions = [...state.instructions, payload]
            return{...state, instructions: newInstructions}

        case ADD_RECIPES:
            const {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions
            } = state
            const recipe = {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions
            }
            const newRecipes = [...state.recipes, recipe]
            return {...state, recipes: newRecipes}
        default:
            return state
    }
}



// CREATE STORE
export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)