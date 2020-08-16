const initialState = {
  customers: [
    {
      name: 'Felipe Balbontín',
      phone: '123456689',
      address: 'Mi casa',
      membership: 'Platinum',
      id: 1
    }
  ],
  loading: false,
  loaded: true
};

export function customerReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_CUSTOMERS':
      return {
        ...state,
        loading: true,
        loaded: false
      };

    default:
      return state;
  }
}
