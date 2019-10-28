const initialState = [
  {
    id: '15997',
    drink: 'GG',
    category: 'Ordinary Drink',
    alcoholic: 'Optional alcohol',
    glass: 'Collins Glass',
    instructions:
      'Pour the Galliano liqueur over ice. Fill the remainder of the glass with ginger ale and thats all there is to it. You now have a your very own GG.',
    thumbnail:
      'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
    ingredients: [
      {
        name: 'Galliano',
        measure: '2 1/2 shots '
      },
      {
        name: 'Ginger ale',
        measure: 'Ice'
      }
    ],
    lastModified: '2016-07-18 22:06:00'
  },
  {
    id: '17222',
    drink: 'A1',
    category: 'Cocktail',
    alcoholic: 'Alcoholic',
    glass: 'Cocktail glass',
    instructions:
      'Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.',
    thumbnail:
      'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg',
    ingredients: [
      {
        name: 'Grand Marnier',
        measure: '1 Shot '
      },
      {
        name: 'Lemon Juice',
        measure: '1/4 Shot'
      },
      {
        name: 'Grenadine',
        measure: '1/8 Shot'
      },
      {
        name: 'Gin',
        measure: '1 3/4 shot '
      }
    ],
    lastModified: '2017-09-07 21:42:09'
  },
  {
    id: '13501',
    drink: 'ABC',
    category: 'Shot',
    alcoholic: 'Alcoholic',
    glass: 'Shot glass',
    instructions: 'Layered in a shot glass.',
    thumbnail:
      'https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg',
    ingredients: [
      {
        name: 'Amaretto',
        measure: '1/3 '
      },
      {
        name: "Bailey's irish cream",
        measure: '1/3 '
      },
      {
        name: 'Cognac',
        measure: '1/3 '
      }
    ],
    lastModified: '2016-08-31 19:32:08'
  },
  {
    id: '17203',
    drink: 'Kir',
    category: 'Ordinary Drink',
    alcoholic: 'Alcoholic',
    glass: 'Wine Glass',
    instructions:
      'Add the cr\u00e8me de cassis to the bottom of the glass, then top up with wine.',
    thumbnail:
      'https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg',
    ingredients: [
      {
        name: 'Creme de Cassis',
        measure: '1 part'
      },
      {
        name: 'Champagne',
        measure: '5 parts'
      }
    ],
    lastModified: '2017-09-02 17:38:14'
  }
];

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    //   case '':
    //     return [...state, { ...action.payload }];
    default:
      return state;
  }
};

export default reducer;
