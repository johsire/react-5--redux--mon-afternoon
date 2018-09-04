// APPLICATION'S INITIAL STATE:
const initialState = {
 loanType: 'Home Purchase',
 propertyType: 'Single Family Home',
 city: '',
 propToBeUsedOn: '',
 found: false,
 realEstateAgent: "false",
 cost: 0,
 downPayment: 0,
 credit: '',
 history: '',
 addressOne: '',
 addressTwo: '',
 addressThree: '',
 firstName: 'aa',
 lastName: '',
 email: '',
}


// ACTION TYPES/ CONSTANTS:
const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_PROP = "UPDATE_PROP";
const UPDATE_FOUND = "UPDATE_FOUND";

const REAL_ESTATE_AGENT = "UPDATE_REAL_ESTATE_AGENT";
const COST = "UPDATE_COST";
const DOWN_PAYMENT = "UPDATE_DOWN_PAYMENT";
const CREDIT = "UPDATE_CREDIT";
const HISTORY = "UPDATE_HISTORY";
const ADDRESSONE = "UPDATE_ADDRESSONE";
const ADDRESSTWO = "UPDATE_ADDRESSTWO";
const ADDRESSTHREE = "UPDATE_ADDRESSTHREE";
const FIRSTNAME = "UPDATE_FIRSTNAME";
const LASTNAME = "UPDATE_LASTNAME";
const EMAIL = "UPDATE_EMAIL";


// ACTION CREATOR:
export function updateLoanType( loanType ){
 return {
   type: UPDATE_LOAN_TYPE,
   payload: loanType
 }
 }
 
 export function updatePropertyType( property ) {
 return {
   type: UPDATE_PROPERTY_TYPE,
   payload: property
  }
};

export function updateCity( city ) {
 return {
   type: UPDATE_CITY,
   payload: city
  }
};

export function updateProp( prop ) {
 return {
   type: UPDATE_PROP,
   payload: prop
  }
};

export function updateFound( found ) {
 return {
   type: UPDATE_FOUND,
   payload: found
  }
};

export function updateRealEstateAgent( realEstateAgent ) {
 return {
   type: UPDATE_REAL_ESTATE_AGENT,
   payload: realEstateAgent
  }
};

export function updateCost( cost ) {
 return {
   type: UPDATE_COST,
   payload: cost
  }
};

export function updateDownPayment( downPayment ) {
 return {
   type: UPDATE_DOWN_PAYMENT,
   payload: downPayment
  }
};

export function updateCredit( credit ) {
 return {
   type: UPDATE_CREDIT,
   payload: credit
  }
};

export function updateHistory( history ) {
 return {
   type: UPDATE_HISTORY,
   payload: history
  }
};

export function updateAddressOne( addressOne ) {
 return {
   type: UPDATE_ADDRESSONE,
   payload: addressOne
  }
};

export function updateAddressTwo( addressTwo ) {
 return {
   type: UPDATE_ADDRESSTWO,
   payload: addressTwo
  }
};

export function updateAddressThree( addressThree ) {
 return {
   type: UPDATE_ADDRESSTHREE,
   payload: addressThree
  }
};

export function updateFirstName( firstName ) {
 return {
   type: UPDATE_FIRSTNAME,
   payload: firstName
  }
};

export function updateLastName( lastName ) {
 return {
   type: UPDATE_LASTNAME,
   payload: lastName
  }
};

export function updateEmail( email ) {
 return {
   type: UPDATE_EMAIL,
   payload: email
  }
};



// REDUCER w/ our diff. CASES:
function reducer( state = initialState, action ) { 

 switch( action.type ){
   case UPDATE_LOAN_TYPE:
     return Object.assign( {}, state, { loanType: action.payload } );

   case UPDATE_PROPERTY_TYPE:
     return Object.assign( {}, state, { propertyType: action.payload } );

   case UPDATE_CITY:
     return Object.assign( {}, state, { city: action.payload } );

   case UPDATE_PROP:
     return Object.assign( {}, state, { propToBeUsedOn: action.payload } );

   case UPDATE_FOUND:
     return Object.assign( {}, state, { found: action.payload } );
 }

 return state;
} 

export default reducer; 
