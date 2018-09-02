import React from "react";

const RecipeDetail = ({ style }) => {
  return (
    <div style={style}>
      <h2>Chicken Divan Casserole</h2>
      <img src="https://images.media-allrecipes.com/userphotos/560x315/4588683.jpg" />
      <div>
        <span>Chicken</span>
        <span>500 cal</span>
      </div>
      <h3>Ingredients</h3>
      <ul>
        <li>2 skinless, boneless chicken breast halves</li>
        <li> 4 cups broccoli florets, or to taste</li>
        <li>3 tablespoons butter</li>
        <li>salt and freshly ground black pepper to taste</li>
        <li>2 tablespoons soy sauce</li>
        <li>
          2 teaspoons Asian chile pepper sauce (such as sambal oelek), or more
          to taste
        </li>
      </ul>
      <h3>Directtions</h3>
      <ol>
        <li>
          Mash garlic to a paste with a mortar and pestle. Mix chile pepper
          sauce, maple syrup, soy sauce, mayonnaise, and rice vinegar into
          garlic until marinade is thoroughly combined.
        </li>
        <li>Preheat charcoal grill to high heat.</li>
        <li>
          Place chicken thighs onto the hot grill with smooth sides down. Cook
          until chicken shows grill marks, about 3 minutes. Turn chicken over
          and cook until other side shows grill marks, about 5 minutes. Continue
          to cook, moving them occasionally and turning over every 2 minutes,
          until meat is no longer pink inside and the thighs are golden brown,
          10 to 12 minutes.
        </li>
        <li>
          Transfer chicken to a platter, let rest for 5 minutes, and serve
          garnished with lime wedges.
        </li>
      </ol>
    </div>
  );
};

export default RecipeDetail;
