import ActionType from "./Types";

const INITIAL_STATE = {
  currentProperty: null,
  propertySignInSuccess: false,
  propertySignUpSuccess: false,
  propertyRecoverySuccess: false,
  // Fetch
  fetchUserD: null,
  // Errors
  errors: [],
  userData:undefined,
};

const userReducer = (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    // AUTH
   
    case ActionType.FETCH_USER:
      return {
        ...state,
        fetchUserD: action.payload,
      };

   
    case ActionType.RESET_STATES:
      return {
        currentProperty: null,
        propertySignInSuccess: false,
        propertySignUpSuccess: false,
        propertyRecoverySuccess: false,
        // Fetch
        fetchUserD: null,
        // Errors
        errors: [],
        userData:undefined,

      };
    // DEFAULT
    default:
      return state;
  }
};
export default userReducer;
