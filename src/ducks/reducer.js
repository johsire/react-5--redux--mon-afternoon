
const initialState = {
 loanType: 'Home Purchase',
 propertyType: 'Single Family Home',
 city: '',
 propToBeUsedOn: '',
 found: "false",
 realEstateAgent: "false",
 cost: 0,
 downPayment: 0,
 credit: '',
 history: '',
 addressOne: '',
 addressTwo: '',
 addressThree: '',
 firstName: '',
 lastName: '',
 email: '',
}


export default function reducer(state = initialState, action){
 switch(action.type){
  // case
 }

 return state;
}

export default reducer;
