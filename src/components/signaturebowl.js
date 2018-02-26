import React from 'react';

const signature = [
  {
    name: 'Classic Bowls',
    price: '9.75',
    description: 'Tuna, red onion,  hijiki seaweed cucumber, edamame, avocado, topped green onion, sesame seeds',
    image: '564.JPG'
  },
  {
    name: 'Salmon Love Bowl',
    price: '11.25',
    description: 'Salmon, mango, cucumber, avocado, cilantro, spring mix, mixed with sweet & hot sauce topped with eed, sesame seeds',
    image: '500.JPG'
  },
  {
    name: 'Dragon Bowl',
    price: '11.75',
    description: 'Crab meat, cucumber, edamame, avocado, masago in spicy mayo sauce, topped with eel, sesame seeds',
    image: '504.JPG'
  },
  {
    name: 'Rainbow Bowl',
    price: '12.75',
    description: 'Tuna, salmon, yellowtail, cucumber, avocado, pineapple in ginger wasabi shoyu, with tempura crisps seaweed on top',
    image: '507.JPG'
  },
  {
    name: 'Phoenix Bowl',
    price: '9.75',
    description: 'Chicken, cucumber, red onion, edamame, carrot, cilantro mixed with classic shoyu sauce, topped with green onion, sesame seeds',
    image: '666.JPG'
  },
  {
    name: 'Volcano Bowl',
    price: '12.25',
    description: 'Spicy tuna, yellowtail, Jalapeno, cucumber, hijiki seaweed with yuzu wasabi sauce topped with onion crisps',
    image: '666.JPG'
  },
  {
    name: 'Fire Bowl',
    price: '11.25',
    description: 'Salmon, shrimp, cucumber, mango, kani salad, tomatoes with spicy mayo sauce, topped tempura crisps',
    image: '773.JPG'
  },
  {
    name: 'House Bowl',
    price: '12.95',
    description: 'Tuna, salmon, crab meat, red onion, edamame, cucumber, corn carrot in ponzu sauce & spicy mayo sauce',
    image: '583.JPG'
  },
  {
    name: 'Butterfly Love Bowl',
    price: '13.95',
    description: 'Tuna, salmon, yellowtail, mango, red onion, tomatoes, kani salad, radish with yuzu wasabi sauce',
    image: '588.JPG'
  },
  {
    name: 'Miso Tofu',
    price: '9.75',
    description: 'Organic tofu, red onion, edamame, cucumber, green onion, cilantro, carrot mixed miso glaze',
    image: '769.JPG'
  },
  {
    name: 'Vegetarian Bowl',
    price: '9.75',
    description: 'Avocado, cucmber, mango, red onion corn, carrot, tomato, radish, seaweed salad, base on spring mix in yuzu wasabi sauce',
    image: '491.JPG'
  }
]
const SignatureBowl = () => {
  return (
    <div className="build-own">
      <div className="customize container">
        <div className="build">
          <div className="triangle">
          </div>
          <div>
            <h2>Signature Bowl</h2>
          </div>
        </div>

        <div className="signature-container container">
          {signature.map((item, index) => {
            return (
              <div className="signature">
                <div className="signature-items">
                  <div className="signature-item-price">
                    <h2>{item.name}</h2>
                    <h2>{item.price}</h2>
                  </div>
                  <br />
                  <div className="container">
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className="signature-image">
                  <img src={require(`../static/images/${item.image}`)}/>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SignatureBowl;
